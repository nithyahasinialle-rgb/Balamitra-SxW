const { evaluateTrajectory } = require("./growthEngine");

function connectTheDots(child, growths, nutritions, developments, lang = "en") {
  const sortedG = [...growths].sort((a, b) => b.timestampEpochMs - a.timestampEpochMs);
  const sortedN = [...nutritions].sort((a, b) => b.timestampEpochMs - a.timestampEpochMs);
  const sortedD = [...developments].sort((a, b) => b.timestampEpochMs - a.timestampEpochMs);

  const latestW = sortedG[0]?.weightKg ?? null;
  const prevW = sortedG[1]?.weightKg ?? null;
  const traj = evaluateTrajectory(latestW, prevW);
  const recentIllness = sortedN.some((n) => n.hadIllness);
  const devFollowUp = sortedD.some((d) => d.needsFollowUp);

  if (child.specialNeedsType === "SPEECH_HEARING") {
    if (lang === "te") {
      return {
        headline: "🗣️ మాటలు & వినికిడి వికాస అనుసంధానం",
        story: `${child.name} కంటి చూపు మరియు చిత్రపటాల ద్వారా బాగా స్పందిస్తున్నారు, కానీ మౌఖిక సూచనలలో సహాయం అవసరం. మెత్తని ఆహారం (${child.adaptiveDietPlan?.slice(0, 40)}...) దవడ కండరాల బలాన్ని పెంచి మాటల ఉచ్చారణకు తోడ్పడుతుంది.`,
        recommendation: "రోజువారీ దృశ్య కార్డులు & పెదవుల కదలికల సాధనతో పాటు RBSK/DEIC స్పీచ్ స్క్రీనింగ్ కొనసాగించండి."
      };
    }
    if (lang === "hi") {
      return {
        headline: "🗣️ वाणी और श्रवण विकास संबंध",
        story: `${child.name} चित्र कार्ड और संकेतों पर अच्छी प्रतिक्रिया दे रहे हैं, लेकिन मौखिक निर्देशों में सहायता की आवश्यकता है। नरम आहार जबड़े की मांसपेशियों को मजबूत कर बोलने में मदद करता है।`,
        recommendation: "दैनिक चित्र-कार्ड अभ्यास के साथ RBSK/DEIC स्पीच थेरेपी स्क्रीनिंग जारी रखें।"
      };
    }
    return {
      headline: "🗣️ Oral-Motor Nutrition & Speech Trajectory Linked",
      story: `${child.name} responds strongly to visual cues and gestures, while 2-step verbal instructions still need visual scaffolding. Steady weight (${latestW || 15.6} kg) paired with soft mastication meals supports oral-motor tongue mobility.`,
      recommendation: "Continue face-to-face Visual Flashcards & Gestural Naming and monitor RBSK/DEIC speech referral milestones."
    };
  }

  if (traj === "DECREASING" && recentIllness) {
    if (lang === "te") {
      return {
        headline: "📉 ఇటీవలి జ్వరం — బరువు తగ్గుదల & శక్తి లోపం",
        story: `${child.name} బరువు ${prevW} kg నుండి ${latestW} kg కి తగ్గింది. ఇదే సమయంలో జ్వరం మరియు ఆహార ఆసక్తి తగ్గడం, ఆటలలో అలసట గమనించబడింది.`,
        recommendation: "ఈ వారం అధిక శక్తినిచ్చే ఖిచ్డీ, పప్పు, గుడ్డుతో పాటు తేలికపాటి కూర్చునే ఆటలను ప్రాధాన్యత ఇవ్వండి."
      };
    }
    if (lang === "hi") {
      return {
        headline: "📉 हालिया बुखार — वजन में गिरावट और थकान का संबंध",
        story: `${child.name} का वजन ${prevW} किग्रा से घटकर ${latestW} किग्रा हो गया है। इसी अवधि में बुखार और कम भूख के कारण खेल में थकान देखी गई।`,
        recommendation: "इस सप्ताह ऊर्जा-युक्त खिचड़ी, दाल व अंडे के साथ हल्की बैठने वाली गतिविधियां कराएं।"
      };
    }
    return {
      headline: "📉 Post-Illness Weight Dip Linked to Classroom Fatigue",
      story: `${child.name}'s weight shifted from ${prevW} kg to ${latestW} kg alongside a reported illness episode and reduced appetite, explaining recent fatigue during cup-stacking.`,
      recommendation: "Prioritize calorie-dense recovery meals (khichdi, dal, egg) and low-fatigue seated cognitive activities for 7 days."
    };
  }

  if (lang === "te") {
    return {
      headline: "✅ పోషకాహారం & వికాస సమతుల్యత",
      story: `${child.name} క్రమం తప్పకుండా బరువు (${latestW || "నమోదైంది"} kg) పెరుగుతూ, పాఠశాల/కేంద్రం ఆటలలో ఉత్సాహంగా పాల్గొంటున్నారు.${devFollowUp ? " కొన్ని నైపుణ్యాలలో అదనపు సాధన ప్రయోజనకరంగా ఉంటుంది." : ""}`,
      recommendation: "ప్రస్తుత పోషకాహార ప్రణాళిక మరియు వయస్సుకు తగిన వికాస ఆటలను కొనసాగించండి."
    };
  }
  if (lang === "hi") {
    return {
      headline: "✅ पोषण और विकास में सकारात्मक तालमेल",
      story: `${child.name} का वजन (${latestW || "दर्ज"} किग्रा) नियमित रूप से बढ़ रहा है और वे केंद्र की गतिविधियों में सक्रिय हैं।${devFollowUp ? " कुछ कौशलों में अतिरिक्त अभ्यास लाभकारी होगा।" : ""}`,
      recommendation: "वर्तमान पोषण योजना और आयु-अनुकूल खेल गतिविधियां जारी रखें।"
    };
  }
  return {
    headline: "✅ Positive Nutrition-to-Development Alignment",
    story: `${child.name} shows steady longitudinal growth (${latestW ? latestW + " kg" : "baseline tracked"}) supported by regular AWC meal intake.${devFollowUp ? " Targeted practice on flagged developmental milestones is recommended." : ""}`,
    recommendation: "Maintain current SNP meal schedule and reinforce daily age-appropriate ECCE play."
  };
}

function getWhatChangedSummary(child, growths, developments, lang = "en") {
  const sortedG = [...growths].sort((a, b) => b.timestampEpochMs - a.timestampEpochMs);
  const latest = sortedG[0];
  const prev = sortedG[1];
  const devCount = developments.length;

  if (!latest) {
    return lang === "te"
      ? `${child.name} కోసం ఇంకా బరువు కొలతలు నమోదు కాలేదు.`
      : lang === "hi"
        ? `${child.name} के लिए अभी तक वजन माप दर्ज नहीं है।`
        : `No weight measurements recorded yet for ${child.name}.`;
  }

  const deltaW = prev ? (latest.weightKg - prev.weightKg).toFixed(1) : null;
  const deltaH = prev && latest.heightCm && prev.heightCm ? (latest.heightCm - prev.heightCm).toFixed(1) : null;

  if (lang === "te") {
    return `బరువు మార్పు: ${prev ? `${prev.weightKg} kg → ${latest.weightKg} kg (${deltaW > 0 ? "+" : ""}${deltaW} kg)` : `${latest.weightKg} kg (ప్రారంభం)`}. ${deltaH ? `ఎత్తు: +${deltaH} cm.` : ""} మొత్తం వికాస పరిశీలనలు: ${devCount}.`;
  }
  if (lang === "hi") {
    return `वजन में बदलाव: ${prev ? `${prev.weightKg} kg → ${latest.weightKg} kg (${deltaW > 0 ? "+" : ""}${deltaW} kg)` : `${latest.weightKg} kg (प्रारंभिक)`}। ${deltaH ? `ऊंचाई: +${deltaH} cm।` : ""} कुल विकास अवलोकन: ${devCount}।`;
  }
  return `Weight Change: ${prev ? `${prev.weightKg} kg → ${latest.weightKg} kg (${deltaW > 0 ? "+" : ""}${deltaW} kg)` : `${latest.weightKg} kg (Baseline)`}. ${deltaH ? `Height: +${deltaH} cm.` : ""} Total developmental logs: ${devCount}.`;
}

module.exports = { connectTheDots, getWhatChangedSummary };
