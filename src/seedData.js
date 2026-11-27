const now = Date.now();
const oneDay = 86400000;

const children = [
  {
    id: "child_raju",
    name: "Raju",
    ageYears: 1,
    gender: "M",
    preferredLanguage: "te",
    baselineNotes: "14 months old. Smiling, responds to name, grasps rattle firmly, walking with support.",
    fatherName: "Sri G. Venkatesh (Daily Wage)",
    motherName: "Smt. G. Lakshmi",
    enrollmentId: "ICDS-TG-HYD-2025-001",
    createdAtEpochMs: 1736467200000,
    villageWard: "Bachupally Ward-1",
    aadhaarLast4: "1024",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_lakshmi",
    name: "Lakshmi",
    ageYears: 1,
    gender: "F",
    preferredLanguage: "te",
    baselineNotes: "18 months old. Steady walking, points to familiar objects, feeds self with fingers.",
    fatherName: "Sri M. Yadaiah (Auto Driver)",
    motherName: "Smt. M. Renuka",
    enrollmentId: "ICDS-TG-HYD-2025-002",
    createdAtEpochMs: 1739577600000,
    villageWard: "Bachupally Ward-2",
    aadhaarLast4: "3819",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_chitti",
    name: "Chitti",
    ageYears: 2,
    gender: "F",
    preferredLanguage: "te",
    baselineNotes: "24 months old. Loves nursery action songs, jumps with both feet, uses 2-word sentences.",
    fatherName: "Sri K. Balu (Painter)",
    motherName: "Smt. K. Padma",
    enrollmentId: "ICDS-TG-HYD-2024-003",
    createdAtEpochMs: 1717804800000,
    villageWard: "Bachupally Ward-1",
    aadhaarLast4: "5521",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_suresh",
    name: "Suresh",
    ageYears: 2,
    gender: "M",
    preferredLanguage: "te",
    baselineNotes: "28 months old. Enjoys stacking small bowls and sorting wooden blocks by shape.",
    fatherName: "Sri B. Narayana (Carpenter)",
    motherName: "Smt. B. Manjula",
    enrollmentId: "ICDS-TG-HYD-2024-004",
    createdAtEpochMs: 1720742400000,
    villageWard: "Bachupally Ward-3",
    aadhaarLast4: "9042",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_anita",
    name: "Anita",
    ageYears: 2,
    gender: "F",
    preferredLanguage: "te",
    baselineNotes: "30 months old. Very observant during circle time, walks backwards steadily, mimics sounds.",
    fatherName: "Sri S. Ramu (Vegetable Vendor)",
    motherName: "Smt. S. Kavitha",
    enrollmentId: "ICDS-TG-HYD-2024-005",
    createdAtEpochMs: 1724112000000,
    villageWard: "Bachupally Ward-2",
    aadhaarLast4: "7731",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_ramesh",
    name: "Ramesh",
    ageYears: 3,
    gender: "M",
    preferredLanguage: "te",
    baselineNotes: "36 months old. High energy, stacks 6+ blocks, names primary colors (yellow, red).",
    fatherName: "Sri T. Shankaraiah (Electrician)",
    motherName: "Smt. T. Parvathi",
    enrollmentId: "ICDS-TG-HYD-2023-006",
    createdAtEpochMs: 1686700800000,
    villageWard: "Bachupally Ward-4",
    aadhaarLast4: "4819",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_bhavani",
    name: "Bhavani",
    ageYears: 3,
    gender: "F",
    preferredLanguage: "te",
    baselineNotes: "40 months old. Enjoys bead stringing, balances on one foot for 3 seconds, counts 1 to 5.",
    fatherName: "Sri V. Mallesh (Plumber)",
    motherName: "Smt. V. Geetha",
    enrollmentId: "ICDS-TG-HYD-2023-007",
    createdAtEpochMs: 1688515200000,
    villageWard: "Bachupally Ward-3",
    aadhaarLast4: "6210",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_gopi",
    name: "Gopi",
    ageYears: 3,
    gender: "M",
    preferredLanguage: "te",
    baselineNotes: "42 months old. Catches large ball with both hands, matches picture cards of farm animals.",
    fatherName: "Sri D. Krishna (Dairy Worker)",
    motherName: "Smt. D. Radha",
    enrollmentId: "ICDS-TG-HYD-2023-008",
    createdAtEpochMs: 1692316800000,
    villageWard: "Bachupally Ward-1",
    aadhaarLast4: "1945",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_durga",
    name: "Durga",
    ageYears: 4,
    gender: "F",
    preferredLanguage: "te",
    baselineNotes: "48 months old. Traces circles in sand, sorts lentils by size, hops on one foot.",
    fatherName: "Sri Ch. Nagesh (Tailor)",
    motherName: "Smt. Ch. Sridevi",
    enrollmentId: "ICDS-TG-HYD-2022-009",
    createdAtEpochMs: 1654819200000,
    villageWard: "Bachupally Ward-2",
    aadhaarLast4: "8834",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_shiva",
    name: "Shiva",
    ageYears: 4,
    gender: "M",
    preferredLanguage: "te",
    baselineNotes: "52 months old. Hearing & Speech sensitivity. Responds strongly to visual flashcards and tactile signals; speaks in single words with delayed auditory imitation.",
    fatherName: "Sri P. Satyam (Mason)",
    motherName: "Smt. P. Anasuya",
    enrollmentId: "ICDS-TG-HYD-2022-010",
    createdAtEpochMs: 1657843200000,
    villageWard: "Bachupally Ward-4",
    aadhaarLast4: "3391",
    specialNeedsType: "SPEECH_HEARING",
    specialNeedsTitle: "Speech Delay & Hearing Support",
    adaptiveDietPlan: "Soft mastication diet: mashed khichdi with ghee, boiled lentils soup, smooth banana puree to assist oral-motor tongue mobility."
  },
  {
    id: "child_radha",
    name: "Radha",
    ageYears: 4,
    gender: "F",
    preferredLanguage: "hi",
    baselineNotes: "54 months old. Locomotor CP support. Mild left-side motor stiffness; needs seated sensory play and low-fatigue activities.",
    fatherName: "Sri E. Gopal (Security Guard)",
    motherName: "Smt. E. Pushpa",
    enrollmentId: "ICDS-TG-HYD-2022-011",
    createdAtEpochMs: 1661126400000,
    villageWard: "Bachupally Ward-3",
    aadhaarLast4: "7128",
    specialNeedsType: "LOCOMOTOR",
    specialNeedsTitle: "Locomotor & Seated Motor Support",
    adaptiveDietPlan: "High-calcium & iron fortified: ragi porridge (finger millet malt), drumstick leaves (moringa) dal, boiled egg for bone-muscle strength."
  },
  {
    id: "child_mahesh",
    name: "Mahesh",
    ageYears: 5,
    gender: "M",
    preferredLanguage: "te",
    baselineNotes: "60 months old. Neurodivergent / Sensory processing. High sensory seeking, gets overwhelmed by loud group noises; excels in repetitive tactile rhythm games.",
    fatherName: "Sri K. Sailu (Mechanic)",
    motherName: "Smt. K. Sujatha",
    enrollmentId: "ICDS-TG-HYD-2021-012",
    createdAtEpochMs: 1623456000000,
    villageWard: "Bachupally Ward-1",
    aadhaarLast4: "5092",
    specialNeedsType: "NEURODIVERGENT",
    specialNeedsTitle: "Sensory & Neurodivergent Focus",
    adaptiveDietPlan: "Calming balanced nutrition: roasted chana, warm milk with turmeric, jaggery-sesame laddu; avoidance of artificial sugar spikes."
  },
  {
    id: "child_anji",
    name: "Anji",
    ageYears: 5,
    gender: "M",
    preferredLanguage: "te",
    baselineNotes: "64 months old. Skips rope rhythmically, cooperative in group tag games, counts up to 15.",
    fatherName: "Sri J. Srinivas (Shop Assistant)",
    motherName: "Smt. J. Bhagya",
    enrollmentId: "ICDS-TG-HYD-2021-013",
    createdAtEpochMs: 1626307200000,
    villageWard: "Bachupally Ward-2",
    aadhaarLast4: "6481",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_venkatesh",
    name: "Venkatesh",
    ageYears: 5,
    gender: "M",
    preferredLanguage: "te",
    baselineNotes: "68 months old. Solves 6-piece jigsaw puzzles, explains daily routine, simple addition with seeds.",
    fatherName: "Sri R. Yadagiri (Farmer)",
    motherName: "Smt. R. Swaroopa",
    enrollmentId: "ICDS-TG-HYD-2021-014",
    createdAtEpochMs: 1628035200000,
    villageWard: "Bachupally Ward-4",
    aadhaarLast4: "9903",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  },
  {
    id: "child_swapna",
    name: "Swapna",
    ageYears: 6,
    gender: "F",
    preferredLanguage: "te",
    baselineNotes: "72 months old. Writes her name on slate, ties simple knots, demonstrates school readiness.",
    fatherName: "Sri N. Chandraiah (Weaver)",
    motherName: "Smt. N. Sravanthi",
    enrollmentId: "ICDS-TG-HYD-2020-015",
    createdAtEpochMs: 1597708800000,
    villageWard: "Bachupally Ward-3",
    aadhaarLast4: "2215",
    specialNeedsType: null,
    specialNeedsTitle: null,
    adaptiveDietPlan: null
  }
];

const growthObservations = [
  { id: 1, childId: "child_raju", timestampEpochMs: now - 60 * oneDay, weightKg: 9.2, heightCm: 74.0, notes: "Healthy early toddler growth" },
  { id: 2, childId: "child_raju", timestampEpochMs: now - 5 * oneDay, weightKg: 9.6, heightCm: 75.5, notes: "Steady gain after egg & dal supplementation" },
  { id: 3, childId: "child_lakshmi", timestampEpochMs: now - 45 * oneDay, weightKg: 9.8, heightCm: 78.0, notes: "Baseline measurement" },
  { id: 4, childId: "child_lakshmi", timestampEpochMs: now - 4 * oneDay, weightKg: 10.1, heightCm: 79.0, notes: "Normal progression" },
  { id: 5, childId: "child_chitti", timestampEpochMs: now - 50 * oneDay, weightKg: 11.4, heightCm: 84.0, notes: "Active play phase" },
  { id: 6, childId: "child_chitti", timestampEpochMs: now - 3 * oneDay, weightKg: 11.0, heightCm: 84.5, notes: "Mild weight dip following 3-day viral fever" },
  { id: 7, childId: "child_ramesh", timestampEpochMs: now - 40 * oneDay, weightKg: 12.9, heightCm: 93.0, notes: "Regular AWC check-in" },
  { id: 8, childId: "child_ramesh", timestampEpochMs: now - 2 * oneDay, weightKg: 13.2, heightCm: 94.0, notes: "Consistent growth trajectory" },
  { id: 9, childId: "child_shiva", timestampEpochMs: now - 35 * oneDay, weightKg: 15.3, heightCm: 103.5, notes: "Good appetite with mashed khichdi" },
  { id: 10, childId: "child_shiva", timestampEpochMs: now - 2 * oneDay, weightKg: 15.6, heightCm: 104.5, notes: "Oral-motor chewing improving" },
  { id: 11, childId: "child_radha", timestampEpochMs: now - 30 * oneDay, weightKg: 12.1, heightCm: 95.0, notes: "Below expected weight for 54m; started ragi malt" },
  { id: 12, childId: "child_radha", timestampEpochMs: now - 1 * oneDay, weightKg: 12.4, heightCm: 95.5, notes: "Slow positive recovery with high-calcium diet" },
  { id: 13, childId: "child_mahesh", timestampEpochMs: now - 25 * oneDay, weightKg: 17.2, heightCm: 108.0, notes: "Stable physical growth" },
  { id: 14, childId: "child_mahesh", timestampEpochMs: now - 2 * oneDay, weightKg: 17.5, heightCm: 109.0, notes: "Calm eating routine maintained" }
];

const nutritionObservations = [
  { id: 1, childId: "child_raju", timestampEpochMs: now - 4 * oneDay, mealDetails: "Balamrutham porridge, mashed banana", appetiteNotes: "Good appetite", hadIllness: false },
  { id: 2, childId: "child_raju", timestampEpochMs: now - 2 * oneDay, mealDetails: "Rice, dal, boiled egg white", appetiteNotes: "Ate full portion", hadIllness: false },
  { id: 3, childId: "child_chitti", timestampEpochMs: now - 4 * oneDay, mealDetails: "Plain rice, watery rasam", appetiteNotes: "Low appetite after fever", hadIllness: true },
  { id: 4, childId: "child_chitti", timestampEpochMs: now - 1 * oneDay, mealDetails: "Khichdi, spinach dal, banana", appetiteNotes: "Appetite recovering", hadIllness: false },
  { id: 5, childId: "child_shiva", timestampEpochMs: now - 3 * oneDay, mealDetails: "Soft mashed khichdi with ghee, lentil soup", appetiteNotes: "Comfortable chewing", hadIllness: false },
  { id: 6, childId: "child_shiva", timestampEpochMs: now - 1 * oneDay, mealDetails: "Banana puree, rice, palak dal", appetiteNotes: "Finished full meal", hadIllness: false },
  { id: 7, childId: "child_radha", timestampEpochMs: now - 2 * oneDay, mealDetails: "Ragi malt porridge, boiled egg, moringa dal", appetiteNotes: "Enjoyed warm porridge", hadIllness: false },
  { id: 8, childId: "child_mahesh", timestampEpochMs: now - 2 * oneDay, mealDetails: "Roasted chana, rice, dal, warm turmeric milk", appetiteNotes: "Calm during snack time", hadIllness: false }
];

const developmentObservations = [
  { id: 1, childId: "child_raju", timestampEpochMs: now - 10 * oneDay, domain: "COMMUNICATION", observationText: "Responds promptly when name is called, babbles 'mama', 'dada'", needsFollowUp: false, rawWorkerSpeech: "Raju responded to name and said mama" },
  { id: 2, childId: "child_chitti", timestampEpochMs: now - 5 * oneDay, domain: "COGNITIVE", observationText: "Fatigued during circle time, needed help stacking 3 cups", needsFollowUp: true, rawWorkerSpeech: "Chitti looked tired after fever" },
  { id: 3, childId: "child_shiva", timestampEpochMs: now - 6 * oneDay, domain: "COMMUNICATION", observationText: "Uses pointing and single words ('paalu', 'amma'); struggled with 2-step verbal instructions without gestures.", needsFollowUp: true, rawWorkerSpeech: "Shiva points to milk but speaks single words only" },
  { id: 4, childId: "child_radha", timestampEpochMs: now - 4 * oneDay, domain: "MOTOR", observationText: "Good seated posture with back support; left hand grasp needs gentle clay squeezing practice.", needsFollowUp: true, rawWorkerSpeech: "Radha enjoyed seated clay play" },
  { id: 5, childId: "child_mahesh", timestampEpochMs: now - 3 * oneDay, domain: "SOCIAL_EMOTIONAL", observationText: "Felt overwhelmed during loud rhyme clapping; calmed immediately with smooth stone texture mat.", needsFollowUp: true, rawWorkerSpeech: "Mahesh needed quiet tactile corner" },
  { id: 6, childId: "child_ramesh", timestampEpochMs: now - 2 * oneDay, domain: "COGNITIVE", observationText: "Identified yellow and red cups, counted 1 to 5 clearly.", needsFollowUp: false, rawWorkerSpeech: "Ramesh identified colors and counted to 5" }
];

const activities = [
  {
    id: "act_visual_gesture_cards",
    specialNeedsTarget: "SPEECH_HEARING",
    minAge: 2,
    maxAge: 6,
    durationMinutes: 10,
    domain: "COMMUNICATION",
    localized: {
      en: {
        title: "Visual Flashcards & Gestural Naming",
        materials: ["Picture cards (fruits, animals)", "Mirror"],
        steps: [
          "Sit face-to-face at the child's eye level in a well-lit spot.",
          "Hold a bright picture card near your mouth so the child sees both card and lip movement.",
          "Say the word slowly ('Paalu / Milk') and pair it with a clear hand gesture.",
          "Praise every vocal sound or gesture attempt warmly."
        ],
        whyThis: "Tailored Inclusive Pathway: Bridges visual recognition and oral-motor speech production without auditory overwhelm.",
        parentExplain: "At home, hold everyday items near your face before naming them slowly, and celebrate any sound or gesture your child tries."
      },
      te: {
        title: "చిత్రపటాలు & సైగలతో పదాలు పలికించడం",
        materials: ["పండ్లు/జంతువుల చిత్రపటాలు", "చిన్న అద్దం"],
        steps: [
          "వెలుతురు ఉన్న చోట బిడ్డ కంటికి సమానంగా ఎదురుగా కూర్చోండి.",
          "చిత్రపటాన్ని మీ పెదవుల దగ్గరగా పట్టుకుని పెదవుల కదలిక కనిపించేలా చూడండి.",
          "పదాన్ని నెమ్మదిగా స్పష్టంగా పలకండి (ఉదా: 'పాలు') మరియు చేతి సైగ చూపండి.",
          "బిడ్డ చేసే ప్రతి చిన్న శబ్దాన్ని లేదా సైగను ప్రోత్సహించండి."
        ],
        whyThis: "సమ్మిళిత వికాసం: చూపు మరియు సైగల ద్వారా మాటల ఉచ్చారణను సులభతరం చేస్తుంది.",
        parentExplain: "ఇంట్లో వస్తువులను మీ ముఖం దగ్గర పట్టుకుని నెమ్మదిగా పేరు చెప్పండి; బిడ్డ పలికే చిన్న శబ్దాలను ప్రోత్సహించండి."
      },
      hi: {
        title: "चित्र-कार्ड और इशारों से शब्द अभ्यास",
        materials: ["फल/जानवर के चित्र कार्ड", "छोटा आईना"],
        steps: [
          "अच्छी रोशनी में बच्चे के सामने आंख से आंख मिलाकर बैठें।",
          "चित्र कार्ड को अपने होंठों के पास रखें ताकि बच्चा शब्द और होंठों की गति देख सके।",
          "धीरे और स्पष्ट बोलें (जैसे 'दूध') और साथ में सरल हाथ का इशारा दिखाएं।",
          "बच्चे के हर छोटे प्रयास और ध्वनि की प्रशंसा करें।"
        ],
        whyThis: "समावेशी विकास मार्ग: दृश्य पहचान और होंठों की गति को जोड़कर बोलने का आत्मविश्वास बढ़ाता है।",
        parentExplain: "घर पर रोज़ की चीज़ें अपने चेहरे के पास रखकर धीरे-धीरे नाम बोलें और बच्चे की हर कोशिश को सराहें।"
      }
    }
  },
  {
    id: "act_seated_clay_press",
    specialNeedsTarget: "LOCOMOTOR",
    minAge: 2,
    maxAge: 6,
    durationMinutes: 12,
    domain: "MOTOR",
    localized: {
      en: {
        title: "Seated Clay Press & Finger Rolling",
        materials: ["Soft wheat dough or clay", "Flat wooden board"],
        steps: [
          "Ensure the child is comfortably seated with firm back and hip support.",
          "Place a soft ball of dough on the board at waist height.",
          "Encourage pressing with both palms, then rolling small balls using thumb and index finger.",
          "Keep session gentle and stop before muscle fatigue."
        ],
        whyThis: "Tailored Inclusive Pathway: Strengthens palmar grasp and finger isolation completely seated, avoiding lower-limb strain.",
        parentExplain: "Give your child soft chapati dough while seated comfortably to squeeze and roll; this builds hand strength for eating and writing."
      },
      te: {
        title: "కూర్చుని మట్టి/పిండితో వేళ్ళ వ్యాయామం",
        materials: ["మెత్తని గోధుమ పిండి లేదా బంకమట్టి", "చెక్క పలక"],
        steps: [
          "బిడ్డ వీపుకు ఆధారం ఇచ్చి సౌకర్యవంతంగా కూర్చోబెట్టండి.",
          "నడుము ఎత్తులో పలకపై మెత్తని పిండి ముద్దను ఉంచండి.",
          "రెండు అరచేతులతో నొక్కడం, ఆపై బొటనవేలు-చూపుడువేలుతో చిన్న ఉండలు చేయడం సాధన చేయించండి.",
          "అలసట రాకముందే ఆటను ఆనందంగా ముగించండి."
        ],
        whyThis: "సమ్మిళిత వికాసం: కాళ్ళపై ఒత్తిడి లేకుండా కూర్చునే చేతి పట్టు మరియు వేళ్ళ బలాన్ని పెంచుతుంది.",
        parentExplain: "ఇంట్లో కూర్చున్నప్పుడు మెత్తని చపాతీ పిండిని ఇచ్చి నొక్కమని చెప్పండి; ఇది తినడానికి, రాయడానికి చేతి బలాన్ని ఇస్తుంది."
      },
      hi: {
        title: "बैठकर आटा/मिट्टी दबाना और गोलियां बनाना",
        materials: ["नरम गूंथा आटा या मिट्टी", "समतल तख्ती"],
        steps: [
          "बच्चे को पीठ के सहारे आराम से बैठाएं।",
          "कमर की ऊंचाई पर तख्ती पर नरम आटे की लोई रखें।",
          "दोनों हथेलियों से दबाने और फिर अंगूठे व उंगली से छोटी गोलियां बनाने को कहें।",
          "थकान से पहले गतिविधि को खुशी से समाप्त करें।"
        ],
        whyThis: "समावेशी विकास मार्ग: पैरों पर बिना किसी दबाव के बैठकर हाथों की पकड़ और उंगलियों की ताकत बढ़ाता है।",
        parentExplain: "घर पर बैठकर नरम रोटी का आटा खेलने को दें; इससे खाना खाने और लिखने के लिए हाथ मजबूत होते हैं।"
      }
    }
  },
  {
    id: "act_tactile_texture_mat",
    specialNeedsTarget: "NEURODIVERGENT",
    minAge: 2,
    maxAge: 6,
    durationMinutes: 10,
    domain: "SOCIAL_EMOTIONAL",
    localized: {
      en: {
        title: "Calming Tactile Texture Path",
        materials: ["Smooth river pebbles", "Cotton balls", "Dry neem/mango leaves"],
        steps: [
          "Choose a quiet corner away from loud group noise.",
          "Arrange 3 bowls with cotton (soft), pebbles (smooth), and leaves (crisp).",
          "Let the child explore textures at their own pace without rushing.",
          "Speak in a calm, low whisper naming each texture ('Soft', 'Smooth')."
        ],
        whyThis: "Tailored Inclusive Pathway: Provides predictable sensory grounding to reduce overstimulation and build calm focus.",
        parentExplain: "When your child feels overwhelmed, offer a quiet corner with safe textures like cotton and smooth stones instead of loud scolding."
      },
      te: {
        title: "ప్రశాంతమైన స్పర్శ ఆట (Tactile Grounding)",
        materials: ["నునుపైన గులకరాళ్ళు", "దూది ఉండలు", "ఆకులు"],
        steps: [
          "శబ్దాలు లేని ప్రశాంతమైన మూలను ఎంచుకోండి.",
          "మూడు గిన్నెలలో దూది (మెత్తగా), గులకరాళ్ళు (నునుపుగా), ఆకులు ఉంచండి.",
          "తొందరపెట్టకుండా బిడ్డ స్వంత వేగంతో వాటిని తాకి అనుభూతి చెందనివ్వండి.",
          "మెల్లని స్వరంతో 'మెత్తగా ఉంది', 'నునుపుగా ఉంది' అని చెప్పండి."
        ],
        whyThis: "సమ్మిళిత వికాసం: అధిక శబ్దాల వల్ల కలిగే ఆందోళనను తగ్గించి, ప్రశాంతమైన ఏకాగ్రతను పెంచుతుంది.",
        parentExplain: "బిడ్డ కంగారు పడినప్పుడు కోప్పడకుండా ప్రశాంతమైన చోట దూది, నునుపైన రాళ్ళను తాకనివ్వండి."
      },
      hi: {
        title: "शांत स्पर्श अनुभव खेल (Tactile Mat)",
        materials: ["चिकने पत्थर", "रुई के गोले", "सूखे पत्ते"],
        steps: [
          "शोर से दूर एक शांत कोना चुनें।",
          "तीन कटोरियों में रुई (नरम), पत्थर (चिकना) और पत्ते रखें।",
          "बिना जल्दबाजी के बच्चे को अपनी गति से इन्हें छूकर महसूस करने दें।",
          "धीमी और शांत आवाज में प्रत्येक का नाम बताएं ('नरम', 'चिकना')।"
        ],
        whyThis: "समावेशी विकास मार्ग: संवेदी उत्तेजना को शांत कर एकाग्रता और भावनात्मक संतुलन बढ़ाता है।",
        parentExplain: "जब बच्चा अधिक शोर से घबराए, तो डांटने के बजाय शांत कोने में रुई और चिकने पत्थरों से खेलने दें।"
      }
    }
  },
  {
    id: "act_color_cup_sorting",
    specialNeedsTarget: null,
    minAge: 2,
    maxAge: 6,
    durationMinutes: 10,
    domain: "COGNITIVE",
    localized: {
      en: {
        title: "Color Cup Stacking & 2-Step Sorting",
        materials: ["3 colored plastic cups", "Yellow lentils & tamarind seeds"],
        steps: [
          "Place 3 cups (red, yellow, blue) in front of the child.",
          "Give a clear 2-step instruction: 'Pick a seed and put it in the yellow cup.'",
          "Wait 5 seconds patiently for processing before offering a gentle hint.",
          "Count the collected seeds together from 1 to 5."
        ],
        whyThis: "Standard Age Match + Connects recent 2-step instruction observation with low-cost AWC cups.",
        parentExplain: "Ask your child for two simple steps at home, like 'Take the bowl and keep it on the mat', and praise them warmly."
      },
      te: {
        title: "రంగుల కప్పులు & 2-దశల సూచనల ఆట",
        materials: ["3 రంగుల ప్లాస్టిక్ కప్పులు", "చింతగింజలు / పప్పులు"],
        steps: [
          "బిడ్డ ముందు ఎరుపు, పసుపు, నీలం కప్పులను ఉంచండి.",
          "2-దశల సూచన ఇవ్వండి: 'ఒక గింజ తీసుకొని పసుపు కప్పులో వేయి.'",
          "బిడ్డ ఆలోచించడానికి 5 సెకన్లు ఓపికగా వేచి చూడండి.",
          "కప్పులోని గింజలను 1 నుండి 5 వరకు కలిసి లెక్కించండి."
        ],
        whyThis: "వయస్సుకు తగిన ఆట: వినికిడి అవగాహన, రంగుల గుర్తింపు మరియు లెక్కింపును పెంచుతుంది.",
        parentExplain: "ఇంట్లో 'గిన్నె తీసుకొని చాపపై పెట్టు' వంటి రెండు చిన్న పనులు ఒకేసారి చెప్పి ప్రోత్సహించండి."
      },
      hi: {
        title: "रंगीन कप और 2-चरणीय निर्देश खेल",
        materials: ["3 रंगीन प्लास्टिक कप", "इमली के बीज / दाल"],
        steps: [
          "बच्चे के सामने लाल, पीला और नीला कप रखें।",
          "सरल 2-चरणीय निर्देश दें: 'एक बीज उठाओ और पीले कप में डालो।'",
          "बच्चे को समझने के लिए 5 सेकंड धैर्य से प्रतीक्षा करें।",
          "अंत में कप के बीजों को 1 से 5 तक साथ में गिनें।"
        ],
        whyThis: "आयु-उपयुक्त मिलान: दो-चरणीय निर्देशों को समझने और रंग पहचानने की क्षमता बढ़ाता है।",
        parentExplain: "घर पर बच्चे से दो छोटे काम एक साथ कहें, जैसे 'कटोरी उठाकर चटाई पर रखो', और उनकी तारीफ करें।"
      }
    }
  }
];

module.exports = {
  children,
  growthObservations,
  nutritionObservations,
  developmentObservations,
  activities
};
