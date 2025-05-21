import { ExampleHookData } from "@/components/shared/types";

export const useCallbackData: ExampleHookData = {
  sampleSnippet: `import React from 'react';
  
  function Button({ onClick }) {
    return <button onClick={onClick}>Click Me</button>;
  }
  
  export default function CallbackExample() {
    const [count, setCount] = React.useState(0);
  
    const handleClick = React.useCallback(() => {
      setCount((c) => c + 1);
    }, []);
  
    return (
      <>
        <p>Clicked {count} times</p>
        <Button onClick={handleClick} />
      </>
    );
  }`,
  visualReprezentation: `Initial Render:
  ➡ handleClick = memoized function
  
  Click "Click Me":
  ➡ handleClick runs → setCount(prev + 1)
  
  Component re-renders
  ✅ handleClick reference stays the same`,
};
