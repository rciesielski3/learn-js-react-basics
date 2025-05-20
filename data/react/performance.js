export const performanceExamples = [
  {
    id: 'react-memo',
    name: 'React.memo',
    description: "Wraps a component to prevent unnecessary re-renders when props don't change.",
    code: `const Greeting = React.memo(function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
});

<Greeting name="Alice" />`,
    usage: 'Only re-renders if `name` changes',
    run: () => 'Rendered once unless prop changes'
  },
  {
    id: 'useMemo',
    name: 'useMemo',
    description: 'Caches expensive computations so they only re-run when dependencies change.',
    code: `const total = useMemo(() => expensiveCalc(), [input]);`,
    usage: 'Prevents recalculating on every render',
    run: () => 'Expensive value cached'
  },
  {
    id: 'useCallback',
    name: 'useCallback',
    description:
      'Memoizes a function so it’s not re-created unless dependencies change. Useful for stable props.',
    code: `const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);`,
    usage: 'Stable function reference',
    run: () => 'Callback only recreated if deps change'
  },
  {
    id: 'lazy-components',
    name: 'React.lazy',
    description: 'Split your app into smaller bundles by loading components only when needed.',
    code: `const LazyComp = React.lazy(() => import("./Comp"));
<Suspense fallback={<Loading />}><LazyComp /></Suspense>`,
    usage: 'Code is loaded only when used',
    run: () => 'Lazy-loaded with Suspense'
  },
  {
    id: 'batching',
    name: 'Batching State Updates',
    description:
      'React groups multiple `setState` calls into a single re-render for better performance.',
    code: `setCount(c => c + 1);
setName(n => n + "!");`,
    usage: 'Both updates in one render cycle',
    run: () => 'Batched into one re-render'
  }
];
