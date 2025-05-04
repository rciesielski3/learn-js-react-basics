export const contextManagementExamples = [
  {
    id: "basic-context",
    name: "Basic Context Setup",
    description:
      "Create a Context, a Provider, and use it inside nested components.",
    code: `import { createContext, useContext } from "react";
  
  // Create context
  const MyContext = createContext();
  
  // Provide context
  function Provider({ children }) {
    return (
      <MyContext.Provider value="Hello from Context">
        {children}
      </MyContext.Provider>
    );
  }
  
  // Consume context
  function Consumer() {
    const value = useContext(MyContext);
    return <p>{value}</p>;
  }`,
    usage: `const value = "Hello from Context";`,
    run: () => {
      return "Hello from Context";
    },
  },
  {
    id: "context-with-state",
    name: "Context with State",
    description:
      "Context can store not only static values but also dynamic state like counters.",
    code: `import { createContext, useContext, useState } from "react";
  
  // Create context
  const CounterContext = createContext();
  
  // Provide context
  function CounterProvider({ children }) {
    const [count, setCount] = useState(0);
  
    return (
      <CounterContext.Provider value={{ count, setCount }}>
        {children}
      </CounterContext.Provider>
    );
  }
  
  // Consume context
  function CounterDisplay() {
    const { count, setCount } = useContext(CounterContext);
  
    return (
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    );
  }`,
    usage: `let count = 0;
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
    id: "nested-context",
    name: "Nested Contexts",
    description:
      "Multiple contexts can be nested. Each provides its own isolated data.",
    code: `import { createContext, useContext } from "react";
  
  const ThemeContext = createContext();
  const UserContext = createContext();
  
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <UserContext.Provider value="Alice">
          <Profile />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
  
  function Profile() {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
  
    return (
      <div className={theme}>
        Hello, {user}!
      </div>
    );
  }`,
    usage: `const theme = "dark";
  const user = "Alice";
  const result = \`\${theme} - \${user}\`; // "dark - Alice"`,
    run: () => {
      const theme = "dark";
      const user = "Alice";
      return `${theme} - ${user}`;
    },
  },
];
