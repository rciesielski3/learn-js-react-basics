export const exampleData = {
  useState: {
    sampleSnippet: `import React, { useState } from 'react';
  
  export default function SimpleCounter() {
    const [count, setCount] = useState(0);
  
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);
  
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }`,
    visualReprezentation: `Initial Render:
  ---------------
  count = 0
  
  Click "+1":
  -----------
  setCount(0 + 1) → count = 1
  
  Click "-1":
  -----------
  setCount(1 - 1) → count = 0
  
  Click "Reset":
  --------------
  setCount(0) → count = 0`,
  },
};
