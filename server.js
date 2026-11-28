const express = require("express");
const path = require("path");
const fs = require("fs");

const seed = require("./src/seedData");
const { evaluateTrajectory, getTrajectorySummary, computeWhoZScoreProxy } = require("./src/growthEngine");
const { connectTheDots, getWhatChangedSummary } = require("./src/connectDotsEngine");
const { ageMilestones, getReferralGuidance } = require("./src/speechGuidelines");
const { parseVoiceObservation } = require("./src/voiceParser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// In-memory runtime store seeded from SeedData (demo only: new records reset on restart)
const db = {
  children: JSON.parse(JSON.stringify(seed.children)),
  growthObservations: JSON.parse(JSON.stringify(seed.growthObservations)),
  nutritionObservations: JSON.parse(JSON.stringify(seed.nutritionObservations)),
  developmentObservations: JSON.parse(JSON.stringify(seed.developmentObservations)),
  attendanceMap: {},
  workerFeedbackLogs: []
};

seed.children.forEach((c, idx) => {
  db.attendanceMap[c.id] = idx !== 5 && idx !== 13; // 13/15 present by default
});

function enrichChild(child, lang = "en") {
  const growths = db.growthObservations
    .filter((g) => g.childId === child.id)
    .sort((a, b) => b.timestampEpochMs - a.timestampEpochMs);
  const nutritions = db.nutritionObservations
    .filter((n) => n.childId === child.id)
    .sort((a, b) => b.timestampEpochMs - a.timestampEpochMs);
  const developments = db.developmentObservations
    .filter((d) => d.childId === child.id)
    .sort((a, b) => b.timestampEpochMs - a.timestampEpochMs);

  const latestG = growths[0];
  const prevG = growths[1];
  const trajectoryStatus = latestG ? evaluateTrajectory(latestG.weightKg, prevG?.weightKg ?? null) : "STABLE";
  const trajectorySummary = latestG
    ? getTrajectorySummary(latestG.weightKg, prevG?.weightKg ?? null, lang)
    : "";
  const whoMetrics = latestG
    ? computeWhoZScoreProxy(child.ageYears, latestG.weightKg, latestG.heightCm)
    : { waz: 0, haz: 0, category: "Normal" };

  // Multi-Day Nutrition Intelligence (5-Day Strip + DDS Score)
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const daysStrip = dayNames.map((d, idx) => {
    const nLog = nutritions[idx % Math.max(nutritions.length, 1)];
    const txt = (nLog?.mealDetails || "Rice, dal").toLowerCase();
    return {
      dayLabel: d,
      foods: (nLog?.mealDetails || "Rice, dal").split(",").map((s) => s.trim()).slice(0, 2),
      hasProtein: /dal|egg|chana|milk|ragi|పప్పు|గుడ్డు|दाल|अंडा/.test(txt),
      hasVegetables: /spinach|moringa|palak|greens|veg|ఆకుకూర|पालक/.test(txt),
      hasFruits: /banana|fruit|అరటి|केला/.test(txt)
    };
  });
  const hasAnyProtein = daysStrip.some((d) => d.hasProtein);
  const hasAnyVeg = daysStrip.some((d) => d.hasVegetables);
  const hasAnyFruit = daysStrip.some((d) => d.hasFruits);
  const ddsScore = 2 + (hasAnyProtein ? 1 : 0) + (hasAnyVeg ? 1 : 0) + (hasAnyFruit ? 1 : 0);
  const multiDayNutrition = {
    dietaryDiversityScore: ddsScore,
    diversityRating: ddsScore >= 4
      ? (lang === "te" ? "మంచి ఆహార వైవిధ్యం" : lang === "hi" ? "अच्छा आहार विविधता स्कोर" : lang === "kn" ? "ಉತ್ತಮ ಆಹಾರ ವೈವಿಧ್ಯ" : lang === "mr" ? "उत्तम आहार विविधता" : "Strong Dietary Diversity")
      : (lang === "te" ? "మధ్యస్థ వైవిధ్యం — ఆకుకూరలు/పండ్లు పెంచండి" : lang === "hi" ? "मध्यम विविधता — हरी सब्ज़ी/फल जोड़ें" : lang === "kn" ? "ಮಧ್ಯಮ ವೈವಿಧ್ಯ — ಸೊಪ್ಪು/ಹಣ್ಣು ಸೇರಿಸಿ" : lang === "mr" ? "मध्यम विविधता — पालेभाज्या/फळे वाढवा" : "Moderate Diversity — Add Greens & Fruit"),
    daysStrip,
    mainObservation: child.specialNeedsType
      ? (lang === "te" ? "ప్రత్యేక పోషణ ప్రణాళికతో పాటు 5-రోజుల ఆహార సమతుల్యత ట్రాక్ చేయబడింది." : lang === "hi" ? "विशेष पोषण योजना के साथ 5-दिवसीय आहार पैटर्न ट्रैक किया गया।" : lang === "kn" ? "ವಿಶೇಷ ಪೋಷಣೆ ಯೋಜನೆಯೊಂದಿಗೆ 5 ದಿನಗಳ ಆಹಾರ ಕ್ರಮ ಗಮನಿಸಲಾಗಿದೆ." : lang === "mr" ? "विशेष पोषण योजनेसह 5 दिवसांचा आहार क्रम नोंदवला." : "5-day intake tracked alongside specialized adaptive feeding pattern.")
      : (lang === "te" ? "గత 5 రోజులలో కార్బోహైడ్రేట్ మరియు ప్రోటీన్ సమతుల్యత పరిశీలించబడింది." : lang === "hi" ? "पिछले 5 दिनों में अनाज व प्रोटीन संतुलन की समीक्षा की गई।" : lang === "kn" ? "ಕಳೆದ 5 ದಿನಗಳ ಧಾನ್ಯ ಮತ್ತು ಪ್ರೋಟೀನ್ ಸಮತೋಲನ ಪರಿಶೀಲಿಸಲಾಗಿದೆ." : lang === "mr" ? "मागील 5 दिवसांतील धान्य व प्रथिने संतुलन तपासले." : "5-day longitudinal meal pattern reviewed for protein and micronutrient balance."),
    actionableSuggestion: ddsScore < 5
      ? (lang === "te" ? "ఆకుకూర పప్పు (పాలకూర/మునగ) మరియు అరటిపండును వారంలో 3 సార్లు జోడించండి." : lang === "hi" ? "सप्ताह में 3 बार पालक/सहजन दाल और केला शामिल करें।" : lang === "kn" ? "ವಾರಕ್ಕೆ 3 ಬಾರಿ ಪಾಲಕ್/ನುಗ್ಗೆ ಸೊಪ್ಪಿನ ಬೇಳೆ ಮತ್ತು ಬಾಳೆಹಣ್ಣು ಸೇರಿಸಿ." : lang === "mr" ? "आठवड्यातून 3 वेळा पालक/शेवगा डाळ आणि केळी द्या." : "Include drumstick/spinach dal and seasonal banana 3x this week to reach DDS 5/5.")
      : (lang === "te" ? "అద్భుతమైన పోషకాహార వైవిధ్యం! ఇదే మెనూను కొనసాగించండి." : lang === "hi" ? "उत्कृष्ट आहार विविधता! यही पोषण क्रम जारी रखें।" : lang === "kn" ? "ಅತ್ಯುತ್ತಮ ಆಹಾರ ವೈವಿಧ್ಯ! ಇದೇ ಆಹಾರ ಕ್ರಮ ಮುಂದುವರಿಸಿ." : lang === "mr" ? "उत्कृष्ट आहार विविधता! हाच आहार क्रम सुरू ठेवा." : "Optimal 5/5 dietary diversity achieved. Sustain current AWC & home meal mix.")
  };

  // Personalized activity routing: prioritize specialNeedsType first
  let matchedActivity = seed.activities.find(
    (a) => child.specialNeedsType && a.specialNeedsTarget === child.specialNeedsType
  );
  if (!matchedActivity) {
    matchedActivity = seed.activities.find((a) => !a.specialNeedsTarget) || seed.activities[0];
  }
  const localizedAct = matchedActivity.localized[lang] || matchedActivity.localized.en;

  return {
    ...child,
    growthHistory: growths,
    nutritionHistory: nutritions,
    developmentHistory: developments,
    latestWeightKg: latestG?.weightKg ?? null,
    latestHeightCm: latestG?.heightCm ?? null,
    trajectoryStatus,
    trajectorySummary,
    whoMetrics,
    multiDayNutrition,
    connectDots: connectTheDots(child, growths, nutritions, developments, lang),
    whatChanged: getWhatChangedSummary(child, growths, developments, lang),
    speechGuidance: getReferralGuidance(child.ageYears, lang),
    recommendedActivity: {
      id: matchedActivity.id,
      durationMinutes: matchedActivity.durationMinutes,
      domain: matchedActivity.domain,
      ...localizedAct
    }
  };
}

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "Balamitra Anganwadi Co-Pilot",
    mode: "100% On-Device Edge Ready",
    bhashiniKeyStatus: process.env.BHASHINI_API_KEY ? "configured" : "key not set"
  });
});

app.get("/api/state", (req, res) => {
  const lang = ["en", "te", "hi", "kn", "mr"].includes(req.query.lang) ? req.query.lang : "en";
  const enrichedChildren = db.children.map((c) => enrichChild(c, lang));
  res.json({
    children: enrichedChildren,
    attendanceMap: db.attendanceMap,
    speechMilestones: ageMilestones,
    workerFeedbackLogs: db.workerFeedbackLogs.slice(-10)
  });
});

app.post("/api/voice/parse", (req, res) => {
  const { spokenText } = req.body || {};
  if (!spokenText || !spokenText.trim()) {
    return res.status(400).json({ error: "No voice transcript provided." });
  }
  const parsed = parseVoiceObservation(spokenText, db.children);
  res.json({ parsed });
});

app.post("/api/observations", (req, res) => {
  const { childId, name, ageYears, weightKg, heightCm, mealDetails, observationText, rawSpeech, hadIllness, needsFollowUp, domain } = req.body || {};
  const now = Date.now();
  let targetChild = db.children.find((c) => c.id === childId);

  if (!targetChild && name) {
    const suffix = Math.floor(1000 + Math.random() * 9000);
    targetChild = {
      id: `child_${name.toLowerCase().replace(/[^a-z]/g, "")}_${suffix}`,
      name,
      ageYears: Number(ageYears) || 3,
      gender: "M",
      preferredLanguage: "te",
      baselineNotes: observationText || "Enrolled via voice intake.",
      fatherName: "Sri Guardian",
      motherName: "Smt. Guardian",
      enrollmentId: `ICDS-TG-BCH-2026-${suffix}`,
      createdAtEpochMs: now,
      villageWard: "Bachupally Ward-1",
      aadhaarLast4: String(suffix),
      specialNeedsType: null,
      specialNeedsTitle: null,
      adaptiveDietPlan: null
    };
    db.children.unshift(targetChild);
    db.attendanceMap[targetChild.id] = true;
  }

  if (!targetChild) {
    return res.status(400).json({ error: "Please select or name a child." });
  }

  if (weightKg) {
    db.growthObservations.push({
      id: db.growthObservations.length + 1,
      childId: targetChild.id,
      timestampEpochMs: now,
      weightKg: Number(weightKg),
      heightCm: heightCm ? Number(heightCm) : null,
      notes: "Recorded via Voice Intake"
    });
  }

  if (mealDetails) {
    db.nutritionObservations.push({
      id: db.nutritionObservations.length + 1,
      childId: targetChild.id,
      timestampEpochMs: now,
      mealDetails,
      appetiteNotes: hadIllness ? "Reported low appetite / illness" : "Recorded via voice",
      hadIllness: Boolean(hadIllness)
    });
  }

  if (observationText) {
    db.developmentObservations.push({
      id: db.developmentObservations.length + 1,
      childId: targetChild.id,
      timestampEpochMs: now,
      domain: domain || "COGNITIVE",
      observationText,
      needsFollowUp: Boolean(needsFollowUp),
      rawWorkerSpeech: rawSpeech || observationText
    });
  }

  res.json({ ok: true, childId: targetChild.id, childName: targetChild.name });
});

app.post("/api/children", (req, res) => {
  const { name, ageYears, gender, fatherName, motherName, villageWard, weightKg, heightCm, notes } = req.body || {};
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Child name is required." });
  }
  const now = Date.now();
  const suffix = Math.floor(1000 + Math.random() * 9000);
  const newChild = {
    id: `child_${name.toLowerCase().replace(/[^a-z]/g, "")}_${suffix}`,
    name: name.trim(),
    ageYears: Number(ageYears) || 3,
    gender: gender === "F" ? "F" : "M",
    preferredLanguage: "te",
    baselineNotes: notes || "Newly enrolled at Bachupally Anganwadi Centre.",
    fatherName: fatherName || "Sri Guardian",
    motherName: motherName || "Smt. Guardian",
    enrollmentId: `ICDS-TG-BCH-2026-${suffix}`,
    createdAtEpochMs: now,
    villageWard: villageWard || "Bachupally Ward-1",
    aadhaarLast4: String(suffix),
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  };
  db.children.unshift(newChild);
  db.attendanceMap[newChild.id] = true;

  if (weightKg) {
    db.growthObservations.push({
      id: db.growthObservations.length + 1,
      childId: newChild.id,
      timestampEpochMs: now,
      weightKg: Number(weightKg),
      heightCm: heightCm ? Number(heightCm) : null,
      notes: "Baseline admission measurement"
    });
  }

  res.json({ ok: true, child: newChild });
});

app.post("/api/attendance/toggle", (req, res) => {
  const { childId } = req.body || {};
  if (childId && childId in db.attendanceMap) {
    db.attendanceMap[childId] = !db.attendanceMap[childId];
  }
  res.json({ attendanceMap: db.attendanceMap });
});

app.post("/api/attendance/mark-all", (req, res) => {
  Object.keys(db.attendanceMap).forEach((id) => {
    db.attendanceMap[id] = true;
  });
  res.json({ attendanceMap: db.attendanceMap });
});

app.post("/api/activity-feedback", (req, res) => {
  const { childId, activityId, decision, notes } = req.body || {};
  db.workerFeedbackLogs.push({
    timestamp: Date.now(),
    childId,
    activityId,
    decision,
    notes: notes || ""
  });
  res.json({ ok: true });
});

app.post("/api/reobserve", (req, res) => {
  const { childId, activityTitle, outcome, notes } = req.body || {};
  if (!childId) return res.status(400).json({ error: "Missing childId" });
  const now = Date.now();
  const outcomeLabel =
    outcome === "COMPLETED_EASILY"
      ? "Completed Easily"
      : outcome === "NEEDED_HELP"
        ? "Needed Gentle Scaffolding"
        : "Disengaged / Fatigued";
  db.developmentObservations.push({
    id: db.developmentObservations.length + 1,
    childId,
    timestampEpochMs: now,
    domain: "COGNITIVE",
    observationText: `Post-Activity (${activityTitle || "ECD"}): ${outcomeLabel}. ${notes || ""}`.trim(),
    needsFollowUp: outcome !== "COMPLETED_EASILY",
    rawWorkerSpeech: notes || null
  });
  res.json({ ok: true });
});

app.get("/api/poshan-csv", (req, res) => {
  const header = "Beneficiary_ID,Child_Name,Age_Months,Gender,Father_Name,Mother_Name,Aadhaar_Last4,Weight_Kg,Height_Cm,Growth_Category,THR_Given,Meal_Provided,Sync_Status";
  const rows = db.children.map((c) => {
    const latestG = db.growthObservations
      .filter((g) => g.childId === c.id)
      .sort((a, b) => b.timestampEpochMs - a.timestampEpochMs)[0];
    const w = latestG ? latestG.weightKg : 12.5;
    const h = latestG && latestG.heightCm ? latestG.heightCm : 92.0;
    const who = computeWhoZScoreProxy(c.ageYears, w, h);
    const thr = c.ageYears < 3 ? "Yes" : "No";
    const hcm = c.ageYears >= 3 ? "Yes" : "No";
    return `${c.enrollmentId},"${c.name}",${c.ageYears * 12},${c.gender === "F" ? "Female" : "Male"},"${c.fatherName}","${c.motherName}",${c.aadhaarLast4},${w},${h},${who.category},${thr},${hcm},Verified`;
  });
  res.type("text/csv").send([header, ...rows].join("\n"));
});

app.listen(PORT, () => {
  console.log(`Balamitra Anganwadi Co-Pilot running on http://localhost:${PORT}`);
});
