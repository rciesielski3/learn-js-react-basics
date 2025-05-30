export const reconciliationExamples = [
  {
    id: 'no-key-warning',
    name: 'List Without Key',
    description: 'Rendering a list without `key` causes React to warn and misidentify items.',
    code: `function ListWithoutKey({ items }) {
  return items.map(item => <li>{item}</li>);
}`,
    usage: `<ListWithoutKey items={['a', 'b', 'c']} />`,
    run: () => "⚠️ Warning: Each child in a list should have a unique 'key'"
  },
  {
    id: 'with-key',
    name: 'List With Key',
    description: 'Using a stable key lets React match and update list items efficiently.',
    code: `function ListWithKey({ items }) {
  return items.map(item => <li key={item}>{item}</li>);
}`,
    usage: `<ListWithKey items={['a', 'b', 'c']} />`,
    run: () => '✅ List items rendered efficiently with correct keys'
  },
  {
    id: 'index-key-pitfall',
    name: 'Index as Key Pitfall',
    description: 'Using array index as key can break expected behavior when items are reordered.',
    code: `function List({ items }) {
  return items.map((item, index) => <li key={index}>{item}</li>);
}`,
    usage: `<List items={['x', 'y', 'z']} />`,
    run: () => '⚠️ Index-based keys cause subtle bugs during reordering'
  }
];
