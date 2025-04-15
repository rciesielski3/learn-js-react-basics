import { ExampleHookData } from "@/components/shared/types";

export const useReducerData: ExampleHookData = {
  sampleSnippet: `import React from 'react';
  
  function reducer(state, action) {
    switch (action.type) {
      case 'increment': return { count: state.count + 1 };
      case 'decrement': return { count: state.count - 1 };
      default: return state;
    }
  }
  
  export default function Counter() {
    const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  
    return (
      <>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      </>
    );
  }`,
  visualReprezentation: `Initial state: { count: 0 }
  
  Dispatch "increment":
  ➡ reducer called with { count: 0 }, action: 'increment'
  ➡ returns new state: { count: 1 }
  ➡ component re-renders`,
};
