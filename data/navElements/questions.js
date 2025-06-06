export const quizQuestions = [
  {
    question: "What does 'useState' return in React?",
    options: [
      'An object with state and setState',
      'An array with state and setState',
      'A single function',
      'A boolean'
    ],
    answer: 'An array with state and setState'
  },
  {
    question: 'What is the main difference between SSR and CSR in Next.js?',
    options: [
      'CSR renders HTML on the server, SSR in the browser',
      'SSR uses JavaScript only, CSR does not',
      'SSR renders on the server, CSR in the browser',
      'There is no difference'
    ],
    answer: 'SSR renders on the server, CSR in the browser'
  },
  {
    question: "What is the purpose of 'useEffect'?",
    options: [
      'To create new hooks',
      'To directly manipulate the DOM',
      'To perform side effects like data fetching',
      'To declare static variables'
    ],
    answer: 'To perform side effects like data fetching'
  },
  {
    question: 'What is the Virtual DOM in React?',
    options: [
      'The actual browser DOM',
      'A JavaScript representation of the real DOM',
      'A CSS-based version of the DOM',
      'A physical replica of the DOM'
    ],
    answer: 'A JavaScript representation of the real DOM'
  },
  {
    question: 'Which folder is used for file-based routing in Next.js App Router?',
    options: ['pages', 'components', 'app', 'routes'],
    answer: 'app'
  },
  {
    question: 'What keyword is used to make a component a Server Component in Next.js?',
    options: ['server', 'use server', 'export server', 'rsc'],
    answer: 'use server'
  },
  {
    question: "What does 'props' stand for in React?",
    options: ['Property settings', 'Component options', 'Properties', 'Pre-rendered values'],
    answer: 'Properties'
  },
  {
    question: 'What does React.memo do?',
    options: [
      'It memoizes the return value of a function',
      'It prevents a component from rendering unless props change',
      'It caches API data',
      'It triggers a re-render'
    ],
    answer: 'It prevents a component from rendering unless props change'
  },
  {
    question: 'Which React hook is used to reference a DOM node?',
    options: ['useRef', 'useDOM', 'useMemo', 'useElement'],
    answer: 'useRef'
  },
  {
    question: 'What does ISR stand for in Next.js?',
    options: [
      'Immediate Server Rendering',
      'Incremental Server Response',
      'Instant Static Rendering',
      'Incremental Static Regeneration'
    ],
    answer: 'Incremental Static Regeneration'
  },
  {
    question: 'Which React hook is best for memoizing expensive calculations?',
    options: ['useEffect', 'useMemo', 'useCallback', 'useRef'],
    answer: 'useMemo'
  },
  {
    question: 'How do you define a dynamic route in Next.js Pages Router?',
    options: ['/page/[id].js', '/page/:id.js', '/page/id.js', '/page{id}.js'],
    answer: '/page/[id].js'
  },
  {
    question: 'What is the default HTTP method used in a form submission?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    answer: 'GET'
  },
  {
    question: 'Which tag is used to define metadata like title and description in HTML?',
    options: ['<meta>', '<info>', '<data>', '<config>'],
    answer: '<meta>'
  },
  {
    question: 'In JavaScript, what type is returned by typeof null?',
    options: ['null', 'object', 'undefined', 'function'],
    answer: 'object'
  },
  {
    question: "What does 'useEffect' cleanup function do?",
    options: [
      'Runs before the component mounts',
      'Runs after every render',
      'Cleans up side effects on unmount',
      'Unsubscribes hooks from the DOM'
    ],
    answer: 'Cleans up side effects on unmount'
  },
  {
    question: 'How can you prevent unnecessary re-renders in React?',
    options: [
      'Using useEffect',
      'Using useMemo and React.memo',
      'Calling setState repeatedly',
      'Removing hooks'
    ],
    answer: 'Using useMemo and React.memo'
  },
  {
    question: 'What does NextResponse.redirect() do in middleware?',
    options: [
      'Cancels middleware execution',
      'Redirects to another route',
      'Refreshes the page',
      'Logs request data'
    ],
    answer: 'Redirects to another route'
  },
  {
    question: 'Which of the following executes first in the event loop?',
    options: ['setTimeout', 'setInterval', 'Promise.then', 'requestAnimationFrame'],
    answer: 'Promise.then'
  },
  {
    question: 'Which statement about useRef is TRUE?',
    options: [
      'It causes re-renders',
      'It’s used to store persistent values',
      'It’s part of React Router',
      'It only works with class components'
    ],
    answer: 'It’s used to store persistent values'
  },
  {
    question: 'Which tag is used in Next.js to optimize external scripts?',
    options: ['<script>', '<Script>', '<ExternalScript>', '<AsyncScript>'],
    answer: '<Script>'
  },
  {
    question: 'How do you share global state in React without props?',
    options: ['useState', 'React Context', 'React.memo', 'useRef'],
    answer: 'React Context'
  },
  {
    question: 'What is the default cache mode for fetch in Next.js server components?',
    options: ['no-store', 'force-cache', 'reload', 'dynamic'],
    answer: 'force-cache'
  },
  {
    question: "What does 'getStaticProps' do in Next.js?",
    options: [
      'Renders on every request',
      'Provides static props at build time',
      'Forces a redirect',
      'Defines page styles'
    ],
    answer: 'Provides static props at build time'
  },
  {
    question: 'What is tree shaking?',
    options: [
      'A React lifecycle method',
      'A Next.js cache technique',
      'Eliminating unused code during bundling',
      'A way to style trees in JSX'
    ],
    answer: 'Eliminating unused code during bundling'
  },
  {
    question: "What is the purpose of 'getServerSideProps'?",
    options: [
      'Fetches data at build time',
      'Fetches data on every request',
      'Caches data for later use',
      'Defines static routes'
    ],
    answer: 'Fetches data on every request'
  },
  {
    question: "What is the purpose of the 'key' prop in React lists?",
    options: [
      'To style list items',
      'To identify elements for reconciliation',
      'To bind event handlers',
      'To create unique IDs'
    ],
    answer: 'To identify elements for reconciliation'
  },
  {
    question: 'Which of the following is NOT a valid React Hook?',
    options: ['useState', 'useReducer', 'useEffect', 'useStyle'],
    answer: 'useStyle'
  },
  {
    question: 'How do you enable ISR in Next.js?',
    options: [
      'Use getServerSideProps',
      'Use getStaticProps with revalidate',
      'Set dynamic=true',
      'Use useEffect'
    ],
    answer: 'Use getStaticProps with revalidate'
  },
  {
    question: "What does 'use client' do in a React Server Component?",
    options: [
      'It converts the component to a client component',
      'It caches the component',
      'It blocks hydration',
      'It imports React from CDN'
    ],
    answer: 'It converts the component to a client component'
  },
  {
    question: 'How does React determine if a component should re-render?',
    options: [
      'Using prop reference checks',
      'Manual render call',
      'Comparing class instances',
      'Checking hook names'
    ],
    answer: 'Using prop reference checks'
  },
  {
    question: "What’s a benefit of using 'React.lazy'?",
    options: [
      'Reduces bundle size by code splitting',
      'Disables rendering',
      'Preloads images',
      'Renders without React'
    ],
    answer: 'Reduces bundle size by code splitting'
  },
  {
    question: 'What file in Next.js allows you to add a global layout for a route?',
    options: ['layout.tsx', 'root.tsx', 'template.tsx', 'global.tsx'],
    answer: 'layout.tsx'
  },
  {
    question: 'Which lifecycle hook is closest to useEffect with [] dependency?',
    options: [
      'componentDidMount',
      'componentWillUpdate',
      'componentDidUpdate',
      'componentWillMount'
    ],
    answer: 'componentDidMount'
  },
  {
    question: "What does \"'dynamic = 'force-dynamic' \" do in Next.js?",
    options: [
      'Forces ISR to run',
      'Forces server-side rendering per request',
      'Forces client-side rendering',
      'Disables caching'
    ],
    answer: 'Forces server-side rendering per request'
  },
  {
    question: "What does the 'children' prop represent in React?",
    options: [
      'A reserved keyword',
      'Nested elements/components passed into a component',
      'Only arrays of nodes',
      'A state management library'
    ],
    answer: 'Nested elements/components passed into a component'
  },
  {
    question: 'What is the purpose of useLayoutEffect in React?',
    options: [
      'Runs before rendering and before painting',
      'Runs after painting',
      'Only runs on unmount',
      'Same as useEffect'
    ],
    answer: 'Runs before rendering and before painting'
  },
  {
    question: 'Which hook is best for managing complex form state?',
    options: ['useMemo', 'useRef', 'useReducer', 'useEffect'],
    answer: 'useReducer'
  },
  {
    question: "What does the 'children' prop allow in React?",
    options: [
      'Injecting text into HTML',
      'Passing multiple props',
      'Rendering nested components',
      'Overriding component layout'
    ],
    answer: 'Rendering nested components'
  },
  {
    question: 'Which of the following best describes a controlled component?',
    options: [
      'It stores state in a ref',
      'It relies only on external props',
      'It controls its own DOM manually',
      'Its state is driven by React'
    ],
    answer: 'Its state is driven by React'
  },
  {
    question: 'What’s the default HTTP method for a form using action in Next.js App Router?',
    options: ['POST', 'PUT', 'GET', 'PATCH'],
    answer: 'POST'
  },
  {
    question: 'How does getServerSideProps differ from getStaticProps?',
    options: [
      'getServerSideProps runs once at build time',
      'getServerSideProps fetches data per request',
      'They are identical',
      'getStaticProps is slower'
    ],
    answer: 'getServerSideProps fetches data per request'
  },
  {
    question: 'What is the role of Suspense in React?',
    options: [
      'To pause rendering until data or code is ready',
      'To cancel requests',
      'To unmount components on error',
      'To log performance'
    ],
    answer: 'To pause rendering until data or code is ready'
  },
  {
    question: "Which statement about 'useEffect' is FALSE?",
    options: [
      'It can return a cleanup function',
      'It runs synchronously after render',
      'It is useful for fetching data',
      'It can depend on props and state'
    ],
    answer: 'It runs synchronously after render'
  },
  {
    question: 'What does the dynamic route file name [id].tsx enable in Next.js?',
    options: [
      'Dynamic layout switching',
      'Nested client components',
      'Route parameters for pages',
      'Global routing configuration'
    ],
    answer: 'Route parameters for pages'
  },
  {
    question: 'Which of the following prevents re-renders in child components?',
    options: ['useEffect', 'React.memo', 'useRef', 'Suspense'],
    answer: 'React.memo'
  },
  {
    question: 'What is a key benefit of using TypeScript in React projects?',
    options: [
      'Improves SEO',
      'Adds runtime performance',
      'Enables type safety and autocompletion',
      'Eliminates all bugs'
    ],
    answer: 'Enables type safety and autocompletion'
  },
  {
    question: 'Which lifecycle method is replaced by useEffect in functional components?',
    options: [
      'componentWillMount',
      'componentDidMount',
      'shouldComponentUpdate',
      'componentWillUnmount'
    ],
    answer: 'componentDidMount'
  },
  {
    question: "What does the 'revalidate' property in getStaticProps do?",
    options: [
      'Disables caching',
      'Re-fetches the page on every render',
      'Enables Incremental Static Regeneration',
      'Refreshes the client'
    ],
    answer: 'Enables Incremental Static Regeneration'
  },
  {
    question: 'Which React hook lets you store a mutable value without causing re-renders?',
    options: ['useMemo', 'useRef', 'useState', 'useCallback'],
    answer: 'useRef'
  },
  {
    question: 'How do you define a catch-all route in Next.js App Router?',
    options: ['[...slug]', '[[slug]]', 'slug[]', '...slug'],
    answer: '[...slug]'
  },
  {
    question: 'What is the purpose of the "key" prop in React lists?',
    options: [
      'To uniquely identify elements for reconciliation',
      'To style list items',
      'To bind event handlers',
      'To create unique IDs'
    ],
    answer: 'To uniquely identify elements for reconciliation'
  },
  {
    question: 'What does the "use client" directive do in Next.js?',
    options: [
      'Converts a server component to a client component',
      'Enables server-side rendering',
      'Caches the component on the server',
      'Disables hydration'
    ],
    answer: 'Converts a server component to a client component'
  },
  {
    question: 'What is the purpose of the "useCallback" hook in React?',
    options: [
      'To memoize functions to prevent re-creation',
      'To store mutable values',
      'To fetch data',
      'To create new components'
    ],
    answer: 'To memoize functions to prevent re-creation'
  },
  {
    question: 'Which of the following is NOT a valid way to define a React component?',
    options: ['Function declaration', 'Arrow function', 'Class declaration', 'Object literal'],
    answer: 'Object literal'
  },
  {
    question: 'What is the purpose of the "useMemo" hook in React?',
    options: [
      'To memoize values to prevent re-computation',
      'To store mutable values',
      'To fetch data',
      'To create new components'
    ],
    answer: 'To memoize values to prevent re-computation'
  },
  {
    question: 'What does the "getInitialProps" method do in Next.js?',
    options: [
      'Fetches data at build time',
      'Fetches data on every request',
      'Caches data for later use',
      'Defines static routes'
    ],
    answer: 'Fetches data on every request'
  },
  {
    question: 'Which of the following is a valid way to define a React component?',
    options: ['Function declaration', 'Arrow function', 'Class declaration', 'All of the above'],
    answer: 'All of the above'
  },
  {
    question: 'What is the purpose of the "useReducer" hook in React?',
    options: [
      'To manage complex state logic',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To manage complex state logic'
  },
  {
    question: 'What does the "getStaticPaths" method do in Next.js?',
    options: [
      'Defines static routes for pages',
      'Fetches data at build time',
      'Generates dynamic routes',
      'Caches data for later use'
    ],
    answer: 'Generates dynamic routes'
  },
  {
    question: 'What is the purpose of the "useContext" hook in React?',
    options: [
      'To access global state',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To access global state'
  },
  {
    question: 'What does the "getStaticProps" method do in Next.js?',
    options: [
      'Fetches data at build time',
      'Fetches data on every request',
      'Caches data for later use',
      'Defines static routes'
    ],
    answer: 'Fetches data at build time'
  },
  {
    question: 'What is the purpose of the "useLayoutEffect" hook in React?',
    options: [
      'To run effects synchronously after DOM mutations',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To run effects synchronously after DOM mutations'
  },
  {
    question: 'What does the "getServerSideProps" method do in Next.js?',
    options: [
      'Fetches data at build time',
      'Fetches data on every request',
      'Caches data for later use',
      'Defines static routes'
    ],
    answer: 'Fetches data on every request'
  },
  {
    question: 'What is the purpose of the "useImperativeHandle" hook in React?',
    options: [
      'To customize the instance value exposed by a ref',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To customize the instance value exposed by a ref'
  },
  {
    question: 'What is the purpose of the "useDebugValue" hook in React?',
    options: [
      'To display a label for custom hooks in React DevTools',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To display a label for custom hooks in React DevTools'
  },
  {
    question: 'What is the purpose of the "useTransition" hook in React?',
    options: [
      'To manage concurrent rendering',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To manage concurrent rendering'
  },
  {
    question: 'What is the purpose of the "useDeferredValue" hook in React?',
    options: [
      'To defer updates to a value until the next render',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To defer updates to a value until the next render'
  },
  {
    question: 'What is the purpose of the "useId" hook in React?',
    options: [
      'To generate unique IDs for components',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To generate unique IDs for components'
  },
  {
    question: 'What is the purpose of the "useSyncExternalStore" hook in React?',
    options: [
      'To subscribe to external stores and synchronize state',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To subscribe to external stores and synchronize state'
  },
  {
    question: 'What is the purpose of the "useInsertionEffect" hook in React?',
    options: [
      'To perform side effects before DOM mutations',
      'To fetch data',
      'To store mutable values',
      'To create new components'
    ],
    answer: 'To perform side effects before DOM mutations'
  }
];
