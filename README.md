# Balamitra (బాలమిత్ర) — Voice-First Anganwadi Co-Pilot

Balamitra is an offline-ready, voice-first Early Childhood Development (ECD) and nutrition intelligence co-pilot built for India's 1.4 million Anganwadi Workers.

---

## Quick Start (Docker Compose)

Start the entire application with one command (no `.env` file or API keys required):

```bash
docker compose up --build
```

Then open **http://localhost:3000** in your browser.

### Optional Environment Variables
See `.env.example` for optional external keys (`BHASHINI_API_KEY`, `GEMINI_API_KEY`). The application runs 100% locally without any keys and displays `"key not set"` on optional cloud status indicators.

---

## Key Capabilities

1. **Voice-First Indic Intake (Telugu / Hindi / Kannada / Marathi / English)**
   - Live browser speech recognition (`Web Speech API` in `te-IN`, `hi-IN`, `kn-IN`, `mr-IN`, `en-IN`) plus 1-tap realistic voice samples across all 5 languages.
   - Deterministic multilingual NLP & Levenshtein fuzzy matching extracts child identity, weight, height, meals, illness flags, and developmental domain.
2. **Deterministic WHO Growth & Connect The Dots Engine**
   - Computes Weight-for-Age Z-score (WAZ) proxies, longitudinal weight trajectories, and correlates illness episodes with classroom fatigue.
3. **Inclusive ECD & Speech Therapy Referral Screener (RBSK / DEIC)**
   - Tailored profiles, activities, and adaptive food patterns for children with Speech Delay (`Shiva`), Locomotor CP (`Radha`), and Sensory/Neurodivergent needs (`Mahesh`).
   - Age-calibrated red-flag milestones (12 months to 6 years) with official RBSK/DEIC referral guidance.
4. **Real Anganwadi Statutory Register Alignment**
   - Searchable Master Register (ICDS Register 1 & 4) with admission dates, THR (`6m–3y`) vs HCM (`3y–6y`) nutrition badges, live attendance register, and official **Poshan Tracker CSV** export.

---

## Local Development (Without Docker)

```bash
npm install
npm start
```
Open **http://localhost:3000**.
