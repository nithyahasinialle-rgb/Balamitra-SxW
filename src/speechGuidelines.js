const ageMilestones = [
  {
    ageMonthsRange: "12 - 18 Months",
    expectedMilestone: "Babbles with melody ('ba-ba', 'da-da'), responds to name, points to show what they want.",
    redFlagIndicator: "No babbling by 12 months, does not point/gesture by 14 months, no response to sound or name."
  },
  {
    ageMonthsRange: "18 - 24 Months",
    expectedMilestone: "Uses 6 to 20 single meaningful words ('Amma', 'Paalu', 'Gau'), imitates familiar animal sounds.",
    redFlagIndicator: "Fewer than 6 spoken words by 18 months, does not imitate sounds or gestures, lost previously used words."
  },
  {
    ageMonthsRange: "2 - 3 Years",
    expectedMilestone: "Combines 2 words ('Mummy come', 'Pappu kaavali'), follows simple 2-step requests, 50% intelligible to family.",
    redFlagIndicator: "Cannot put 2 words together by 24-30 months, relies only on pointing or crying to communicate, speaks in monotone."
  },
  {
    ageMonthsRange: "3 - 4 Years",
    expectedMilestone: "Uses 3-4 word sentences, asks 'Why?' and 'What?', talks about daily activities, speech is 75% intelligible.",
    redFlagIndicator: "Persistent stuttering/hesitation lasting >6 months, very unclear speech, difficulty chewing or swallowing."
  },
  {
    ageMonthsRange: "4 - 6 Years",
    expectedMilestone: "Speaks in full narrative sentences, recounts simple rhymes and stories, social conversation with peers.",
    redFlagIndicator: "Struggles to formulate sentences, severe sound omissions, unable to follow routine 2-step verbal instructions."
  }
];

function getReferralGuidance(ageYears, lang = "en") {
  if (lang === "te") {
    if (ageYears <= 2) {
      return {
        whenToReferSummary: "18-24 నెలల లోపు కనీసం 6 అర్థవంతమైన పదాలు పలకలేకపోయినా, పేరు పిలిచినా స్పందించకపోయినా స్పీచ్ థెరపీ / ఆడియాలజీ పరిశీలన అవసరం.",
        keyIndicators: [
          "పిల్లవాడిని పేరు పెట్టి పిలిచినా తల తిప్పి చూడకపోవడం (వినికిడి లోపం అనుమానం)",
          "18 నెలలు దాటినా సంజ్ఞలు లేదా ఏడుపు ద్వారానే అవసరాలు తెలియజేయడం",
          "ఆహారం నమలడంలో లేదా మింగడంలో గమనించదగ్గ అసౌకర్యం"
        ],
        anganwadiAction: "కేంద్రంలో రోజువారీ రైమ్స్ మరియు ముఖాముఖి కంటి పరిచయంతో కూడిన ఆటలు ఆడించండి. సమస్య కొనసాగితే ANM / RBSK వైద్య బృందానికి నివేదించండి.",
        parentGuidance: "ఇంట్లో మొబైల్ స్క్రీన్ సమయాన్ని తగ్గించి, ప్రతిరోజూ 20 నిమిషాలు బిడ్డ ముఖం వైపు చూస్తూ కథలు, పాటలు వినిపించండి."
      };
    }
    return {
      whenToReferSummary: "3-6 సంవత్సరాల వయస్సులో రెండు-మూడు పదాలు కలిపి వాక్యాలు మాట్లాడలేకపోయినా, లేదా నత్తి 6 నెలలకు పైగా కొనసాగినా నిపుణులను సంప్రదించాలి.",
      keyIndicators: [
        "సరళమైన 2-దశల మౌఖిక సూచనలను అర్థం చేసుకోలేకపోవడం",
        "బయటి వ్యక్తులకు పిల్లవాడి మాటలు 50% కంటే తక్కువ అర్థం కావడం",
        "మాటల మధ్య తీవ్రమైన తడబాటు లేదా ధ్వనులు పలకడానికి ఇబ్బంది పడటం"
      ],
      anganwadiAction: "చిత్రపటాల ఆధారంగా ప్రశ్న-జవాబుల ఆటలు నిర్వహించండి. PHC మెడికల్ ఆఫీసర్ లేదా DEIC (జిల్లా ప్రారంభ జోక్య కేంద్రం) స్పీచ్ థెరపిస్ట్‌కు రిఫర్ చేయండి.",
      parentGuidance: "పిల్లవాడు తడబడినప్పుడు సరిదిద్దడానికి తొందరపడకుండా ఓపికగా వినండి. నెమ్మదిగా చిన్న వాక్యాలతో మాట్లాడటం సాధన చేయించండి."
    };
  }

  if (lang === "hi") {
    if (ageYears <= 2) {
      return {
        whenToReferSummary: "यदि 18-24 महीने तक बच्चा 6 से कम शब्द बोलता है या नाम पुकारने पर मुड़ता नहीं है, तो स्पीच थेरेपी या श्रवण जांच आवश्यक है।",
        keyIndicators: [
          "नाम पुकारने या आवाज़ पर प्रतिक्रिया न देना (श्रवण क्षमता जांच जरूरी)",
          "18 महीने के बाद भी केवल रोने या इशारों से संवाद करना",
          "खाना चबाने या निगलने में कठिनाई होना"
        ],
        anganwadiAction: "आंखों से संपर्क बनाकर बालगीत सुनाएं। सुधार न दिखने पर RBSK (राष्ट्रीय बाल स्वास्थ्य कार्यक्रम) टीम को सूचित करें।",
        parentGuidance: "मोबाइल स्क्रीन का उपयोग बंद करें और दिन में 20 मिनट आमने-सामने बैठकर सरल बातचीत करें।"
      };
    }
    return {
      whenToReferSummary: "3-6 वर्ष की आयु में यदि बच्चा वाक्य नहीं बना पाता या 6 महीने से अधिक समय तक हकलाहट बनी रहती है, तो विशेषज्ञ से परामर्श लें।",
      keyIndicators: [
        "सरल 2-चरणीय मौखिक निर्देशों को समझने में असमर्थता",
        "बाहरी लोगों को बच्चे की बात 50% से कम समझ में आना",
        "बोलने में लगातार झिझक या हकलाहट महसूस होना"
      ],
      anganwadiAction: "चित्र-कार्ड के माध्यम से बातचीत कराएं। PHC या जिला प्रारंभिक हस्तक्षेप केंद्र (DEIC) में रेफर करें।",
      parentGuidance: "बच्चे के बोलते समय बीच में न टोकें। धीरज से सुनें और स्वयं शांत गति से छोटे वाक्यों में बोलें।"
    };
  }

  if (ageYears <= 2) {
    return {
      whenToReferSummary: "Speech-Language Pathology (SLP) screening is recommended if an 18-24 month child uses fewer than 6 words or does not orient to their name.",
      keyIndicators: [
        "Does not turn head when name is called (requires hearing screening first)",
        "Relies solely on gestures or crying to communicate needs past 18 months",
        "Noticeable difficulty with oral motor tasks (chewing or swallowing soft foods)"
      ],
      anganwadiAction: "Conduct daily face-to-face nursery rhymes with direct eye contact. Escalate to the RBSK mobile medical team if unaddressed.",
      parentGuidance: "Eliminate passive mobile screen exposure; engage in at least 20 minutes of responsive interactive talk daily."
    };
  }
  return {
    whenToReferSummary: "Refer for speech therapy evaluation if a 3-6 year old cannot combine phrases into sentences, or if dysfluency (stuttering) persists beyond 6 months.",
    keyIndicators: [
      "Struggles to process routine 2-step verbal instructions without visual cues",
      "Speech is less than 50-75% intelligible to unfamiliar listeners",
      "Noticeable struggle, facial tension, or repetitions during speech production"
    ],
    anganwadiAction: "Use concrete visual picture prompts during circle time. Formulate an observational referral for the District Early Intervention Centre (DEIC) speech therapist.",
    parentGuidance: "Never interrupt or complete sentences for the child. Speak slowly, model unhurried speech, and maintain positive emotional warmth."
  };
}

module.exports = { ageMilestones, getReferralGuidance };
