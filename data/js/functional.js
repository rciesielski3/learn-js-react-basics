export const functionalExamples = [
  {
    id: 'pure-function',
    name: 'Pure Function',
    description:
      'Pure functions always return the same output for the same input and cause no side effects.',
    code: `function add(a, b) {
  return a + b;
}`,
    usage: `add(2, 3) → 5`,
    run: () => {
      const add = (a, b) => a + b;
      return add(2, 3);
    }
  },
  {
    id: 'immutability',
    name: 'Immutability',
    description:
      'Functional programming prefers not to mutate data directly. Use spread/rest syntax to clone objects or arrays.',
    code: `const arr = [1, 2, 3];
const newArr = [...arr, 4];`,
    usage: `[1, 2, 3] → [1, 2, 3, 4]`,
    run: () => {
      const arr = [1, 2, 3];
      const newArr = [...arr, 4];
      return newArr.join(', ');
    }
  },
  {
    id: 'map-method',
    name: 'Array.map()',
    description:
      '`map()` transforms an array without mutating it. It returns a new array with each item transformed.',
    code: `const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);`,
    usage: `[1, 2, 3] → [2, 4, 6]`,
    run: () => [1, 2, 3].map((n) => n * 2).join(', ')
  },
  {
    id: 'filter-method',
    name: 'Array.filter()',
    description: '`filter()` returns a new array that only includes items passing a condition.',
    code: `const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);`,
    usage: `[1, 2, 3, 4] → [2, 4]`,
    run: () => [1, 2, 3, 4].filter((n) => n % 2 === 0).join(', ')
  },
  {
    id: 'reduce-method',
    name: 'Array.reduce()',
    description: '`reduce()` accumulates array values into a single result.',
    code: `const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, val) => acc + val, 0);`,
    usage: `[1, 2, 3, 4] → 10`,
    run: () => [1, 2, 3, 4].reduce((acc, val) => acc + val, 0)
  }
];
