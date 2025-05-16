export const summaryComparison = [
  {
    feature: 'Rendering',
    react: 'Client-side only (CSR)',
    next: 'Supports SSR, SSG, ISR, CSR'
  },
  {
    feature: 'Routing',
    react: 'Manual via react-router or similar',
    next: 'File-based routing (pages/ or app/)'
  },
  {
    feature: 'Data Fetching',
    react: 'Client-side via fetch or libraries',
    next: 'Built-in getServerSideProps, getStaticProps, server actions'
  },
  {
    feature: 'Server Components',
    react: 'Not supported (only CSR)',
    next: 'Built-in support with App Router'
  },
  {
    feature: 'API Routes',
    react: 'Not included',
    next: 'Built-in /api routes'
  },
  {
    feature: 'SEO & Performance',
    react: 'Requires extra setup',
    next: 'Optimized out of the box (SSR + metadata)'
  },
  {
    feature: 'Optimization',
    react: 'Manual (tree shaking, code splitting)',
    next: 'Automatic optimization (image, font, scripts)'
  },
  {
    feature: 'Deployment',
    react: 'Static SPA, deploy with Netlify/Vercel',
    next: 'Full-stack ready, runs on Vercel/Node/Edge'
  },
  {
    feature: 'Learning Curve',
    react: 'Beginner friendly',
    next: 'More opinionated, but more features'
  }
];
