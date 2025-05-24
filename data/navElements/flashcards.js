export const flashcards = [
  {
    question: 'What is a closure in JavaScript?',
    answer: 'A closure gives access to an outer function’s scope from an inner function.'
  },
  {
    question: 'What is the purpose of `useEffect` in React?',
    answer: '`useEffect` is used to perform side effects in function components.'
  },
  {
    question: 'What does `getServerSideProps` do in Next.js?',
    answer: 'It fetches data on each request at the server level for a specific page.'
  },
  {
    question: 'What is the difference between `null` and `undefined` in JS?',
    answer:
      '`undefined` means a variable has been declared but not assigned. `null` is an assignment value representing no value.'
  },
  {
    question: 'Why should you use keys in React lists?',
    answer: 'Keys help React identify which items changed, added, or removed.'
  },
  {
    question: 'What is a closure in JavaScript?',
    answer: 'A closure gives access to an outer function’s scope from an inner function.'
  },
  {
    question: 'Difference between var, let, and const?',
    answer:
      "'var' is function-scoped, 'let' and 'const' are block-scoped. 'const' can't be reassigned."
  },
  {
    question: 'What is hoisting in JavaScript?',
    answer:
      'Variables and function declarations are moved to the top of their scope before code execution.'
  },
  {
    question: "What does 'this' refer to in JavaScript?",
    answer: 'Depends on context: global, object, class, or arrow function.'
  },
  {
    question: 'Explain event delegation.',
    answer: 'Attaching a single event listener to a parent to manage events from child elements.'
  },
  {
    question: 'What is the Virtual DOM?',
    answer: 'A lightweight JS representation of the real DOM used to optimize UI updates.'
  },
  {
    question: 'What is the difference between == and ===?',
    answer: '`==` allows type coercion, `===` checks both type and value strictly.'
  },
  {
    question: 'What is a Promise?',
    answer: 'An object representing eventual completion (or failure) of an async operation.'
  },
  {
    question: 'What is async/await?',
    answer: 'Syntactic sugar over Promises for writing asynchronous code more readably.'
  },
  {
    question: 'What is the difference between null and undefined?',
    answer: '`undefined` is uninitialized, `null` is an assigned empty value.'
  },
  {
    question: 'Explain debounce vs throttle.',
    answer: '`debounce`: delay until stop; `throttle`: run at fixed intervals.'
  },
  {
    question: 'What is React?',
    answer: 'A JavaScript library for building user interfaces using components.'
  },
  {
    question: 'What is JSX?',
    answer: 'A syntax extension allowing HTML-like code in JavaScript, used with React.'
  },
  {
    question: 'What is a controlled component in React?',
    answer: 'Form elements whose values are controlled via React state.'
  },
  {
    question: 'What is useEffect used for?',
    answer: 'To perform side effects like data fetching, subscriptions, or manual DOM changes.'
  },
  {
    question: 'When does useEffect run?',
    answer: 'After the render, and on dependency change or once (with empty array).'
  },
  {
    question: 'What is useState?',
    answer: 'A React Hook that allows functional components to manage state.'
  },
  {
    question: 'What is prop drilling?',
    answer: 'Passing props down through many components when only a few need them.'
  },
  {
    question: 'What is Context API?',
    answer: 'A way to pass data through the component tree without manually passing props.'
  },
  {
    question: 'What is a key prop in React?',
    answer: 'A unique identifier used by React to optimize list rendering.'
  },
  {
    question: 'What are React fragments?',
    answer: 'Syntax `<></>` or `<React.Fragment>` to group elements without extra nodes.'
  },
  {
    question: 'What is reconciliation in React?',
    answer: 'The process of diffing and updating the DOM based on changes.'
  },
  {
    question: 'What is hydration in Next.js?',
    answer: 'Binding client-side JS to pre-rendered HTML.'
  },
  {
    question: 'What is SSR in Next.js?',
    answer: 'Server-side rendering — generates HTML on each request.'
  },
  {
    question: 'What is ISR in Next.js?',
    answer: 'Incremental Static Regeneration — re-generates pages in the background.'
  },
  {
    question: 'What is getStaticProps?',
    answer: 'A Next.js function to fetch data at build time for static pages.'
  },
  {
    question: 'What is getServerSideProps?',
    answer: 'A Next.js function that runs on every request for server-rendered pages.'
  },
  {
    question: 'What are dynamic routes in Next.js?',
    answer: 'Routes using brackets like `[id].js` to render pages based on params.'
  },
  {
    question: 'What is useRef used for?',
    answer: 'Accessing DOM nodes or storing mutable values without triggering re-renders.'
  },
  {
    question: 'What is a higher-order component (HOC)?',
    answer: 'A function that takes a component and returns a new component.'
  },
  {
    question: 'What is memoization in React?',
    answer: 'Caching the result of expensive computations (e.g., useMemo).'
  },
  {
    question: 'What is lazy loading?',
    answer: 'Loading components or resources only when needed.'
  },
  {
    question: 'What is Suspense in React?',
    answer: 'A component for handling lazy-loaded content and fallback UI.'
  },
  {
    question: 'What is an uncontrolled component?',
    answer: 'Form elements using DOM as the source of truth (with refs).'
  },
  {
    question: 'How does Next.js handle API routes?',
    answer: 'Serverless functions inside `/pages/api` for backend logic.'
  },
  {
    question: 'How do you handle redirects in middleware?',
    answer: "Use `NextResponse.redirect('/target')` in `middleware.ts`."
  },
  {
    question: 'What is tree-shaking?',
    answer: 'Removing unused code during build to reduce bundle size.'
  },
  {
    question: 'What is a custom hook?',
    answer: 'A reusable function that uses React Hooks to encapsulate logic.'
  },
  {
    question: 'How to optimize images in Next.js?',
    answer: 'Using the `next/image` component for automatic optimization.'
  },
  {
    question: 'What is React Server Components?',
    answer: 'Experimental feature to render components on the server with zero JS on client.'
  }
];
