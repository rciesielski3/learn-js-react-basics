export const nextOverviewTopics = [
  {
    id: 'react-vs-next',
    title: 'React vs Next.js',
    description:
      'React is a library for building UIs. Next.js is a framework that extends React with server-side rendering, routing, and full-stack features.'
  },
  {
    id: 'rendering',
    title: 'Client vs Server Rendering',
    description:
      'Next.js supports multiple rendering strategies: Client-side (CSR), Server-side (SSR), Static Generation (SSG), and Incremental Static Regeneration (ISR).'
  },
  {
    id: 'hydration',
    title: 'Hydration',
    description:
      'After SSR or SSG, the HTML is interactive thanks to hydration — React attaches event listeners to server-rendered markup.'
  },
  {
    id: 'caching',
    title: 'Built-in Caching',
    description:
      'Next.js caches statically rendered pages and supports smart invalidation and revalidation for performance and freshness.'
  },
  {
    id: 'architecture',
    title: 'File-based Architecture',
    description:
      'Next.js uses a file-based routing system, with separate directories for `app/`, `pages/`, and dynamic routes.'
  },
  {
    id: 'routing',
    title: 'App Router vs Pages Router',
    description:
      '`Pages Router` uses traditional React routing (with `pages/`). `App Router` enables server components, layouts, loading states, and advanced nesting (with `app/`).'
  },
  {
    id: 'server-components',
    title: 'Server Components',
    description:
      'React Server Components (RSC) let you render parts of your UI on the server without sending extra JavaScript to the client.'
  },
  {
    id: 'server-actions',
    title: 'Server Actions',
    description:
      'Server Actions let you mutate data directly from forms or buttons without client APIs. This enables full-stack UI patterns.'
  },
  {
    id: 'optimization',
    title: 'Built-in Optimization',
    description:
      'Next.js includes automatic image optimization, script loading strategies, streaming, and performance-enhancing defaults.'
  }
];
