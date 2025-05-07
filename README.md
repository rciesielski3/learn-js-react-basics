# 🧪 Learn JS & React Fundamentals Lab

An interactive playground to explore and understand **core JavaScript concepts** and **React fundamentals** – visually, experimentally, and in real-time.

---

## 🌍 Live Demo

▶️ [learn-js-react-basics.vercel.app](https://learn-js-react-basics.vercel.app/)

---

## 🧠 What's Inside?

### 🔹 JavaScript Fundamentals

| Topic                 | Path                              | Description                                                                     |
| --------------------- | --------------------------------- | ------------------------------------------------------------------------------- |
| Basics                | `/sections/js/JsBasics.tsx`       | Introduces JavaScript fundamentals                                              |
| `this` keyword        | `/sections/js/ThisDemo.tsx`       | Compare how `this` behaves in different contexts (global, strict, arrow, class) |
| Classes & Inheritance | `/sections/js/ClassesDemo.tsx`    | ES6 class syntax, prototypes, static/private fields                             |
| Algorithms            | `/sections/js/AlgorithmsDemo.tsx` | Run and inspect classic and advanced algorithms                                 |
| JS vs TS Comparison   | `/sections/js/TypeComparison.tsx` | Side-by-side comparison between TypeScript and JavaScript                       |
| Event Loop            | `/sections/js/EventLoop.tsx`      | Understand JavaScript concurrency and event queue                               |

### 🔸 React Fundamentals

| Topic                   | Path                                    | Description                                                             |
| ----------------------- | --------------------------------------- | ----------------------------------------------------------------------- |
| Basics                  | `/sections/react/ReactBasics.tsx`       | Introduces React                                                        |
| State Management        | `/sections/react/StateManagement.tsx`   | Concepts like `useState`, derived state, controlled inputs              |
| Component Composition   | `/sections/react/Composition.tsx`       | Composing components with children and slots                            |
| Context API             | `/sections/react/ContextManagement.tsx` | Global state sharing with useContext and custom providers               |
| useRef                  | `/sections/react/UseRef.tsx`            | Referencing DOM elements, storing persistent values, layout measurement |
| Lifecycle               | `/sections/react/Lifecycle.tsx`         | Observe component mount/update/unmount patterns and logs                |
| Suspense & Lazy Loading | `/sections/react/SuspenseExamples.tsx`  | Async components with React.lazy and Suspense fallback                  |
| Error Boundaries        | `/sections/react/ErrorBoundary.tsx`     | Catch render errors using class components and fallback UI              |
| Hook Comparisons        | `/sections/react/HookComparisons.tsx`   | Visualize subtle differences (e.g., `useEffect` vs `useLayoutEffect`)   |
| Hooks Playground        | `/sections/hooks/Hooks.tsx`             | Experiment with `useState`, `useReducer`, `useMemo`, etc. interactively |
| Virtual DOM             | `/sections/virtual-dom/VirtualDom.tsx`  | See how virtual DOM optimizes updates                                   |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/rciesielski3/learn-js-react-basics.git
cd learn-js-react-basics

# Install dependencies
npm install

# Run locally
npm run dev
```

> ⚠️ Requires **Node.js ≥ 18** and **npm ≥ 9**

---

## 📁 Project Structure

```
app/                  # Route-level grouping for JS and React examples
│
├── js/               # JavaScript-focused pages
│
├── react/            # React-focused pages
│
components/           # UI components (hook demos, shared elements)
│
sections/             # Feature views grouped by topic (JS, Hooks, Lifecycle, etc.)
│
data/                 # 🔢 Static example data (code + visual breakdowns)
│   ├── react/        # Data for React basics
│   └── js/           # Data for JS concept examples
│
shared/               # Shared utilities, types, UI blocks
public/               # Static assets
```

---

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Functional examples, logs, transitions, and reactive visuals

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
