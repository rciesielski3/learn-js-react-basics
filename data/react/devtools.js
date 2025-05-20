export const devtoolsTips = [
  {
    id: 'install',
    name: 'Install React DevTools',
    description:
      'Install React Developer Tools as a browser extension (Chrome, Firefox). Required to inspect components in dev mode.',
    code: `https://react.dev/learn/debugging-with-react-devtools`,
    usage: 'Open browser devtools → React tab',
    result: 'Inspect component tree & props'
  },
  {
    id: 'inspect-state',
    name: 'Inspect Props and State',
    description:
      'Click a component in the DevTools tree to view its current props, state, and context.',
    code: `function Counter() {
  const [count, setCount] = useState(0);
  return <p>{count}</p>;
}`,
    usage: 'State shows `count = 0` in DevTools',
    result: 'Live state inspection'
  },
  {
    id: 'component-tree',
    name: 'Component Tree',
    description:
      'Visualize the structure of all rendered components, including custom and built-in ones.',
    code: `<App><Header /><Main /><Footer /></App>`,
    usage: 'Tree shows App → Header/Main/Footer',
    result: 'Tree view of your app'
  },
  {
    id: 'highlight-renders',
    name: 'Highlight Re-renders',
    description:
      'In DevTools settings → highlight updates to see which components re-render when state/props change.',
    code: `useState / setState`,
    usage: 'Flash border when re-rendering',
    result: 'Detect unnecessary updates'
  },
  {
    id: 'profiler',
    name: 'React Profiler',
    description:
      'Profiler tab shows how long components take to render and helps identify slow updates.',
    code: `Start recording → Interact → Stop recording`,
    usage: 'Check flamegraph and timings',
    result: 'Identify render bottlenecks'
  }
];
