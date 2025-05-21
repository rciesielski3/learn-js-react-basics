export const glossary = {
  javascript: [
    {
      term: 'Event Loop',
      definition:
        'Handles async behavior in JS by managing the call stack and callback/microtask queues.'
    },
    {
      term: 'Virtual DOM',
      definition:
        'In-memory representation of the UI – allows React to update efficiently via diffing.'
    },
    {
      term: 'Closure',
      definition:
        'A function that retains access to its lexical scope even when called outside of that scope.'
    },
    { term: 'Callback', definition: 'A function passed as an argument to be executed later.' },
    {
      term: 'Promise',
      definition:
        'An object representing the eventual completion or failure of an asynchronous operation.'
    },
    {
      term: 'Async/Await',
      definition: 'Syntax for writing asynchronous code that looks synchronous.'
    },
    { term: 'Prototype', definition: 'All JS objects inherit properties from a prototype object.' },
    {
      term: 'Constructor',
      definition: 'A function used to create and initialize an object instance.'
    }
  ],

  react: [
    { term: 'Props', definition: 'Data passed from a parent to a child component in React.' },
    { term: 'State', definition: 'Internal data managed within a React component.' },
    {
      term: 'Hooks',
      definition:
        'React functions like useState/useEffect that enable state and lifecycle features in function components.'
    },
    {
      term: 'useEffect',
      definition: 'Hook for side effects – runs after render or when dependencies change.'
    },
    {
      term: 'useMemo',
      definition: 'Memoizes a computed value to avoid expensive recalculation on each render.'
    },
    {
      term: 'useCallback',
      definition: 'Memoizes a function to avoid unnecessary re-creation unless dependencies change.'
    },
    {
      term: 'React.memo',
      definition: 'Higher-order component that prevents re-render if props haven’t changed.'
    },
    {
      term: 'Render Prop',
      definition:
        'A function prop that returns UI, enabling dynamic rendering from child to parent.'
    },
    {
      term: 'Composition',
      definition: 'Building complex UIs by combining smaller components together.'
    }
  ],

  nextjs: [
    {
      term: 'SSR',
      definition: 'Server-Side Rendering – content is rendered on the server per request.'
    },
    {
      term: 'CSR',
      definition: 'Client-Side Rendering – content is rendered in the browser using JavaScript.'
    },
    {
      term: 'SSG',
      definition:
        'Static Site Generation – pages are built at compile time and served as static HTML.'
    },
    {
      term: 'ISR',
      definition:
        'Incremental Static Regeneration – rebuilds static pages in the background when needed.'
    },
    {
      term: 'Hydration',
      definition: 'The process where React makes server-rendered HTML interactive on the client.'
    },
    {
      term: 'RSC',
      definition:
        'React Server Components – components rendered on the server with no JS sent to the client.'
    },
    {
      term: 'Middleware',
      definition:
        'Logic that runs before a request is completed in Next.js (e.g., for redirects or auth).'
    },
    {
      term: 'Metadata API',
      definition:
        'Next.js API to define SEO metadata in App Router using static or dynamic methods.'
    },
    {
      term: 'App Router',
      definition: 'New Next.js routing system using layouts, server components, templates.'
    }
  ]
};
