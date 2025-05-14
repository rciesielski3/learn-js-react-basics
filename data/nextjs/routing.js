export const routingExamples = [
  {
    id: 'pages-router',
    name: 'Pages Router',
    description:
      'The original Next.js routing system uses the `/pages` directory. Each `.js` file becomes a route.',
    code: `// pages/about.js
  export default function About() {
    return <h1>About Page</h1>;
  }`,
    usage: `Visit /about in browser`,
    result: 'URL: /about → renders pages/about.js'
  },
  {
    id: 'app-router',
    name: 'App Router',
    description:
      'The new routing system uses the `/app` directory and supports layouts, loading UI, templates, and server components.',
    code: `// app/about/page.tsx
  export default function AboutPage() {
    return <h1>About Page (App Router)</h1>;
  }`,
    usage: `Visit /about`,
    result: 'URL: /about → renders app/about/page.tsx'
  },
  {
    id: 'nested-layouts',
    name: 'Nested Layouts (App Router)',
    description:
      'Layouts in App Router persist between nested routes. Great for dashboard UIs and sidebars.',
    code: `// app/dashboard/layout.tsx
  export default function Layout({ children }) {
    return (
      <>
        <Sidebar />
        <main>{children}</main>
      </>
    );
  }
  
  // app/dashboard/settings/page.tsx
  export default function Settings() {
    return <h2>Settings Page</h2>;
  }`,
    usage: `Shared layout for all dashboard routes`,
    result: 'Sidebar persists across nested routes'
  },
  {
    id: 'dynamic-routing',
    name: 'Dynamic Routes',
    description: 'Next.js supports dynamic routes via brackets in both routers.',
    code: `// Pages Router: pages/user/[id].js
  // App Router: app/user/[id]/page.tsx`,
    usage: `Visit /user/123`,
    result: 'Extracts id = 123'
  },
  {
    id: 'catch-all',
    name: 'Catch-All Routes',
    description: 'Use `[...slug]` to match any number of nested segments (e.g., docs/a/b/c).',
    code: `// app/docs/[...slug]/page.tsx`,
    usage: `Matches /docs/a/b/c`,
    result: "slug = ['a', 'b', 'c']"
  }
];
