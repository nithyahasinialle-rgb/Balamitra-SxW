/**
 * Deterministic WHO-median growth proxy (WAZ/HAZ) & trajectory engine.
 * Uses an approximated SD, not the full WHO LMS method.
 * Adheres strictly to non-diagnostic, neutral observational language.
 */

const WHO_WEIGHT_MEDIAN = {
  1: 9.6,
  2: 12.2,
  3: 14.3,
  4: 16.3,
  5: 18.3,
  6: 20.2
};

const WHO_HEIGHT_MEDIAN = {
  1: 75.7,
  2: 87.8,
  3: 96.1,
  4: 103.3,
  5: 110.0,
  6: 115.5
};

function evaluateTrajectory(currentWeightKg, previousWeightKg) {
  if (previousWeightKg == null) return "STABLE";
  const diff = currentWeightKg - previousWeightKg;
  if (diff > 0.05) return "INCREASING";
  if (diff < -0.2) return "DECREASING";
  return "STABLE";
}

function getTrajectorySummary(currentWeightKg, previousWeightKg, lang = "en") {
  if (previousWeightKg == null) {
    if (lang === "te") return `ప్రస్తుత బరువు: ${currentWeightKg} కిలోలు. ప్రాథమిక రికార్డు నమోదైంది.`;
    if (lang === "hi") return `वर्तमान वजन: ${currentWeightKg} किग्रा। आधारभूत रिकॉर्ड दर्ज किया गया।`;
    if (lang === "kn") return `ಪ್ರಸ್ತುತ ತೂಕ: ${currentWeightKg} ಕೆಜಿ. ಪ್ರಾಥಮಿಕ ದಾಖಲೆ ಸೇರಿಸಲಾಗಿದೆ.`;
    if (lang === "mr") return `सध्याचे वजन: ${currentWeightKg} किलो. प्राथमिक नोंदणी पूर्ण झाली.`;
    return `Current weight recorded: ${currentWeightKg} kg. Baseline established.`;
  }
  const diff = currentWeightKg - previousWeightKg;
  const absDiff = Math.abs(diff).toFixed(1);
  if (diff > 0.05) {
    if (lang === "te") return `మునుపటి కొలత కంటే ${absDiff} కిలోలు పెరిగింది. ఎదుగుదల సానుకూలంగా ఉంది.`;
    if (lang === "hi") return `पिछली माप से वजन ${absDiff} किग्रा बढ़ा है। विकास की दिशा सकारात्मक है।`;
    if (lang === "kn") return `ಹಿಂದಿನ ಅಳತೆಗಿಂತ ${absDiff} ಕೆಜಿ ತೂಕ ಹೆಚ್ಚಾಗಿದೆ. ಬೆಳವಣಿಗೆ ಉತ್ತಮವಾಗಿದೆ.`;
    if (lang === "mr") return `मागील मोजमापापेक्षा वजन ${absDiff} किलोने वाढले आहे. वाढ सकारात्मक आहे.`;
    return `Weight increased by ${absDiff} kg since previous measurement. Trajectory is positive.`;
  }
  if (diff < -0.2) {
    if (lang === "te") return `మునుపటి కొలత కంటే ${absDiff} కిలోలు తగ్గింది. పోషకాహార సమీక్ష అవసరం.`;
    if (lang === "hi") return `पिछली माप से वजन ${absDiff} किग्रा कम हुआ है। पोषण समीक्षा की आवश्यकता है।`;
    if (lang === "kn") return `ಹಿಂದಿನ ಅಳತೆಗಿಂತ ${absDiff} ಕೆಜಿ ತೂಕ ಕಡಿಮೆಯಾಗಿದೆ. ಪೋಷಣೆ ಪರಿಶೀಲನೆ ಅಗತ್ಯ.`;
    if (lang === "mr") return `मागील मोजमापापेक्षा वजन ${absDiff} किलोने कमी झाले आहे. पोषण तपासणी आवश्यक.`;
    return `Weight decreased by ${absDiff} kg since previous measurement. Trajectory indicates review.`;
  }
  if (lang === "te") return `బరువు స్థిరంగా ఉంది (${currentWeightKg} కిలోలు).`;
  if (lang === "hi") return `वजन स्थिर है (${currentWeightKg} किग्रा)।`;
  if (lang === "kn") return `ತೂಕ ಸ್ಥಿರವಾಗಿದೆ (${currentWeightKg} ಕೆಜಿ).`;
  if (lang === "mr") return `वजन स्थिर आहे (${currentWeightKg} किलो).`;
  return `Weight is stable (${currentWeightKg} kg) relative to previous measurement.`;
}

function computeWhoZScoreProxy(ageYears, weightKg, heightCm) {
  const medianW = WHO_WEIGHT_MEDIAN[ageYears] || 14.3;
  const sdW = medianW * 0.12;
  const waz = Number(((weightKg - medianW) / sdW).toFixed(2));

  let haz = 0;
  if (heightCm) {
    const medianH = WHO_HEIGHT_MEDIAN[ageYears] || 96.1;
    const sdH = medianH * 0.042;
    haz = Number(((heightCm - medianH) / sdH).toFixed(2));
  }

  let category = "Normal";
  if (waz < -3.0) category = "SAM";
  else if (waz < -2.0) category = "MAM";

  return { waz, haz, category };
}

module.exports = {
  evaluateTrajectory,
  getTrajectorySummary,
  computeWhoZScoreProxy
};
