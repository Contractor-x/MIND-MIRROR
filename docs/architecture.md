```plaintext
mindmirror/
├── .github/
│   └── workflows/
│       └── ci.yml                      # CI/CD via GitHub Actions (Netlify + tests)
│
├── public/                             # Public assets (served statically)
│   ├── favicon.ico
│   ├── manifest.json                   # PWA config if needed
│   └── robots.txt
│
├── src/                                # Core app logic (Bolt.new structure)
│   ├── app/                            # Application routing and layout
│   │   ├── layout.js                   # Root layout (Nav, Auth wrapper)
│   │   └── page.js                     # Landing page logic
│
│   ├── pages/                          # Route-based pages (Next.js or Bolt-style)
│   │   ├── index.jsx                   # Homepage with hero/demo call-to-action
│   │   ├── dashboard.jsx              # Authenticated dashboard (video carousel, journal, streaks)
│   │   ├── journal.jsx                # Journaling & gratitude tracking
│   │   ├── mood-checkin.jsx           # Daily mood tracker
│   │   ├── settings.jsx               # Profile + voice/video config
│   │   └── paywall.jsx                # RevenueCat integration view
│
│   ├── components/                     # Reusable UI components
│   │   ├── VideoTherapist.jsx         # Tavus-generated avatar video player
│   │   ├── VoiceResponder.jsx         # ElevenLabs dynamic audio player
│   │   ├── MoodTracker.jsx            # Emoji slider or mood form
│   │   ├── JournalCard.jsx            # Displays journal entries
│   │   ├── StreakCounter.jsx          # Tracks user consistency
│   │   ├── PaywallModal.jsx           # RevenueCat paywall display
│   │   └── Navbar.jsx / Footer.jsx    # Layout components
│
│   ├── styles/                         # Tailwind, CSS Modules, or SCSS
│   │   └── globals.css
│
│   ├── hooks/                          # Custom hooks
│   │   └── useUserMemory.js           # Local storage or Supabase memory
│   │   └── useVoicePlayback.js
│
│   ├── lib/                            # Utility libs and integrations
│   │   ├── tavus.js                   # Tavus API wrapper
│   │   ├── elevenlabs.js              # ElevenLabs API wrapper
│   │   ├── revenuecat.js              # RevenueCat SDK logic
│   │   ├── algorand.js                # Optional Algorand smart contract handler
│   │   └── supabaseClient.js          # Auth / DB handler (if using Supabase)
│
│   ├── context/                        # React Contexts (auth, user state)
│   │   └── AuthContext.js
│
│   ├── data/                           # Static JSON, mock sessions
│   │   └── dummyUsers.json
│   │   └── languages.json             # Supported languages list
│
│   └── utils/                          # Pure functions, helpers
│       ├── encryptData.js             # Local encryption logic
│       ├── trackStreaks.js
│       └── formatDate.js
│
├── mobile/                             # Expo/React Native app (if using mobile client)
│   ├── App.js
│   ├── screens/
│   ├── components/
│   └── revenuecat/
│       └── PaywallConfig.js
│
├── functions/                          # Netlify Functions (backend logic)
│   ├── create-video.js                # Calls Tavus to create video
│   ├── synthesize-voice.js            # Calls ElevenLabs to generate audio
│   ├── get-user-data.js
│   └── track-mood.js
│
├── scripts/                            # CLI tools, test seeders, deploy helpers
│   ├── deploy.js
│   └── seed.js
│
├── tests/                              # Unit & integration tests
│   ├── moodTracker.test.js
│   ├── videoTherapist.test.js
│   └── journalLogic.test.js
│
├── docs/                               # Planning docs, API references, diagrams
│   ├── architecture.md
│   ├── api-reference.md
│   └── pitch-deck.pdf
│
├── .env.example                        # Example env vars (Tavus, 11Labs, RC, etc.)
├── netlify.toml                        # Netlify deploy config
├── README.md                           # Clean, optimized for judges (includes demo)
├── LICENSE
└── bolt.json                           # Bolt.new project config
