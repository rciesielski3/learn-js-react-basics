# 🧪 Learn JS & React Fundamentals Lab

An interactive playground to explore and understand **core JavaScript concepts**, **React fundamentals** and **Next.js essentials** – visually, experimentally, and in real-time.

---

## 🌍 Live Demo

▶️ [learn-js-react-basics.vercel.app](https://learn-js-react-basics.vercel.app/)

---

## 🧠 What's Inside?

The home page is a **Scroll Journey**: three stages (JavaScript → React → Next.js) that guide you through the learning path, with the FunLab and the visitor counter on the same page.

The app contains **41 topics** split into three sections. Each topic is a route under `app/`:

### 🔹 JavaScript Fundamentals (12 topics, `/js/*`)

`basics` · `this` · `closures` · `classes` · `object-oriented` · `functional` · `promises` · `event-loop` · `modules` · `algorithms` · `js-vs-ts` · `types-explanation`

### 🔸 React Fundamentals (17 topics, `/react/*`)

`basics` · `state` · `composition` · `context` · `use-ref` · `lifecycle` · `suspense` · `error-boundary` · `comparison` · `hooks` · `virtual-dom` · `controlled` · `reconciliation` · `portals` · `performance` · `devtools` · `architecture`

### 🟩 Next.js Fundamentals (12 topics, `/nextjs/*`)

`overview` · `rendering` · `routing` · `caching` · `server-components` · `server-actions` · `middleware` · `authentication` · `metadata` · `optimization` · `deploy-monitor` · `summary`

Each topic page combines explanations, interactive demos, live logs and visual breakdowns.

---

## 🎯 Bonus Features

### 🎮 FunLab Playground (🚧 EXPERIMENTAL)

Available on the home page:

| Feature                | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| 🥠 Dev Fortune Cookie  | Crack open developer-themed fortune cookie wisdom                 |
| 🧩 Debug Puzzle        | Spot the bug in short JS snippets with solutions                  |
| ⏱️ One-Minute Concepts | Quick explanations of core concepts with "View All" modal         |
| 🔍 Acronym Decoder     | Decode tech acronyms (e.g. SSR, CSR, JSX, TTFB) with a search bar |

### 📚 Glossary (`/glossary`)

A quick-access glossary of essential terms and concepts used across JavaScript, React and Next.js. Hover or click terms to reveal concise explanations.

### 🃏 Flashcards (`/flashcards`)

Review key concepts with flashcards for quick repetition.

### 🧠 Quiz (`/quiz`)

Test your understanding with multiple-choice questions, get immediate feedback per question and see a summary at the end.

### 👀 Visitor Counter

The home page shows a visitor count stored in Cloud Firestore (document `visitors/counter`). A browser is counted once (tracked with a `hasVisited` flag in `localStorage`), and each page load shares a single request, so StrictMode double-runs do not inflate the count. Storage errors are handled gracefully and never break rendering.

Firestore rules (`firestore.rules`) allow anyone to read the counter and only increment it by exactly 1; setting arbitrary values and deleting the document are forbidden.

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/) – Cloud Firestore (visitor counter)
- [lucide-react](https://lucide.dev/) icons

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/rciesielski3/learn-js-react-basics.git
cd learn-js-react-basics

# Install dependencies
npm install

# Run locally (http://localhost:3000)
npm run dev
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint via next lint
```

> ⚠️ Requires **Node.js ≥ 18** and **npm ≥ 9**

### Environment variables

Firebase is configured in `lib/firebase.ts` from the following variables. Create a `.env.local` file in the project root and fill in the values from your Firebase project settings. Do not commit real values.

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

### Deploying Firestore rules

Firestore rules live in `firestore.rules` and are wired up through `firebase.json` and `.firebaserc` (project `learn-js-react-basics`). To publish rule changes:

```bash
npm install -g firebase-tools   # once
firebase login                  # once
firebase deploy --only firestore:rules
```

---

## 📁 Project Structure

```
app/                  # App Router routes
│
├── page.tsx          # Home page (Scroll Journey, FunLab, visitor counter)
├── js/              # JavaScript topic pages (/js/*)
├── react/           # React topic pages (/react/*)
├── nextjs/          # Next.js topic pages (/nextjs/*)
├── glossary/        # Glossary page
├── flashcards/      # Flashcards page
└── quiz/            # Quiz page
│
components/           # UI components
│   ├── FunLab.tsx    # FunLab container on the home page
│   ├── home/         # Home page journey (JourneyHome, styles)
│   ├── hooks/        # Hook demos and useVisitorCount
│   ├── funLab/       # FunLab mini-games and tools
│   ├── livecycle/    # Lifecycle demo child component
│   └── shared/       # Shared UI: PageShell, Glossary, Quiz, Flashcards, theme.ts, etc.
│
sections/             # Topic demo views grouped by section (js, react, nextjs)
│   └── react/hooks/  # Hook demo views (under react, not a top-level section)
│
data/                 # Static content: code examples, glossary, quiz/flashcard data
│   ├── js/           # Data for JS topics
│   ├── react/        # Data for React topics (incl. hooks/)
│   ├── nextjs/       # Data for Next.js topics
│   ├── funLab/       # Data for FunLab tools
│   ├── navElements/  # Glossary and quiz content
│   └── navigation.js # Home page navigation and topic links
│
lib/                  # Third-party setup (Firebase client, lib/firebase.ts)
public/               # Static assets
.firebaserc           # Firebase project alias (learn-js-react-basics)
firebase.json         # Firebase config (Firestore rules)
firestore.rules       # Firestore security rules
```

---

## 🧑‍💻 Author

Created with 💡 by [**Rafał Ciesielski**](https://github.com/rciesielski3)

- [LinkedIn](https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100/)
- [GitHub](https://github.com/rciesielski3)
- [Portfolio](https://rciesielski3.github.io/portfolio/)

---

## 📄 License

MIT License  
Please credit if you reuse it in your own work 🙌

[☕ Buy Me a Coffee](https://buycoffee.to/adateo)
