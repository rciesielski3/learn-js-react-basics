export const useRefExamples = [
  {
    id: "ref-dom",
    name: "Access DOM Element",
    description:
      "useRef can reference a DOM node directly and call focus or measure it.",
    code: `import { useRef, useEffect } from "react";
  
  function InputFocus() {
    const inputRef = useRef();
  
    useEffect(() => {
      inputRef.current?.focus();
    }, []);
  
    return <input ref={inputRef} />;
  }`,
    usage: `const result = "Input focused on mount";`,
    run: () => "Input focused on mount",
  },
  {
    id: "ref-store-value",
    name: "Store Previous Value",
    description:
      "useRef can hold a mutable value that persists across renders without causing re-renders.",
    code: `import { useRef, useEffect, useState } from "react";
  
  function PreviousCounter() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(0);
  
    useEffect(() => {
      prevCount.current = count;
    }, [count]);
  
    return (
      <>
        <p>Now: {count}, Before: {prevCount.current}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </>
    );
  }`,
    usage: `let prev = 0;
  let current = 1;
  const result = \`Before: \${prev}, Now: \${current}\`;`,
    run: () => "Before: 0, Now: 1",
  },
  {
    id: "ref-measure",
    name: "Measure DOM Size",
    description:
      "useRef combined with getBoundingClientRect allows measuring an element after render.",
    code: `import { useRef, useLayoutEffect, useState } from "react";
  
  function BoxMeasure() {
    const boxRef = useRef();
    const [width, setWidth] = useState(0);
  
    useLayoutEffect(() => {
      const rect = boxRef.current?.getBoundingClientRect();
      setWidth(rect?.width || 0);
    }, []);
  
    return (
      <div ref={boxRef} style={{ width: "100px" }}>
        Width: {width}px
      </div>
    );
  }`,
    usage: `const width = 100;
  const result = \`Width: \${width}px\`;`,
    run: () => "Width: 100px",
  },
];
