export const stateManagementExamples = [
  {
    id: "basic-useState",
    name: "Basic useState",
    description:
      "`useState` manages local state inside a single component and triggers re-render on update.",
    code: `import { useState } from "react";
  
  function Counter() {
    const [count, setCount] = useState(0);
  
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
    id: "lifting-state-up",
    name: "Lifting State Up",
    description:
      "When two sibling components need to share state, move the state up to their common parent and pass it via props.",
    code: `import { useState } from "react";
  
  function Parent() {
    const [value, setValue] = useState("");
  
    return (
      <>
        <Input value={value} onChange={setValue} />
        <Display value={value} />
      </>
    );
  }
  
  function Input({ value, onChange }) {
    return (
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    );
  }
  
  function Display({ value }) {
    return <p>Typed: {value}</p>;
  }`,
    usage: `const typed = "React";
  const result = typed;`,
    run: () => {
      return "React";
    },
  },
  {
    id: "derived-state",
    name: "Derived State",
    description:
      "Sometimes you can derive a value from props or other state instead of duplicating data.",
    code: `import { useState } from "react";
  
  function PriceCalculator({ basePrice = 10 }) {
    const [quantity, setQuantity] = useState(1);
    
    const total = basePrice * quantity;
  
    return (
      <div>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <p>Total: $ {total}</p>
      </div>
    );
  }`,
    usage: `const basePrice = 10;
  const quantity = 2;
  const total = basePrice * quantity;
  const result = total; // 20`,
    run: () => {
      const basePrice = 10;
      const quantity = 2;
      return basePrice * quantity;
    },
  },
  {
    id: "controlled-input",
    name: "Controlled Input",
    description:
      "Controlled components bind their input value to React state, ensuring the UI always reflects the latest state.",
    code: `import { useState } from "react";
  
  function ControlledForm() {
    const [name, setName] = useState("");
  
    return (
      <input value={name} onChange={(e) => setName(e.target.value)} />
    );
  }`,
    usage: `let name = "";
  const setName = (val) => { name = val; };
  setName("Alice");
  const result = name; // "Alice"`,
    run: () => {
      let name = "";
      const setName = (val) => (name = val);
      setName("Alice");
      return name;
    },
  },
];
