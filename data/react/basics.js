export const reactBasicsExamples = [
  {
    id: "jsx",
    name: "JSX Syntax",
    description:
      "JSX allows you to write HTML-like code within JavaScript. It gets compiled to React.createElement calls under the hood.",
    code: `const element = <h1>Hello, React!</h1>;`,
    usage: `const element = <h1>Hello, React!</h1>;
  const result = element.type; // "h1"`,
    run: () => {
      const element = <h1>Hello, React!</h1>;
      return element.type;
    },
  },
  {
    id: "component",
    name: "Function Component",
    description:
      "React components are JavaScript functions that return JSX. They're the building blocks of any React UI.",
    code: `function Welcome() {
    return <p>Welcome to React!</p>;
  }`,
    usage: `  function Welcome() {
    return <p>Welcome to React!</p>;
  }
  const element = Welcome();
  const result = element.type; // "p"`,
    run: () => {
      function Welcome() {
        return <p>Welcome to React!</p>;
      }
      return Welcome().type;
    },
  },
  {
    id: "props",
    name: "Props",
    description:
      "Props are arguments passed into components, allowing data to flow from parent to child components.",
    code: `function Greet(props) {
    return <h2>Hello, {props.name}!</h2>;
  }`,
    usage: `  const Greet = ({ name }) => <h2>Hello, {name}!</h2>;
  const element = Greet({ name: "Alice" });
  const result = element.props.children.join(" "); // "Hello, Alice!"`,
    run: () => {
      const Greet = ({ name }) => <h2>Hello, {name}!</h2>;
      const element = Greet({ name: "Alice" });
      return element.props.children.join(" ");
    },
  },
  {
    id: "useState",
    name: "useState",
    description:
      "`useState` is a React Hook that lets you add and manage local state in function components.",
    code: `import { useState } from "react";
  
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    );
  }`,
    usage: `  let count = 0;
  const setCount = (val) => { count = val; };
  setCount(count + 1);
  const result = count; // 1`,
    run: () => {
      let count = 0;
      const setCount = (val) => (count = val);
      setCount(count + 1);
      return count;
    },
  },
  {
    id: "useEffect",
    name: "useEffect",
    description:
      "`useEffect` is a React Hook used for side effects like data fetching, subscriptions, or manually changing the DOM.",
    code: `import { useEffect } from "react";
  
  useEffect(() => {
    console.log("Component mounted");
  }, []);`,
    usage: `  let message = "";
  const mockEffect = () => {
    message = "Component mounted";
  };
  mockEffect();
  const result = message;`,
    run: () => {
      let message = "";
      const mockEffect = () => {
        message = "Component mounted";
      };
      mockEffect();
      return message;
    },
  },
];
