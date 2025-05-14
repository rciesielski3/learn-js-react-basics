export const cachingExamples = [
  {
    id: 'ssg-cache',
    name: 'SSG with Static Cache',
    description: 'getStaticProps builds pages at build time and caches them as static HTML.',
    code: `export async function getStaticProps() {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    return { props: { data } };
  }`,
    usage: 'Generated once, cached until redeploy.',
    result: 'Build-time static HTML'
  },
  {
    id: 'isr-revalidate',
    name: 'ISR with Revalidate',
    description:
      'Rebuilds the page in the background after `revalidate` seconds while serving cached version.',
    code: `export async function getStaticProps() {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    return {
      props: { data },
      revalidate: 30
    };
  }`,
    usage: 'Updated every 30s in background',
    result: 'Stale-while-revalidate strategy'
  },
  {
    id: 'fetch-force-cache',
    name: 'Static `fetch()` with force-cache',
    description:
      "fetch uses cache by default. Explicitly force it with `{ cache: 'force-cache' }`.",
    code: `await fetch("...", { cache: "force-cache" });`,
    usage: 'Reuses same data across builds',
    result: 'Static response reused'
  },
  {
    id: 'fetch-no-store',
    name: 'Dynamic fetch with no-store',
    description: "Use `{ cache: 'no-store' }` to disable caching and fetch fresh data every time.",
    code: `await fetch("...", { cache: "no-store" });`,
    usage: 'Always fetch latest data',
    result: 'No caching'
  },
  {
    id: 'dynamic-routes-option',
    name: 'Dynamic Routes Config',
    description:
      "Set `dynamic = 'force-dynamic'` in `export const` to opt a route out of static optimization.",
    code: `export const dynamic = "force-dynamic";`,
    usage: 'Forces server render per request',
    result: 'SSR for that page'
  }
];
