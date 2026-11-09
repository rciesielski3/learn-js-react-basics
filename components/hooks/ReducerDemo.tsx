'use client';

import React from 'react';

import { ExampleBlock } from '@/components/shared';
import { hookData } from '@/data/react/hooks';

const reducer = (state: number, action: { type: 'inc' | 'dec' }) => {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    default:
      return state;
  }
};

export function ReducerDemo() {
  const [count, dispatch] = React.useReducer(reducer, 0);

  const { sampleSnippet, visualReprezentation } = hookData.useReducer;

  return (
    <>
      <ExampleBlock
        id="reducer"
        name="useReducer"
        description="Manages more complex state logic with dispatchable actions."
        code={`const [state, dispatch] = useReducer(reducer, initialState);`}
        usage={`Great for toggles, counters, or managing logic-heavy state updates\nDispatch actions like: dispatch({ type: 'inc' })`}
        result={`Reducer count: ${count}`}
        sampleSnippet={sampleSnippet}
        visualReprezentation={visualReprezentation}
      />
      <div className="px-6 pb-2 -mt-3">
        <p className="text-base text-jt-muted mb-2">
          🛠️ Dispatch increment or decrement actions below:
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch({ type: 'dec' })}
            className="px-3 py-1 rounded-xl border border-red-400/50 bg-red-500/15 text-red-200 font-medium transition hover:bg-red-500/25 hover:scale-105"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: 'inc' })}
            className="px-3 py-1 rounded-xl border border-green-400/50 bg-green-500/15 text-green-200 font-medium transition hover:bg-green-500/25 hover:scale-105"
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}
