import { ExampleHookData } from "@/components/shared/types";

export const useMemoData: ExampleHookData = {
  sampleSnippet: `import React from 'react';
  
  function ExpensiveCalc(num) {
    console.log("Calculating...");
    return num * 2;
  }
  
  export default function MemoExample() {
    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState(1);
  
    const result = React.useMemo(() => ExpensiveCalc(value), [value]);
  
    return (
      <>
        <p>Result: {result}</p>
        <button onClick={() => setCount(count + 1)}>Re-render</button>
      </>
    );
  }`,
  visualReprezentation: `Initial Render:
  - useMemo runs → ExpensiveCalc(1) = 2
  
  Click "Re-render":
  - count updates
  - value unchanged
  ➡ useMemo skips calculation
  
  Click logic changes 'value':
  - useMemo recomputes`,
};
