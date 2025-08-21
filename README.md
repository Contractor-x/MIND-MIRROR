![Screenshot From 2025-06-10 21-50-15](https://github.com/user-attachments/assets/3b865645-f081-49ba-8957-a2a979fdc57e)
#  MindMirror: AI-Powered Virtual Therapist
<!-- 123456789012345678 -->
---

## 🧠 What is MindMirror?

**MindMirror** gives each user a personalized, private, and adaptive mental health journey using:

-  **Tavus AI Video Avatars** – Your virtual therapist talks directly to you.
- **ElevenLabs Voice Synthesis** – Human-sounding responses that evolve with you.
- **Mood tracking + Journaling** – Reflect and track emotions over time.
- **Privacy-first UX** – No human judgment, no ads, full data control.

> Mental health access is a global issue.  
> MindMirror bridges the gap for those who can’t afford, access, or feel ready for traditional therapy.

---

## Challenge Track Submissions

This project is submitted to **6+ official BOLT tracks**:

| ✅ | Challenge                              | How We Qualify                                                                 |
|----|----------------------------------------|---------------------------------------------------------------------------------|                          |
| ✅ | **Conversational AI Video Challenge**  | Tavus-powered therapist avatar integration.                                    |
| ✅ | **Voice AI Challenge**                 | ElevenLabs-powered human-like voice responses.                                 |
| ✅ | **RevenueCat Monetization Challenge**  | Subscription flow using RevenueCat SDK + Paywall Builder.                      |
| ✅ | **Deploy (Netlify) Challenge**         | Full-stack deployed via Netlify with custom domain.                            |
| ✅ | **Make More Money Challenge**          | Monetization optimized for mobile users with RevenueCat.                       |
| ✅ | **Custom Domain Challenge**            | Published on a live IONOS domain via Entri.                                    |
| ✅ | **Blockchain Challenge (optional)**    | Uses Algorand for trustless journaling and verifiable user streaks.            |

---

## 🧪 Tech Stack & Tools

| Tool / API           | Purpose                                                                 |
|----------------------|-------------------------------------------------------------------------|
|  **Tavus**          | AI-generated personalized therapy video avatars.                        |
| **ElevenLabs**     | Voice synthesis that reacts to user inputs like mood & journaling.      |
| **RevenueCat**     | Subscription logic, paywall builder, and entitlement management.        |
| **Netlify**        | Full-stack hosting,                                                     |
|  **Entri + IONOS**  | Custom domain registration and routing.                                 |
| **Algorand**       | Optional layer for blockchain-based data proof (journals, streaks).      |
| **Supabase**       | Auth, journaling DB, streak tracking, mood history storage.             |
|  **Local Encryption** | Ensures total privacy for stored reflections.                         |
| **Expo (optional)**| Mobile support for Android/iOS via React Native.                        |
| **YouTube/Vimeo**  | Hosting the 3-min demo video.                                            |
|  **GitHub**         | Version control, CI/CD deployment, and collaboration.                                 |

---

## 📲 Key Features

| 🌟 Feature                    | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
|  **Daily Video Therapy**   | Watch personalized, AI-generated video check-ins each day.                 |
| **Voice Feedback**        | Receive calming voice reflections that respond to your inputs.             |
|  **Journaling & Reflection**| Write thoughts and track growth privately, encrypted end-to-end.           |
|  **Mood Tracker**          | Visually record emotional trends.                                          |
| **Streak Engine**         | Get rewarded for daily reflection — track personal consistency.            |
|  **Multilingual Support**  | Localized video/voice delivery based on user’s language.                   |
| **Subscription Ready**    | Monetization via RevenueCat: unlock bonus content, deeper analysis, etc.   |
| **Privacy-First UX**      | No ads, no data selling, no human monitoring — your space is yours.        |
| **Blockchain Layer**      | Optional: store mood/streak hash on Algorand for proof-of-growth.          |

---

## 🧭 App Architecture

```plaintext
src/
├── pages/                  # Route-based pages (Landing, Dashboard, Journal, Mood)
├── components/             # Reusable UI: VideoTherapist, VoiceResponder, MoodTracker
├── lib/                    # API Wrappers: Tavus, ElevenLabs, RevenueCat, Algorand
├── hooks/                  # Custom React Hooks for memory, playback, auth
├── context/                # React Contexts for user state/auth
├── data/                   # Static data: languages, dummy users
├── utils/                  # Pure functions: encryption, streak logic
├── app/                    # Layout wrapper and root entry point
functions/                  # Netlify serverless functions for Tavus/11Labs calls
mobile/                     # Optional React Native app (with RevenueCat mobile SDK)
.github/workflows/          # CI: build, test, deploy pipeline
````

---

## 🛠️ Local Dev Setup

1. **Clone the repo**

```bash
git clone https://github.com/Contractor-x/mindmirror.git
cd mindmirror
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up `.env`**

```env
TAVUS_API_KEY=...
ELEVENLABS_API_KEY=...
REVENUECAT_PUBLIC_KEY=...
SUPABASE_URL=...
SUPABASE_KEY=...
```

4. **Run dev server**

```bash
npm run dev
```

5. **Deploy**

```bash
# Netlify auto-deploys from main branch
```

---

## 🧪 Testing

```bash
npm run test
```

Unit tests are located in the `/tests` directory and include:

* MoodTracker logic
* Streak calculation
* VideoTherapist rendering
* Journal CRUD tests

---

## 📦 Submission Requirements (Completed)

| Requirement ✅           | Details                                                       |
| ----------------------- | ------------------------------------------------------------- |
| Demo Video           | \[YouTube/Vimeo link – INSERT HERE]                           |
| Live App             | [https://yourdomain.com](https://yourdomain.com)              |
| Built with Bolt.new | Yes, using Bolt.new templates + ‘Built with Bolt’ badge shown |
|  Submit Email         | \[INSERT DEVELOPER EMAIL USED ON BOLT.NEW]                    |

---

## 🤝 Sponsors + Partners

Built with the support of the **BOLT Hackathon Sponsors**:

* 🧠 **Tavus**
* 🔊 **ElevenLabs**
* 💳 **RevenueCat**
* ☁️ **Netlify**
* 🌐 **Entri / IONOS**
* 🧾 **Supabase**
* ⛓️ **Algorand**
* 🧠 **AWS**
* 🎭 **Reddit**
* 💡 **Dev.to**
* 🧪 **Expo**
* ⚡ **Pica**
* 🌊 **River**
* 🪩 **21st.dev**
* 🧃 **Espresso**
* 🔗 **GV (Google Ventures)**

---

## 📬 Contact

* Project Lead: \[Contractor-x,Moh-dakai]
* Submission Email: \[[YourBoltEmail@example.com](mailto:YourBoltEmail@example.com)]
* GitHub: [Contractor](https://github.com/Contractor-x)
* GitHub: [Moh-dakai](https://github.com/Moh-dakai)
---

## 🏁 Final Words

MindMirror, it’s a **movement**.
A tool to help millions reflect, feel seen, and build emotional resilience one day at a time.

Let’s normalize therapy. Let’s democratize healing... 💙

---

**Built with ❤️ and AI for ALL**

[![Netlify Status](https://api.netlify.com/api/v1/badges/15ea3731-d23a-42ff-843c-ce193f144a09/deploy-status)](https://app.netlify.com/projects/mymindmirror/deploys)

