import { ExampleHookData } from "@/components/shared/types";

export const useTransitionData: ExampleHookData = {
  sampleSnippet: `import React from 'react';
  
  export default function TransitionExample() {
    const [input, setInput] = React.useState('');
    const [list, setList] = React.useState([]);
    const [isPending, startTransition] = React.useTransition();
  
    const handleChange = (e) => {
      const value = e.target.value;
      setInput(value);
      startTransition(() => {
        const newList = Array(20000).fill(value);
        setList(newList);
      });
    };
  
    return (
      <>
        <input type="text" onChange={handleChange} />
        {isPending && <p>Loading...</p>}
        <ul>{list.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </>
    );
  }`,
  visualReprezentation: `User types:
  ➡ input updates immediately via setInput
  
  startTransition(() => {...}):
  ➡ setList runs in low-priority batch
  ➡ isPending = true during transition
  
  After update:
  ➡ isPending = false
  ➡ list is rendered`,
};
