export const renderingExamples = [
  {
    id: 'csr',
    name: 'Client-Side Rendering (CSR)',
    description:
      'Page is rendered fully in the browser. Initial HTML is empty or minimal, JS loads the UI after hydration.',
    code: `function Page() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("/api/data").then(res => res.json()).then(setData);
    }, []);
  
    return <div>{data ? data.message : "Loading..."}</div>;
  }`,
    usage: `JS loads the content after DOM is ready.`,
    result: 'Rendered fully on the client after mount'
  },
  {
    id: 'ssr',
    name: 'Server-Side Rendering (SSR)',
    description:
      'Next.js fetches data on the server for each request, then sends a fully rendered HTML page.',
    code: `export async function getServerSideProps() {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    return { props: { data } };
  }
  
  function Page({ data }) {
    return <div>{data.message}</div>;
  }`,
    usage: `HTML is pre-rendered with data from the server.`,
    result: 'Rendered on server at request time'
  },
  {
    id: 'ssg',
    name: 'Static Site Generation (SSG)',
    description: 'Page is rendered at build time and served as static HTML. Fast and cacheable.',
    code: `export async function getStaticProps() {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    return { props: { data } };
  }
  
  function Page({ data }) {
    return <div>{data.message}</div>;
  }`,
    usage: `Built once, served many times.`,
    result: 'Rendered at build time'
  },
  {
    id: 'isr',
    name: 'Incremental Static Regeneration (ISR)',
    description:
      'Like SSG, but updates in the background using `revalidate`. Hybrid between static & dynamic.',
    code: `export async function getStaticProps() {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    return {
      props: { data },
      revalidate: 60 // seconds
    };
  }`,
    usage: `Updated after deployment, without rebuilding.`,
    result: 'Static with background updates'
  },
  {
    id: 'hydration',
    name: 'Hydration',
    description:
      'After SSR or SSG, React runs on the client to make the static HTML interactive by attaching event handlers.',
    code: `function Page() {
    const [clicked, setClicked] = useState(false);
    return <button onClick={() => setClicked(true)}>{clicked ? "Clicked" : "Click me"}</button>;
  }`,
    usage: `SSR/SSG sends static HTML, then hydration attaches interactivity.`,
    result: 'UI becomes interactive after hydration'
  }
];
