export const fileExamples = [
  {
    title: '.js – JavaScript File',
    description:
      "A standard JavaScript file. Doesn't support JSX or TypeScript types. Used for general scripting.",
    code: `function greet(name) {
  return "Hello " + name;
}

console.log(greet("World"));`
  },
  {
    title: '.jsx – JavaScript with JSX',
    description:
      'Allows writing JavaScript that returns JSX syntax. Common in React apps before TypeScript adoption.',
    code: `function Hello() {
  return <h1>Hello, JSX</h1>;
}

export default Hello;`
  },
  {
    title: '.ts – TypeScript File',
    description: 'Used for general TypeScript code. No JSX allowed. Includes static type checking.',
    code: `function greet(name: string): string {
  return "Hello " + name;
}

console.log(greet("TypeScript"));`
  },
  {
    title: '.tsx – TypeScript with JSX',
    description:
      'Supports both JSX and TypeScript syntax. Ideal for React components with type safety.',
    code: `type Props = { name: string };

function Hello({ name }: Props) {
  return <h1>Hello, {name}</h1>;
}

export default Hello;`
  }
];

export const fileComparison = [
  {
    ext: '.js',
    jsxSupport: 'No',
    typeCheck: 'No',
    useCase: 'Plain JavaScript'
  },
  {
    ext: '.jsx',
    jsxSupport: 'Yes',
    typeCheck: 'No',
    useCase: 'React with JS'
  },
  {
    ext: '.ts',
    jsxSupport: 'No',
    typeCheck: 'Yes',
    useCase: 'TypeScript without JSX'
  },
  {
    ext: '.tsx',
    jsxSupport: 'Yes',
    typeCheck: 'Yes',
    useCase: 'React with TypeScript'
  }
];
