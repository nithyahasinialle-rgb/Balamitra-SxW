/**
 * Multilingual Indic Voice-First NLP Parser (Telugu, Hindi, English)
 * Extracts child identity, age, weight, height, meals, illness, and developmental notes.
 */

const NUM_WORD_MAP = {
  "ఒకటి": 1, "రెండు": 2, "మూడు": 3, "నాలుగు": 4, "ఐదు": 5, "ఆరు": 6,
  "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6,
  "एक": 1, "दो": 2, "तीन": 3, "चार": 4, "पाँच": 5, "पांच": 5, "छह": 6
};

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

function parseVoiceObservation(spokenText, existingChildren = []) {
  const clean = (spokenText || "").trim();
  const lower = clean.toLowerCase();

  // 1. Match against existing children first (exact or Levenshtein <= 2)
  let matchedChild = null;
  const tokens = lower.split(/[\s,.\-]+/).filter(Boolean);
  for (const child of existingChildren) {
    const cname = child.name.toLowerCase();
    if (lower.includes(cname)) {
      matchedChild = child;
      break;
    }
    for (const tok of tokens) {
      if (tok.length >= 3 && levenshtein(tok, cname) <= 2) {
        matchedChild = child;
        break;
      }
    }
    if (matchedChild) break;
  }

  // Fallback name extraction if new child
  let extractedName = matchedChild ? matchedChild.name : null;
  if (!extractedName) {
    const nameMatch = clean.match(/(?:name\s*is|పేరు|नाम)\s*[:=\-]?\s*([a-zA-Z\u0C00-\u0C7F\u0900-\u097F]+)/i);
    if (nameMatch) {
      extractedName = nameMatch[1];
    } else if (tokens[0] && /^[a-zA-Z]{3,20}$/.test(tokens[0])) {
      extractedName = tokens[0][0].toUpperCase() + tokens[0].slice(1);
    }
  }

  // 2. Age extraction
  let ageYears = matchedChild ? matchedChild.ageYears : null;
  const ageRegex = /(?:వయస్సు|వయసు|age|उम्र)\s*[:=\-]?\s*(\d{1,2})|(\d{1,2})\s*(?:సంవత్సరాలు|సంవత్సరాల|years|yrs|साल|वर्ष)/i;
  const ageMatch = clean.match(ageRegex);
  if (ageMatch) {
    ageYears = parseInt(ageMatch[1] || ageMatch[2], 10);
  } else if (!ageYears) {
    for (const [word, val] of Object.entries(NUM_WORD_MAP)) {
      if (lower.includes(word)) {
        ageYears = val;
        break;
      }
    }
  }

  // 3. Weight extraction (kg)
  let weightKg = null;
  const weightRegex = /(?:బరువు|weight|वजन|wt)\s*[:=\-]?\s*(\d{1,2}(?:\.\d{1,2})?)|(\d{1,2}(?:\.\d{1,2})?)\s*(?:కిలోలు|కేజీలు|కేజీ|kg|kgs|किलो)/i;
  const weightMatch = clean.match(weightRegex);
  if (weightMatch) {
    const w = parseFloat(weightMatch[1] || weightMatch[2]);
    if (w >= 4.0 && w <= 45.0) weightKg = w;
  }

  // 4. Height extraction (cm)
  let heightCm = null;
  const heightRegex = /(?:ఎత్తు|height|लंबाई|ht)\s*[:=\-]?\s*(\d{2,3}(?:\.\d{1,2})?)|(\d{2,3}(?:\.\d{1,2})?)\s*(?:cm|cms|సెం\.మీ|सेमी)/i;
  const heightMatch = clean.match(heightRegex);
  if (heightMatch) {
    const h = parseFloat(heightMatch[1] || heightMatch[2]);
    if (h >= 45.0 && h <= 140.0) heightCm = h;
  }

  // 5. Nutrition / Meal keywords
  const mealKeywords = [
    "rice", "dal", "egg", "milk", "khichdi", "banana", "ragi", "porridge", "spinach", "balamrutham",
    "అన్నం", "పప్పు", "గుడ్డు", "పాలు", "బాలామృతం", "అరటిపండు", "ఖిచ్డీ",
    "चावल", "दाल", "अंडा", "दूध", "खिचड़ी", "केला", "रोटी"
  ];
  const foundMeals = mealKeywords.filter((kw) => lower.includes(kw));
  const mealDetails = foundMeals.length > 0 ? `Detected foods: ${foundMeals.join(", ")}` : null;

  // 6. Illness / Follow-up flags
  const hadIllness = /(?:fever|sick|cough|cold|vomit|diarrhea|జ్వరం|దగ్గు|జలుబు|बुखार|जुकाम|खांसी)/i.test(clean);
  const needsFollowUp =
    hadIllness ||
    /(?:help|struggle|unable|not speaking|stutter|slow|tired|fatigue|సహాయం|మాట్లాడ|ఇబ్బంది|असमर्थ|मदद|थकान)/i.test(clean);

  // 7. Development domain classification
  let domain = "COGNITIVE";
  if (/(?:speak|word|talk|sound|stutter|speech|మాట|పదాలు|बोल|शब्द)/i.test(clean)) {
    domain = "COMMUNICATION";
  } else if (/(?:walk|run|jump|grasp|hold|sit|clay|నడక|పట్టు|चल|पकड़)/i.test(clean)) {
    domain = "MOTOR";
  } else if (/(?:calm|cry|friend|share|quiet|angry|ఏడుపు|కోపం|शांत|दोस्त)/i.test(clean)) {
    domain = "SOCIAL_EMOTIONAL";
  }

  return {
    rawSpeech: clean,
    matchedChildId: matchedChild ? matchedChild.id : null,
    extractedName,
    ageYears,
    weightKg,
    heightCm,
    mealDetails,
    hadIllness,
    needsFollowUp,
    domain,
    observationSummary: clean
  };
}

module.exports = { parseVoiceObservation };
