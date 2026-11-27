const ICONS = {
  sparkles: `<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>`,
  calendar: `<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
  mic: `<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>`,
  stop: `<rect width="12" height="12" x="6" y="6" rx="2"/>`,
  search: `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,
  x: `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`,
  plus: `<path d="M5 12h14"/><path d="M12 5v14"/>`,
  chevronRight: `<path d="m9 18 6-6-6-6"/>`,
  arrowLeft: `<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>`,
  check: `<polyline points="20 6 9 17 4 12"/>`,
  clipboard: `<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>`,
  utensils: `<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>`,
  package: `<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>`,
  activity: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`,
  shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>`,
  alert: `<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
  file: `<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>`,
  download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
  copy: `<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`,
  volume: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>`,
  help: `<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
  compare: `<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>`,
  building: `<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>`,
  play: `<polygon points="5 3 19 12 5 21 5 3"/>`,
  edit: `<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>`,
  user: `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`
};

function svg(name, size = 15) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">${ICONS[name] || ""}</svg>`;
}

const STRINGS = {
  en: {
    appTitle: "Balamitra",
    centerSub: "Bachupally-1 AWC • Code 3601050201",
    workerChip: "AWW: Smt. Padmavathi • Medchal Sector",
    navToday: "Today",
    navObserve: "Observe",
    navChildren: "Children",
    navInsights: "Insights",
    tourTitle: "Evaluator Tour Mode",
    tourSub: "Guided 6-step walkthrough of all capabilities",
    startTour: "Start Tour",
    centerOpen: "AWC Open • Meal Served",
    attendanceBtn: "Attendance Register",
    voiceHeroTitle: "Speak Observation (Telugu / Hindi / English)",
    voiceHeroSub: "Hands-free 15-second voice intake extracts child, weight, nutrition & milestones.",
    openVoiceBtn: "Open Voice Intake",
    priorityTitle: "Priority Follow-Ups",
    searchPlaceholder: "Search by name, ID, parents, ward...",
    addChildBtn: "Add Child",
    enrolledPrefix: "Enrolled",
    backToList: "Anganwadi Master Register",
    speechTitle: "Speech Therapy Referral Screener",
    whenToRefer: "When is Speech Therapy Required?",
    adaptiveDietTitle: "Adaptive Food Pattern & Diet",
    multiDayNutTitle: "Multi-Day Nutrition Intelligence",
    connectDotsTitle: "Connect The Dots",
    whatChangedTitle: "What Changed?",
    activityTitle: "Suggested Next Action",
    whyThis: "Why This?",
    doActivity: "Do Activity",
    changeActivity: "Change",
    skipActivity: "Skip",
    explainParent: "Explain to Parent",
    timelineTitle: "Longitudinal Observation Timeline",
    poshanBtn: "View & Export Poshan Tracker CSV"
  },
  te: {
    appTitle: "బాలమిత్ర",
    centerSub: "బాచుపల్లి-1 కేంద్రం • కోడ్ 3601050201",
    workerChip: "కార్యకర్త: శ్రీమతి పద్మావతి • మేడ్చల్ సెక్టార్",
    navToday: "నేడు",
    navObserve: "నమోదు",
    navChildren: "పిల్లలు",
    navInsights: "విశ్లేషణ",
    tourTitle: "మూల్యాంకన టూర్ మోడ్",
    tourSub: "అన్ని ఫీచర్ల తక్షణ మార్గదర్శి",
    startTour: "ప్రారంభించు",
    centerOpen: "కేంద్రం తెరిచి ఉంది • భోజనం సిద్ధం",
    attendanceBtn: "హాజరు పట్టిక",
    voiceHeroTitle: "మాటలతో నమోదు (తెలుగు / హిందీ / ఇంగ్లీష్)",
    voiceHeroSub: "15 సెకన్ల వాయిస్ ద్వారా బిడ్డ పేరు, బరువు, భోజనం మరియు వికాసం నమోదవుతాయి.",
    openVoiceBtn: "వాయిస్ నమోదు తెరువు",
    priorityTitle: "ప్రాధాన్యత పరిశీలనలు",
    searchPlaceholder: "పేరు, ఐడీ, తల్లిదండ్రులు, వార్డ్ ద్వారా వెతకండి...",
    addChildBtn: "కొత్త నమోదు",
    enrolledPrefix: "చేరిన తేదీ",
    backToList: "అంగన్‌వాడీ పిల్లల రిజిస్టర్",
    speechTitle: "స్పీచ్ థెరపీ & RBSK రిఫరల్ స్క్రీనర్",
    whenToRefer: "ఎప్పుడు స్పీచ్ థెరపీ అవసరం?",
    adaptiveDietTitle: "ప్రత్యేక ఆహార ప్రణాళిక & పోషణ",
    multiDayNutTitle: "5-రోజుల పోషకాహార విశ్లేషణ",
    connectDotsTitle: "విశ్లేషణ అనుసంధానం",
    whatChangedTitle: "ఏమి మారింది?",
    activityTitle: "సూచించిన తదుపరి చర్య",
    whyThis: "ఎందుకు?",
    doActivity: "ఆట ఆడించు",
    changeActivity: "మార్చు",
    skipActivity: "దాటవేయి",
    explainParent: "తల్లిదండ్రులకు వివరించు",
    timelineTitle: "దీర్ఘకాలిక పరిశీలనల టైమ్‌లైన్",
    poshanBtn: "పోషణ్ ట్రాకర్ CSV ఎగుమతి"
  },
  hi: {
    appTitle: "बालमित्र",
    centerSub: "बाचुपल्ली-1 केंद्र • कोड 3601050201",
    workerChip: "कार्यकर्ता: श्रीमती पद्मावती • मेडचल सेक्टर",
    navToday: "आज",
    navObserve: "दर्ज करें",
    navChildren: "बच्चे",
    navInsights: "विश्लेषण",
    tourTitle: "मूल्यांकनकर्ता टूर मोड",
    tourSub: "सभी क्षमताओं का 6-चरणीय मार्गदर्शन",
    startTour: "टूर शुरू करें",
    centerOpen: "केंद्र खुला है • भोजन वितरित",
    attendanceBtn: "उपस्थिति रजिस्टर",
    voiceHeroTitle: "बोलकर अवलोकन दर्ज करें (हिंदी / तेलुगु / अंग्रेजी)",
    voiceHeroSub: "15-सेकंड वॉयस इनपुट से नाम, वजन, भोजन और विकास स्वतः दर्ज होता है।",
    openVoiceBtn: "वॉयस इनपुट खोलें",
    priorityTitle: "प्राथमिकता अवलोकन",
    searchPlaceholder: "नाम, आईडी, माता-पिता या वार्ड से खोजें...",
    addChildBtn: "नया पंजीयन",
    enrolledPrefix: "प्रवेश तिथि",
    backToList: "आंगनवाड़ी बाल पंजीयन रजिस्टर",
    speechTitle: "स्पीच थेरेपी एवं RBSK रेफरल गाइड",
    whenToRefer: "कब स्पीच थेरेपी की आवश्यकता होती है?",
    adaptiveDietTitle: "अनुकूली आहार योजना एवं विशेष पोषण",
    multiDayNutTitle: "5-दिवसीय पोषण विश्लेषण",
    connectDotsTitle: "दीर्घकालिक संबंध",
    whatChangedTitle: "क्या बदलाव हुआ?",
    activityTitle: "सुझाई गई गतिविधि",
    whyThis: "क्यों?",
    doActivity: "गतिविधि कराएं",
    changeActivity: "बदलें",
    skipActivity: "छोड़ें",
    explainParent: "माता-पिता को समझाएं",
    timelineTitle: "दीर्घकालिक अवलोकन समयरेखा",
    poshanBtn: "पोषण ट्रैकर CSV निर्यात करें"
  }
};

const appState = {
  lang: "en",
  fontScale: 0, // 0: Normal, 1: Large, 2: XL
  tab: "today",
  children: [],
  attendanceMap: {},
  speechMilestones: [],
  health: null,
  selectedChildId: null,
  searchQuery: "",
  registerFilter: "ALL",
  voiceTranscript: "",
  parsedVoice: null,
  isListening: false,
  speechExpanded: false,
  milestonesExpanded: false,
  tourStep: 1
};

let activeRecognition = null;
let clockInterval = null;

function t(key) {
  return (STRINGS[appState.lang] || STRINGS.en)[key] || STRINGS.en[key];
}

function formatDate(epochMs) {
  return new Date(epochMs).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function showToast(msg) {
  const el = document.getElementById("toast-root");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.add("hidden"), 3000);
}

async function fetchState() {
  const [stateRes, healthRes] = await Promise.all([
    fetch(`/api/state?lang=${appState.lang}`),
    fetch("/api/health")
  ]);
  const data = await stateRes.json();
  appState.children = data.children;
  appState.attendanceMap = data.attendanceMap;
  appState.speechMilestones = data.speechMilestones;
  appState.health = await healthRes.json();
  render();
}

function updateHeaderAndNav() {
  document.getElementById("ui-app-title").textContent = t("appTitle");
  document.getElementById("ui-center-sub").textContent = t("centerSub");
  document.getElementById("ui-worker-name").textContent = t("workerChip");
  document.getElementById("nav-today").textContent = t("navToday");
  document.getElementById("nav-observe").textContent = t("navObserve");
  document.getElementById("nav-children").textContent = t("navChildren");
  document.getElementById("nav-insights").textContent = t("navInsights");

  document.body.classList.remove("scale-lg", "scale-xl");
  if (appState.fontScale === 1) document.body.classList.add("scale-lg");
  if (appState.fontScale === 2) document.body.classList.add("scale-xl");
  document.getElementById("font-scale-label").textContent = appState.fontScale === 0 ? "A" : appState.fontScale === 1 ? "A+" : "A++";

  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === appState.lang));
  document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === appState.tab));
}

function render() {
  updateHeaderAndNav();
  if (clockInterval) { clearInterval(clockInterval); clockInterval = null; }
  const root = document.getElementById("main-content");
  if (appState.tab === "today") {
    root.innerHTML = renderTodayTab();
    bindTodayEvents();
  } else if (appState.tab === "observe") {
    root.innerHTML = renderObserveTab();
    bindObserveEvents();
  } else if (appState.tab === "children") {
    if (appState.selectedChildId) {
      const child = appState.children.find((c) => c.id === appState.selectedChildId);
      if (child) {
        root.innerHTML = renderChildStory(child);
        bindChildStoryEvents(child);
        return;
      }
    }
    root.innerHTML = renderChildrenTab();
    bindChildrenEvents();
  } else if (appState.tab === "insights") {
    root.innerHTML = renderInsightsTab();
    bindInsightsEvents();
  }
}

function liveClockText() {
  return new Date().toLocaleString("en-IN", {
    weekday: "long", day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
  });
}

function renderTodayTab() {
  const total = appState.children.length;
  const present = Object.values(appState.attendanceMap).filter(Boolean).length;
  const pct = total ? Math.round((present * 100) / total) : 0;

  const priorityChildren = appState.children.filter(
    (c) => c.specialNeedsType || c.trajectoryStatus === "DECREASING" || c.whoMetrics?.category !== "Normal"
  );

  return `
    <div class="card card-dark row-between" style="cursor:pointer" id="today-tour-card">
      <div class="row-center">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--gold);color:var(--black);display:flex;align-items:center;justify-content:center;">
          ${svg("sparkles", 18)}
        </div>
        <div>
          <div style="font-weight:800;font-size:13.5px;">${t("tourTitle")}</div>
          <div style="font-size:11px;color:#9CA3AF;">${t("tourSub")}</div>
        </div>
      </div>
      <button class="btn btn-primary btn-sm">${t("startTour")}</button>
    </div>

    <div class="card card-gold row-between" style="padding:10px 14px;">
      <div class="row-center" style="font-size:11.5px;font-weight:700;color:var(--amber);">
        ${svg("calendar", 14)}
        <span id="live-clock-text">${liveClockText()}</span>
      </div>
      <span class="badge badge-green">Live</span>
    </div>

    <div class="card card-green">
      <div class="row-between">
        <span style="font-weight:700;font-size:13px;color:var(--green);">${t("centerOpen")}</span>
        <span class="badge badge-green">${present}/${total} (${pct}%)</span>
      </div>
      <div style="margin-top:9px;height:7px;background:#C8E6C9;border-radius:6px;overflow:hidden;">
        <div style="width:${pct}%;height:100%;background:var(--green);transition:width 0.3s ease;"></div>
      </div>
      <div class="row-between" style="margin-top:10px;">
        <span style="font-size:11px;font-weight:600;color:var(--green);">SNP Register: HCM & THR Active</span>
        <button class="btn btn-green btn-sm" id="btn-open-attendance">${svg("clipboard", 13)} ${t("attendanceBtn")}</button>
      </div>
    </div>

    <div class="card" style="border:1.5px solid var(--gold);">
      <div class="row-center" style="font-weight:800;font-size:14px;">
        ${svg("mic", 16)} <span>${t("voiceHeroTitle")}</span>
      </div>
      <p style="font-size:12px;color:var(--muted);margin:5px 0 11px;">${t("voiceHeroSub")}</p>
      <button class="btn btn-primary" id="btn-go-voice" style="width:100%;">${svg("mic", 15)} ${t("openVoiceBtn")}</button>
    </div>

    <div class="section-label">${t("priorityTitle")} (${priorityChildren.length})</div>
    ${priorityChildren.map((c) => `
      <div class="card child-card priority-child-card" data-child-id="${c.id}">
        <div class="avatar ${c.gender === "F" ? "avatar-f" : "avatar-m"}">${c.name[0]}</div>
        <div style="flex:1;">
          <div class="row-center" style="flex-wrap:wrap;gap:5px;">
            <strong style="font-size:14px;">${c.name}</strong>
            <span class="badge badge-gray">${c.ageYears}y • ${c.gender}</span>
            ${c.whoMetrics?.category !== "Normal" ? `<span class="badge badge-red">${c.whoMetrics.category}</span>` : ""}
          </div>
          ${c.specialNeedsTitle ? `<div style="margin-top:3px;"><span class="badge badge-gold">${c.specialNeedsTitle}</span></div>` : ""}
          <div style="font-size:11.5px;color:var(--muted);margin-top:3px;">${c.connectDots.headline.replace(/^[\u{1F300}-\u{1FAFF}\s]+/u, "")}</div>
        </div>
        ${svg("chevronRight", 16)}
      </div>
    `).join("")}
  `;
}

function bindTodayEvents() {
  clockInterval = setInterval(() => {
    const el = document.getElementById("live-clock-text");
    if (el) el.textContent = liveClockText();
  }, 15000);
  document.getElementById("today-tour-card").onclick = () => { appState.tourStep = 1; openTourModal(); };
  document.getElementById("btn-open-attendance").onclick = () => openAttendanceModal();
  document.getElementById("btn-go-voice").onclick = () => { appState.tab = "observe"; render(); };
  document.querySelectorAll(".priority-child-card").forEach((el) => {
    el.onclick = () => {
      appState.selectedChildId = el.dataset.childId;
      appState.tab = "children";
      render();
    };
  });
}

function renderObserveTab() {
  const p = appState.parsedVoice;
  const speechSupported = Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  return `
    <div class="card" style="text-align:center;">
      <div style="font-weight:800;font-size:15px;">Voice-First Indic Intake</div>
      <p style="font-size:11.5px;color:var(--muted);margin-top:4px;">
        Speak in Telugu, Hindi, or English. On-device NLP extracts child, weight, meal & milestones.
      </p>

      <div style="margin-top:10px;display:flex;justify-content:center;">
        <select id="voice-lang-select" class="select" style="width:auto;padding:6px 12px;font-size:12px;">
          <option value="en-IN" ${appState.lang === "en" ? "selected" : ""}>English (en-IN)</option>
          <option value="te-IN" ${appState.lang === "te" ? "selected" : ""}>తెలుగు (te-IN)</option>
          <option value="hi-IN" ${appState.lang === "hi" ? "selected" : ""}>हिन्दी (hi-IN)</option>
        </select>
      </div>

      <button class="mic-button ${appState.isListening ? "listening" : ""}" id="btn-mic-toggle" title="Start Voice Input">
        ${appState.isListening ? svg("stop", 28) : svg("mic", 28)}
      </button>
      <div style="font-size:11.5px;font-weight:700;color:${appState.isListening ? "var(--red)" : "var(--muted)"};">
        ${appState.isListening ? "Listening... Speak now" : speechSupported ? "Tap microphone to speak" : "Browser mic unavailable — use samples or type below"}
      </div>

      <div style="margin-top:14px;text-align:left;">
        <div style="font-size:11px;font-weight:700;color:var(--muted);margin-bottom:5px;">1-Tap Voice Samples:</div>
        <div class="chip-row">
          <button class="chip sample-voice-btn" data-text="Raju weight is 9.8 kg, height 76 cm. He ate rice, dal and boiled egg today and identified yellow cup.">English Sample</button>
          <button class="chip sample-voice-btn" data-text="శివ బరువు 15.8 కిలోలు. అన్నం, పప్పు తిన్నాడు. మాటలు పలకడానికి చిత్రపటాల సహాయం అవసరమైంది.">తెలుగు Sample</button>
          <button class="chip sample-voice-btn" data-text="राधा का वजन 12.6 किलो है। उसने रागी दलिया और अंडा खाया। बैठकर मिट्टी दबाने का खेल किया।">हिन्दी Sample</button>
        </div>
      </div>

      <textarea id="voice-transcript-box" class="textarea" rows="3" style="margin-top:10px;" placeholder="Spoken transcript appears here...">${appState.voiceTranscript}</textarea>
      <button class="btn btn-dark" id="btn-parse-voice" style="width:100%;margin-top:8px;">Extract Structured Child Record</button>
    </div>

    ${p ? `
      <div class="card card-green">
        <div class="row-between">
          <strong class="row-center" style="font-size:13.5px;color:var(--green);">${svg("check", 15)} Extracted Structured Record</strong>
          <span class="badge badge-blue">${p.domain}</span>
        </div>
        <div style="margin-top:10px;display:flex;flex-direction:column;gap:8px;font-size:12px;">
          <div>
            <label style="font-weight:700;">Child Profile:</label>
            <select id="ext-child-id" class="select" style="margin-top:3px;">
              <option value="">+ Enroll New Child (${p.extractedName || "Unnamed"})</option>
              ${appState.children.map((c) => `<option value="${c.id}" ${p.matchedChildId === c.id ? "selected" : ""}>${c.name} (${c.ageYears}y • ${c.enrollmentId})</option>`).join("")}
            </select>
          </div>
          <div class="grid-2">
            <div>
              <label style="font-weight:700;">Weight (kg):</label>
              <input id="ext-weight" class="input" type="number" step="0.1" value="${p.weightKg || ""}" placeholder="e.g. 12.8" />
            </div>
            <div>
              <label style="font-weight:700;">Height (cm):</label>
              <input id="ext-height" class="input" type="number" step="0.1" value="${p.heightCm || ""}" placeholder="e.g. 92.0" />
            </div>
          </div>
          <div>
            <label style="font-weight:700;">Nutrition / Meal:</label>
            <input id="ext-meal" class="input" value="${p.mealDetails || ""}" placeholder="e.g. Rice, dal, egg" />
          </div>
          <div>
            <label style="font-weight:700;">Developmental Observation:</label>
            <input id="ext-obs" class="input" value="${p.observationSummary || ""}" />
          </div>
          <button class="btn btn-green" id="btn-save-observation">${svg("check", 14)} Save to Anganwadi Register</button>
        </div>
      </div>
    ` : ""}
  `;
}

function bindObserveEvents() {
  const box = document.getElementById("voice-transcript-box");
  box.oninput = (e) => { appState.voiceTranscript = e.target.value; };

  document.querySelectorAll(".sample-voice-btn").forEach((btn) => {
    btn.onclick = async () => {
      appState.voiceTranscript = btn.dataset.text;
      box.value = appState.voiceTranscript;
      await parseCurrentTranscript();
    };
  });

  document.getElementById("btn-parse-voice").onclick = parseCurrentTranscript;

  document.getElementById("btn-mic-toggle").onclick = () => {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      showToast("Live mic unsupported in this browser — tap a voice sample.");
      return;
    }
    if (appState.isListening && activeRecognition) {
      activeRecognition.stop();
      appState.isListening = false;
      render();
      return;
    }
    const rec = new SpeechRec();
    activeRecognition = rec;
    rec.lang = document.getElementById("voice-lang-select").value;
    rec.interimResults = true;
    rec.continuous = false;
    appState.isListening = true;
    render();

    rec.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) text += event.results[i][0].transcript;
      appState.voiceTranscript = text;
      const tb = document.getElementById("voice-transcript-box");
      if (tb) tb.value = text;
    };
    rec.onend = async () => {
      appState.isListening = false;
      if (appState.voiceTranscript.trim()) await parseCurrentTranscript();
      else render();
    };
    rec.onerror = () => {
      appState.isListening = false;
      showToast("Microphone unavailable — try a 1-tap voice sample.");
      render();
    };
    rec.start();
  };

  const saveBtn = document.getElementById("btn-save-observation");
  if (saveBtn) {
    saveBtn.onclick = async () => {
      const payload = {
        childId: document.getElementById("ext-child-id").value || null,
        name: appState.parsedVoice?.extractedName || "New Child",
        ageYears: appState.parsedVoice?.ageYears || 3,
        weightKg: document.getElementById("ext-weight").value || null,
        heightCm: document.getElementById("ext-height").value || null,
        mealDetails: document.getElementById("ext-meal").value || null,
        observationText: document.getElementById("ext-obs").value || "",
        rawSpeech: appState.voiceTranscript,
        hadIllness: appState.parsedVoice?.hadIllness || false,
        needsFollowUp: appState.parsedVoice?.needsFollowUp || false,
        domain: appState.parsedVoice?.domain || "COGNITIVE"
      };
      const res = await fetch("/api/observations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.ok) {
        showToast(`Saved observation for ${data.childName}`);
        appState.parsedVoice = null;
        appState.voiceTranscript = "";
        appState.selectedChildId = data.childId;
        appState.tab = "children";
        await fetchState();
      }
    };
  }
}

async function parseCurrentTranscript() {
  if (!appState.voiceTranscript.trim()) {
    showToast("Speak or enter text first.");
    return;
  }
  const res = await fetch("/api/voice/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ spokenText: appState.voiceTranscript })
  });
  const data = await res.json();
  appState.parsedVoice = data.parsed;
  render();
}

function renderChildrenTab() {
  const q = appState.searchQuery.trim().toLowerCase();
  const thrCount = appState.children.filter((c) => c.ageYears < 3).length;
  const hcmCount = appState.children.filter((c) => c.ageYears >= 3).length;
  const specialCount = appState.children.filter((c) => c.specialNeedsTitle).length;

  const filtered = appState.children.filter((c) => {
    if (appState.registerFilter === "THR" && c.ageYears >= 3) return false;
    if (appState.registerFilter === "HCM" && c.ageYears < 3) return false;
    if (appState.registerFilter === "SPECIAL" && !c.specialNeedsTitle) return false;
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.fatherName.toLowerCase().includes(q) ||
      c.motherName.toLowerCase().includes(q) ||
      c.enrollmentId.toLowerCase().includes(q) ||
      c.villageWard.toLowerCase().includes(q) ||
      (c.specialNeedsTitle || "").toLowerCase().includes(q) ||
      c.aadhaarLast4.includes(q)
    );
  });

  return `
    <div class="row-between">
      <div>
        <div style="font-weight:800;font-size:16px;">${t("backToList")}</div>
        <div style="font-size:11px;color:var(--muted);">ICDS Register 1 & 4 • Family Survey & Enrollment</div>
      </div>
      <button class="btn btn-primary btn-sm" id="btn-open-add-child">${svg("plus", 14)} ${t("addChildBtn")}</button>
    </div>

    <div class="card card-green" style="padding:10px 12px;">
      <div class="row-center" style="font-size:12px;font-weight:700;color:var(--green);">
        ${svg("building", 15)} <span>Bachupally-1 AWC (Code: 3601050201)</span>
      </div>
      <div style="font-size:11px;color:var(--text);margin-top:2px;">Medchal Sector • Quthbullapur Project • ${appState.children.length} Enrolled</div>
    </div>

    <div class="row-center">
      <div class="search-wrap">
        <span class="search-icon">${svg("search", 15)}</span>
        <input id="child-search-input" class="input search-input" value="${appState.searchQuery}" placeholder="${t("searchPlaceholder")}" />
      </div>
      ${appState.searchQuery ? `<button class="btn btn-outline btn-sm" id="btn-clear-search">${svg("x", 14)}</button>` : ""}
    </div>

    <div class="chip-row">
      <button class="chip ${appState.registerFilter === "ALL" ? "active" : ""}" data-filter="ALL">All (${appState.children.length})</button>
      <button class="chip ${appState.registerFilter === "THR" ? "active" : ""}" data-filter="THR">${svg("package", 12)} 6m-3y THR (${thrCount})</button>
      <button class="chip ${appState.registerFilter === "HCM" ? "active" : ""}" data-filter="HCM">${svg("utensils", 12)} 3-6y HCM (${hcmCount})</button>
      <button class="chip ${appState.registerFilter === "SPECIAL" ? "active" : ""}" data-filter="SPECIAL">${svg("sparkles", 12)} Special Care (${specialCount})</button>
    </div>

    <div class="section-label">Active Records: ${filtered.length} children</div>

    ${filtered.length === 0 ? `
      <div class="card" style="text-align:center;padding:28px;">
        <div style="color:var(--subtle);display:flex;justify-content:center;">${svg("search", 28)}</div>
        <div style="font-weight:700;margin-top:8px;">No matching records found</div>
        <button class="btn btn-primary btn-sm" id="btn-reset-filters" style="margin-top:10px;">Reset Filters</button>
      </div>
    ` : filtered.map((c, idx) => `
      <div class="card child-card child-row-btn" data-child-id="${c.id}">
        <div class="avatar ${c.gender === "F" ? "avatar-f" : "avatar-m"}">${c.name[0]}</div>
        <div style="flex:1;">
          <div class="row-center" style="flex-wrap:wrap;gap:5px;">
            <strong style="font-size:14.5px;">${c.name}</strong>
            <span class="badge badge-gray">${c.ageYears}y • ${c.gender}</span>
            ${c.ageYears < 3 ? `<span class="badge badge-blue">THR</span>` : `<span class="badge badge-green">HCM</span>`}
            ${c.whoMetrics?.category !== "Normal" ? `<span class="badge badge-red">${c.whoMetrics.category}</span>` : ""}
          </div>
          ${c.specialNeedsTitle ? `<div style="margin-top:4px;"><span class="badge badge-gold">${c.specialNeedsTitle}</span></div>` : ""}
          <div style="font-size:11px;color:var(--blue);font-weight:600;margin-top:4px;">
            ${t("enrolledPrefix")}: ${formatDate(c.createdAtEpochMs)} • Reg #${idx + 1}
          </div>
          <div style="font-size:11px;color:var(--muted);">${c.fatherName} / ${c.motherName}</div>
          <div style="font-size:10px;color:var(--subtle);margin-top:1px;">${c.enrollmentId} • ${c.villageWard} • Aadhaar •••• ${c.aadhaarLast4}</div>
        </div>
        ${svg("chevronRight", 16)}
      </div>
    `).join("")}
  `;
}

function bindChildrenEvents() {
  const searchEl = document.getElementById("child-search-input");
  searchEl.oninput = (e) => {
    appState.searchQuery = e.target.value;
    render();
    const ref = document.getElementById("child-search-input");
    if (ref) { ref.focus(); ref.setSelectionRange(ref.value.length, ref.value.length); }
  };
  const clearBtn = document.getElementById("btn-clear-search");
  if (clearBtn) clearBtn.onclick = () => { appState.searchQuery = ""; render(); };

  const resetBtn = document.getElementById("btn-reset-filters");
  if (resetBtn) resetBtn.onclick = () => { appState.searchQuery = ""; appState.registerFilter = "ALL"; render(); };

  document.querySelectorAll(".chip[data-filter]").forEach((chip) => {
    chip.onclick = () => { appState.registerFilter = chip.dataset.filter; render(); };
  });

  document.getElementById("btn-open-add-child").onclick = () => openAddChildModal();

  document.querySelectorAll(".child-row-btn").forEach((el) => {
    el.onclick = () => {
      appState.selectedChildId = el.dataset.childId;
      appState.speechExpanded = Boolean(
        appState.children.find((c) => c.id === el.dataset.childId)?.specialNeedsType === "SPEECH_HEARING"
      );
      render();
    };
  });
}

function renderChildStory(c) {
  const act = c.recommendedActivity;
  const sg = c.speechGuidance;
  const mn = c.multiDayNutrition;
  const needsDev = c.developmentHistory.some((d) => d.needsFollowUp);

  return `
    <button class="btn btn-outline btn-sm" id="btn-back-children" style="align-self:flex-start;">${svg("arrowLeft", 14)} ${t("backToList")}</button>

    <div class="card">
      <div class="row-center">
        <div class="avatar ${c.gender === "F" ? "avatar-f" : "avatar-m"}" style="width:50px;height:50px;font-size:19px;">${c.name[0]}</div>
        <div>
          <div class="row-center">
            <strong style="font-size:17px;">${c.name}</strong>
            <span class="badge badge-gray">${c.ageYears}y • ${c.gender}</span>
          </div>
          <div style="font-size:11.5px;color:var(--muted);">${c.fatherName} • ${c.motherName}</div>
          ${c.specialNeedsTitle ? `<div style="margin-top:4px;"><span class="badge badge-gold">${c.specialNeedsTitle}</span></div>` : ""}
          <div style="font-size:11px;color:var(--blue);font-weight:600;margin-top:4px;">${t("enrolledPrefix")}: ${formatDate(c.createdAtEpochMs)} • ${c.villageWard}</div>
          <div style="font-size:10.5px;color:var(--green);font-weight:600;">${c.ageYears < 3 ? "Take Home Ration (THR - Balamrutham)" : "Hot Cooked Meal (HCM - Rice, Dal, Egg)"}</div>
        </div>
      </div>

      <div class="grid-3" style="margin-top:12px;">
        <div class="stat-box">
          <div class="stat-lbl">Growth</div>
          <div class="stat-val" style="font-size:12.5px;color:var(--green);margin-top:2px;">${c.trajectoryStatus}</div>
        </div>
        <div class="stat-box">
          <div class="stat-lbl">Nutrition</div>
          <div class="stat-val" style="font-size:12.5px;color:var(--green);margin-top:2px;">DDS ${mn.dietaryDiversityScore}/5</div>
        </div>
        <div class="stat-box">
          <div class="stat-lbl">Development</div>
          <div class="stat-val" style="font-size:12.5px;color:${needsDev ? "var(--amber)" : "var(--green)"};margin-top:2px;">${needsDev ? "Review" : "Stable"}</div>
        </div>
      </div>

      <div class="grid-2" style="margin-top:8px;">
        <div class="stat-box">
          <div class="stat-val">${c.latestWeightKg ? c.latestWeightKg + " kg" : "—"}</div>
          <div class="stat-lbl">Latest Weight</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">WAZ ${c.whoMetrics.waz}</div>
          <div class="stat-lbl">WHO Status: <strong>${c.whoMetrics.category}</strong></div>
        </div>
      </div>
    </div>

    <!-- Multi-Day Nutrition Intelligence Card (from Android ChildStoryScreen) -->
    <div class="card" style="border:1.5px solid var(--gold);">
      <div class="row-between">
        <strong class="row-center" style="font-size:13px;">${svg("utensils", 14)} ${t("multiDayNutTitle")}</strong>
        <span class="badge badge-gold">DDS: ${mn.dietaryDiversityScore}/5</span>
      </div>
      <div style="font-size:11px;font-weight:700;color:var(--amber);margin-top:4px;">${mn.diversityRating}</div>
      <div class="day-strip">
        ${mn.daysStrip.map((d) => `
          <div class="day-cell">
            <div style="font-weight:700;">${d.dayLabel}</div>
            <div style="color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d.foods.join(", ")}</div>
            <div class="dot-row">
              ${d.hasProtein ? `<span class="micro-dot" style="background:var(--amber);" title="Protein"></span>` : ""}
              ${d.hasVegetables ? `<span class="micro-dot" style="background:var(--green);" title="Greens"></span>` : ""}
              ${d.hasFruits ? `<span class="micro-dot" style="background:var(--blue);" title="Fruit"></span>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
      <p style="font-size:11.5px;color:var(--text);margin-top:8px;">${mn.mainObservation}</p>
      <div class="card card-gold" style="padding:8px;margin-top:6px;font-size:11px;color:var(--amber);">
        <strong>Actionable Nutrition Guidance:</strong> ${mn.actionableSuggestion}
      </div>
    </div>

    ${c.adaptiveDietPlan ? `
      <div class="card card-green">
        <div class="row-between">
          <strong class="row-center" style="font-size:13px;color:var(--green);">${svg("utensils", 14)} ${t("adaptiveDietTitle")}</strong>
          <span class="badge badge-green">Inclusive Diet</span>
        </div>
        <p style="font-size:12px;margin-top:6px;">${c.adaptiveDietPlan}</p>
      </div>
    ` : ""}

    <div class="card card-blue">
      <div class="row-between">
        <strong class="row-center" style="font-size:13px;color:var(--blue);">${svg("volume", 14)} ${t("speechTitle")}</strong>
        <button class="btn btn-outline btn-sm" id="btn-toggle-speech">${appState.speechExpanded ? "Hide" : "Review"}</button>
      </div>
      <div style="margin-top:8px;font-size:12px;">
        <strong>${t("whenToRefer")} (${c.ageYears}y):</strong>
        <p style="margin-top:2px;">${sg.whenToReferSummary}</p>
      </div>
      ${appState.speechExpanded ? `
        <div style="margin-top:8px;font-size:11.5px;display:flex;flex-direction:column;gap:6px;">
          <div class="row-center" style="color:var(--red);font-weight:700;">${svg("alert", 13)} Key Warning Red Flags:</div>
          <ul style="padding-left:18px;">${sg.keyIndicators.map((i) => `<li>${i}</li>`).join("")}</ul>
          <div class="card card-gold" style="padding:8px;"><strong>Anganwadi Action (RBSK / DEIC):</strong> ${sg.anganwadiAction}</div>
          <div class="card" style="padding:8px;"><strong>Parent Guidance:</strong> ${sg.parentGuidance}</div>
          <button class="btn btn-outline btn-sm" id="btn-toggle-milestones">${appState.milestonesExpanded ? "Hide 1-6y Milestones Matrix" : "View Full 1-6y Speech Milestones Matrix"}</button>
          ${appState.milestonesExpanded ? appState.speechMilestones.map((m) => `
            <div class="card" style="padding:8px;font-size:11px;">
              <strong>${m.ageMonthsRange}</strong>
              <div style="color:var(--green);">Expected: ${m.expectedMilestone}</div>
              <div style="color:var(--red);">Red Flag: ${m.redFlagIndicator}</div>
            </div>
          `).join("") : ""}
        </div>
      ` : ""}
    </div>

    <!-- Hero Buttons Row: What Changed + Connect The Dots -->
    <div class="grid-2">
      <button class="btn btn-primary" id="btn-what-changed">${svg("compare", 14)} ${t("whatChangedTitle")}</button>
      <button class="btn btn-dark" id="btn-connect-dots">${svg("sparkles", 14)} ${t("connectDotsTitle")}</button>
    </div>

    <!-- Suggested Next Action Card with WHY?, Re-Observe, Override, Skip -->
    <div class="card">
      <div class="row-between">
        <strong style="font-size:11.5px;color:var(--gold-dark);text-transform:uppercase;">${t("activityTitle")}</strong>
        <button class="btn btn-outline btn-sm" id="btn-why-this">${svg("help", 13)} ${t("whyThis")}</button>
      </div>
      <div style="font-weight:800;font-size:15.5px;margin-top:6px;">${act.title}</div>
      <div style="font-size:11.5px;color:var(--green);font-weight:600;margin-top:2px;">
        ${act.durationMinutes} mins • Materials: ${act.materials.join(", ")}
      </div>
      <ol style="padding-left:18px;font-size:12px;margin-top:8px;display:flex;flex-direction:column;gap:3px;">
        ${act.steps.map((s) => `<li>${s}</li>`).join("")}
      </ol>
      <div style="display:flex;gap:6px;margin-top:12px;">
        <button class="btn btn-green btn-sm" id="btn-do-activity" style="flex:1.3;">${svg("play", 13)} ${t("doActivity")}</button>
        <button class="btn btn-outline btn-sm" id="btn-change-activity" style="flex:1;">${svg("edit", 13)} ${t("changeActivity")}</button>
        <button class="btn btn-outline btn-sm" id="btn-skip-activity" style="flex:0.8;">${t("skipActivity")}</button>
      </div>
      <button class="btn btn-dark" id="btn-explain-parent" style="width:100%;margin-top:8px;">${svg("volume", 14)} ${t("explainParent")}</button>
    </div>

    <div class="section-label">${t("timelineTitle")}</div>
    ${c.developmentHistory.map((d) => `
      <div class="card">
        <div class="row-between">
          <span style="font-size:11px;font-weight:700;color:var(--gold-dark);">${formatDate(d.timestampEpochMs)}</span>
          ${d.needsFollowUp ? `<span class="badge badge-gold">Worth Observing</span>` : `<span class="badge badge-green">${d.domain}</span>`}
        </div>
        <p style="font-size:12.5px;margin-top:4px;">${d.observationText}</p>
        ${d.rawWorkerSpeech ? `<div style="font-size:11px;color:var(--subtle);margin-top:3px;">Spoken: "${d.rawWorkerSpeech}"</div>` : ""}
      </div>
    `).join("")}
  `;
}

function bindChildStoryEvents(c) {
  document.getElementById("btn-back-children").onclick = () => { appState.selectedChildId = null; render(); };
  document.getElementById("btn-toggle-speech").onclick = () => { appState.speechExpanded = !appState.speechExpanded; render(); };
  const msBtn = document.getElementById("btn-toggle-milestones");
  if (msBtn) msBtn.onclick = () => { appState.milestonesExpanded = !appState.milestonesExpanded; render(); };

  document.getElementById("btn-what-changed").onclick = () => {
    openModal(`
      <div class="row-between">
        <strong class="row-center" style="font-size:14px;">${svg("compare", 15)} ${t("whatChangedTitle")} — ${c.name}</strong>
        <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
      </div>
      <div class="card card-gold"><p style="font-size:12.5px;">${c.whatChanged}</p></div>
      <div class="card" style="font-size:12px;"><strong>Trajectory Summary:</strong> ${c.trajectorySummary}</div>
      <button class="btn btn-dark" onclick="closeModal()">Close</button>
    `);
  };

  document.getElementById("btn-connect-dots").onclick = () => {
    openModal(`
      <div class="row-between">
        <strong class="row-center" style="font-size:14px;">${svg("sparkles", 15)} ${t("connectDotsTitle")}</strong>
        <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
      </div>
      <div class="card card-dark">
        <strong style="color:var(--gold);font-size:13.5px;">${c.connectDots.headline.replace(/^[\u{1F300}-\u{1FAFF}\s]+/u, "")}</strong>
        <p style="font-size:12px;color:#D1D5DB;margin-top:6px;">${c.connectDots.story}</p>
      </div>
      <div class="card card-green" style="font-size:12px;"><strong>Recommendation:</strong> ${c.connectDots.recommendation}</div>
      <button class="btn btn-dark" onclick="closeModal()">Close</button>
    `);
  };

  document.getElementById("btn-why-this").onclick = () => {
    openModal(`
      <div class="row-between">
        <strong class="row-center" style="font-size:14px;">${svg("help", 15)} Evidence & Personalization</strong>
        <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
      </div>
      <div class="card card-blue" style="font-size:12.5px;">${c.recommendedActivity.whyThis}</div>
      <button class="btn btn-dark" onclick="closeModal()">Close</button>
    `);
  };

  document.getElementById("btn-do-activity").onclick = () => {
    openModal(`
      <div class="row-between">
        <strong style="font-size:14px;">Record Activity Outcome (${c.name})</strong>
        <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
      </div>
      <div style="font-size:12px;color:var(--muted);">Activity: <strong>${c.recommendedActivity.title}</strong></div>
      <select id="reobs-outcome" class="select">
        <option value="COMPLETED_EASILY">Completed Easily & Engaged</option>
        <option value="NEEDED_HELP">Needed Gentle Scaffolding</option>
        <option value="DISENGAGED">Disengaged / Fatigued Today</option>
      </select>
      <textarea id="reobs-notes" class="textarea" rows="2" placeholder="Optional worker notes..."></textarea>
      <button class="btn btn-green" id="btn-submit-reobs">${svg("check", 14)} Save Re-Observation</button>
    `);
    document.getElementById("btn-submit-reobs").onclick = async () => {
      await fetch("/api/reobserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          childId: c.id,
          activityTitle: c.recommendedActivity.title,
          outcome: document.getElementById("reobs-outcome").value,
          notes: document.getElementById("reobs-notes").value
        })
      });
      closeModal();
      showToast("Post-activity re-observation saved to timeline");
      await fetchState();
    };
  };

  document.getElementById("btn-change-activity").onclick = () => {
    openModal(`
      <div class="row-between">
        <strong style="font-size:14px;">Worker Authority Override</strong>
        <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
      </div>
      <select id="override-reason" class="select">
        <option value="CHILD_TIRED">Child seems tired or unwell today</option>
        <option value="MATERIAL_MISSING">Required household material unavailable</option>
        <option value="GROUP_ROUTINE">Switching to group circle-time activity</option>
      </select>
      <button class="btn btn-primary" id="btn-submit-override">Record Override</button>
    `);
    document.getElementById("btn-submit-override").onclick = async () => {
      await fetch("/api/activity-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ childId: c.id, activityId: c.recommendedActivity.id, decision: "CHANGE", notes: document.getElementById("override-reason").value })
      });
      closeModal();
      showToast("Worker override recorded");
    };
  };

  document.getElementById("btn-skip-activity").onclick = async () => {
    await fetch("/api/activity-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ childId: c.id, activityId: c.recommendedActivity.id, decision: "SKIP" })
    });
    showToast("Activity skipped — logged for personalization");
  };

  document.getElementById("btn-explain-parent").onclick = () => {
    openModal(`
      <div class="row-between">
        <strong class="row-center" style="font-size:14px;">${svg("volume", 15)} Parent Counseling Script</strong>
        <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
      </div>
      <div class="card card-gold" style="font-size:13px;">"${c.recommendedActivity.parentExplain}"</div>
      <button class="btn btn-dark" onclick="closeModal()">Close</button>
    `);
  };
}

function renderInsightsTab() {
  const total = appState.children.length;
  const samMam = appState.children.filter((c) => c.whoMetrics?.category !== "Normal").length;
  const special = appState.children.filter((c) => c.specialNeedsTitle).length;
  const present = Object.values(appState.attendanceMap).filter(Boolean).length;
  const h = appState.health || { bhashiniKeyStatus: "key not set", geminiKeyStatus: "key not set" };

  return `
    <div style="font-weight:800;font-size:16px;">Anganwadi Centre Insights</div>
    <div class="grid-2">
      <div class="stat-box"><div class="stat-val">${total}</div><div class="stat-lbl">Enrolled Children</div></div>
      <div class="stat-box"><div class="stat-val">${present}/${total}</div><div class="stat-lbl">Present Today</div></div>
      <div class="stat-box"><div class="stat-val" style="color:var(--red);">${samMam}</div><div class="stat-lbl">Growth Review (SAM/MAM)</div></div>
      <div class="stat-box"><div class="stat-val" style="color:var(--green);">${special}</div><div class="stat-lbl">Inclusive Special Care</div></div>
    </div>

    <div class="card card-blue">
      <strong class="row-center" style="font-size:13px;">${svg("shield", 15)} Offline-First & Edge Privacy Status</strong>
      <div style="font-size:11.5px;margin-top:8px;display:flex;flex-direction:column;gap:5px;">
        <div class="row-between"><span>Deterministic Engines (WHO LMS + NLP + RBSK)</span><span class="badge badge-green">Active</span></div>
        <div class="row-between"><span>Mobile Data Transmitted</span><span class="badge badge-green">0.00 KB</span></div>
        <div class="row-between"><span>Optional Bhashini API Key</span><span class="badge badge-gray">${h.bhashiniKeyStatus}</span></div>
        <div class="row-between"><span>Optional Gemini API Key</span><span class="badge badge-gray">${h.geminiKeyStatus}</span></div>
      </div>
    </div>

    <div class="card">
      <strong class="row-center" style="font-size:13.5px;">${svg("file", 15)} Poshan Tracker Government Export (MoWCD)</strong>
      <p style="font-size:12px;color:var(--muted);margin:5px 0 11px;">
        Generates calibrated CSV registers matching Ministry of Women & Child Development columns.
      </p>
      <button class="btn btn-primary" id="btn-open-poshan" style="width:100%;">${svg("download", 14)} ${t("poshanBtn")}</button>
    </div>
  `;
}

function bindInsightsEvents() {
  document.getElementById("btn-open-poshan").onclick = openPoshanModal;
}

function openModal(html) {
  const root = document.getElementById("modal-root");
  root.innerHTML = `<div class="modal-card">${html}</div>`;
  root.classList.remove("hidden");
  root.onclick = (e) => { if (e.target === root) closeModal(); };
}

window.closeModal = function () {
  document.getElementById("modal-root").classList.add("hidden");
};

function openDataMonitorModal() {
  openModal(`
    <div class="row-between">
      <strong class="row-center" style="font-size:14px;">${svg("shield", 15)} Zero-Network Privacy Monitor</strong>
      <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
    </div>
    <div class="card card-green" style="font-size:12px;">
      <strong>100% Edge Isolated</strong>
      <p style="margin-top:4px;">All WHO growth calculations, voice NLP parsing, and child registers run locally without external cloud calls.</p>
    </div>
    <div class="grid-2">
      <div class="stat-box"><div class="stat-val">0.00 KB</div><div class="stat-lbl">Cellular Data Used</div></div>
      <div class="stat-box"><div class="stat-val">${appState.children.length}</div><div class="stat-lbl">Local Child Profiles</div></div>
    </div>
    <button class="btn btn-dark" onclick="closeModal()">Close</button>
  `);
}

async function openPoshanModal() {
  const res = await fetch("/api/poshan-csv");
  const csv = await res.text();
  openModal(`
    <div class="row-between">
      <strong class="row-center" style="font-size:14px;">${svg("file", 15)} Official Poshan Tracker CSV</strong>
      <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
    </div>
    <div class="csv-box">${csv}</div>
    <div class="grid-2">
      <button class="btn btn-primary" id="btn-dl-csv">${svg("download", 14)} Download .csv</button>
      <button class="btn btn-dark" id="btn-copy-csv">${svg("copy", 14)} Copy CSV</button>
    </div>
  `);
  document.getElementById("btn-dl-csv").onclick = () => {
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Poshan_Tracker_Bachupally_1.csv";
    a.click();
  };
  document.getElementById("btn-copy-csv").onclick = () => {
    navigator.clipboard.writeText(csv);
    showToast("Poshan Tracker CSV copied to clipboard");
  };
}

function openAttendanceModal() {
  const renderRows = () => appState.children.map((c) => {
    const present = appState.attendanceMap[c.id];
    return `
      <div class="row-between att-row" data-id="${c.id}" style="padding:8px 10px;border:1px solid var(--border);border-radius:10px;cursor:pointer;background:${present ? "#F9FDF9" : "#FDF7F7"}">
        <div>
          <strong style="font-size:12.5px;">${c.name} (${c.ageYears}y)</strong>
          <span class="badge ${c.ageYears < 3 ? "badge-blue" : "badge-green"}">${c.ageYears < 3 ? "THR" : "HCM"}</span>
          <div style="font-size:10px;color:var(--muted);">${c.villageWard}</div>
        </div>
        <span class="badge ${present ? "badge-green" : "badge-red"}">${present ? "Present" : "Absent"}</span>
      </div>
    `;
  }).join("");

  openModal(`
    <div class="row-between">
      <strong class="row-center" style="font-size:14px;">${svg("clipboard", 15)} Daily Attendance Register</strong>
      <button class="btn btn-green btn-sm" id="btn-mark-all">${svg("check", 13)} Mark All</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;max-height:340px;overflow-y:auto;" id="att-list">
      ${renderRows()}
    </div>
    <button class="btn btn-dark" onclick="closeModal()">Done</button>
  `);

  const bindRows = () => {
    document.querySelectorAll(".att-row").forEach((el) => {
      el.onclick = async () => {
        const res = await fetch("/api/attendance/toggle", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ childId: el.dataset.id })
        });
        const data = await res.json();
        appState.attendanceMap = data.attendanceMap;
        document.getElementById("att-list").innerHTML = renderRows();
        bindRows();
        render();
      };
    });
  };
  bindRows();

  document.getElementById("btn-mark-all").onclick = async () => {
    const res = await fetch("/api/attendance/mark-all", { method: "POST" });
    const data = await res.json();
    appState.attendanceMap = data.attendanceMap;
    document.getElementById("att-list").innerHTML = renderRows();
    bindRows();
    render();
  };
}

function openAddChildModal() {
  openModal(`
    <div class="row-between">
      <strong class="row-center" style="font-size:14px;">${svg("user", 15)} Enroll New Child (ICDS Reg 1)</strong>
      <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
    </div>
    <input id="new-name" class="input" placeholder="Child Full Name *" />
    <div class="grid-2">
      <input id="new-age" class="input" type="number" value="3" min="1" max="6" placeholder="Age (Years)" />
      <select id="new-gender" class="select"><option value="M">Boy (M)</option><option value="F">Girl (F)</option></select>
    </div>
    <input id="new-father" class="input" placeholder="Father's Name" />
    <input id="new-mother" class="input" placeholder="Mother's Name" />
    <div class="grid-2">
      <input id="new-weight" class="input" type="number" step="0.1" placeholder="Weight (kg)" />
      <input id="new-height" class="input" type="number" step="0.1" placeholder="Height (cm)" />
    </div>
    <button class="btn btn-primary" id="btn-submit-child">${svg("check", 14)} Enroll in Anganwadi</button>
  `);
  document.getElementById("btn-submit-child").onclick = async () => {
    const name = document.getElementById("new-name").value.trim();
    if (!name) { showToast("Please enter child name"); return; }
    const res = await fetch("/api/children", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        ageYears: document.getElementById("new-age").value,
        gender: document.getElementById("new-gender").value,
        fatherName: document.getElementById("new-father").value,
        motherName: document.getElementById("new-mother").value,
        weightKg: document.getElementById("new-weight").value,
        heightCm: document.getElementById("new-height").value
      })
    });
    const data = await res.json();
    if (data.ok) {
      closeModal();
      showToast(`${name} enrolled with today's date`);
      await fetchState();
    }
  };
}

function openTourModal() {
  const steps = [
    {
      title: "1. Hands-Free Indic Voice Intake",
      badge: "15-Sec Voice vs 5-Min Paper Ledger",
      desc: "Anganwadi workers speak naturally in Telugu, Hindi, or English. On-device NLP extracts child name, weight, and meals with zero cloud dependency.",
      actionText: "Try Voice Intake Tab",
      action: () => { appState.tab = "observe"; closeModal(); render(); }
    },
    {
      title: "2. Longitudinal Growth Intelligence",
      badge: "WHO LMS Formulation Engine",
      desc: "Links weight dips, illness episodes, and classroom fatigue across weeks to spot subtle growth plateauing before malnutrition becomes severe.",
      actionText: "Inspect Chitti's Story",
      action: () => { appState.tab = "children"; appState.selectedChildId = "child_chitti"; closeModal(); render(); }
    },
    {
      title: "3. Age-Tailored ECD & Counseling",
      badge: "Household Materials • Worker Authority",
      desc: "Suggests developmental activities using cups, spoons, and pebbles with worker override controls and empathetic parent counseling scripts.",
      actionText: "View Today's Priorities",
      action: () => { appState.tab = "today"; closeModal(); render(); }
    },
    {
      title: "4. Synchronized Real-Time Attendance",
      badge: "Live Calendar • 15 Rural Children",
      desc: "Real-time calendar synchronization with interactive daily attendance marking linked directly to THR and HCM meal distribution.",
      actionText: "Open Attendance Register",
      action: () => { closeModal(); openAttendanceModal(); }
    },
    {
      title: "5. National Poshan Tracker Export",
      badge: "MoWCD / ICDS Compliant CSV",
      desc: "Eliminates double data entry by generating official Ministry of Women & Child Development CSV registers pre-populated with WHO categories.",
      actionText: "View Poshan Tracker CSV",
      action: () => { closeModal(); openPoshanModal(); }
    },
    {
      title: "6. Inclusive ECD & Speech Therapy Screener",
      badge: "RBSK / DEIC Protocols & Adaptive Diets",
      desc: "Tailored activities and adaptive diets for disabled children (Shiva, Radha, Mahesh) plus an official RBSK/DEIC speech therapy early screener.",
      actionText: "View Shiva (Speech Support)",
      action: () => { appState.tab = "children"; appState.selectedChildId = "child_shiva"; appState.speechExpanded = true; closeModal(); render(); }
    }
  ];

  const step = steps[appState.tourStep - 1] || steps[0];
  openModal(`
    <div class="row-between">
      <strong class="row-center" style="font-size:14px;">${svg("sparkles", 15)} Evaluator Tour (${appState.tourStep}/${steps.length})</strong>
      <button class="btn btn-outline btn-sm" onclick="closeModal()">${svg("x", 14)}</button>
    </div>
    <div class="card card-gold">
      <span class="badge badge-gold">${step.badge}</span>
      <div style="font-weight:800;font-size:14px;margin-top:6px;">${step.title}</div>
      <p style="font-size:12px;color:var(--text);margin-top:4px;">${step.desc}</p>
    </div>
    <button class="btn btn-primary" id="tour-live-btn">${step.actionText} ${svg("chevronRight", 14)}</button>
    <div class="row-between">
      <button class="btn btn-outline btn-sm" id="tour-prev" ${appState.tourStep <= 1 ? "disabled" : ""}>Back</button>
      <button class="btn btn-dark btn-sm" id="tour-next">${appState.tourStep < steps.length ? "Next Step" : "Finish Tour"}</button>
    </div>
  `);
  document.getElementById("tour-live-btn").onclick = step.action;
  document.getElementById("tour-prev").onclick = () => { if (appState.tourStep > 1) { appState.tourStep--; openTourModal(); } };
  document.getElementById("tour-next").onclick = () => {
    if (appState.tourStep < steps.length) { appState.tourStep++; openTourModal(); }
    else closeModal();
  };
}

// Global header & nav bindings
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.onclick = () => { appState.lang = btn.dataset.lang; fetchState(); };
});

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.onclick = () => {
    appState.tab = btn.dataset.tab;
    if (btn.dataset.tab !== "children") appState.selectedChildId = null;
    render();
  };
});

document.getElementById("btn-font-scale").onclick = () => {
  appState.fontScale = (appState.fontScale + 1) % 3;
  updateHeaderAndNav();
};

document.getElementById("btn-data-monitor").onclick = () => openDataMonitorModal();
document.getElementById("btn-open-tour").onclick = () => { appState.tourStep = 1; openTourModal(); };

fetchState();
