import { ExampleHookData } from "@/components/shared/types";

export const useStateData: ExampleHookData = {
  sampleSnippet: `import React from 'react';

export default function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}`,
  visualReprezentation: `Initial Render:
count = 0

Click "+1":
setCount(0 + 1) → count = 1
Re-render with count = 1`,
};
