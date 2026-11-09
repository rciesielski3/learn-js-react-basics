'use client';

import React from 'react';

import { ExampleBlock } from '@/components/shared';
import { hookData } from '@/data/react/hooks';

export function CallbackDemo() {
  const [count, setCount] = React.useState(0);

  const { sampleSnippet, visualReprezentation } = hookData.useCallback;

  const callback = React.useCallback(() => {
    alert(`Callback fired! Current count: ${count}`);
  }, [count]);

  return (
    <>
      <ExampleBlock
        id="callback"
        name="useCallback"
        description="Returns a memoized version of the callback that only changes if dependencies do."
        code={`const memoized = useCallback(() => doSomething(), [deps]);`}
        usage={`Useful when passing callbacks to child components\nPrevents unnecessary re-renders when props remain unchanged`}
        result={`Current count: ${count}`}
        sampleSnippet={sampleSnippet}
        visualReprezentation={visualReprezentation}
      />
      <div className="px-6 pb-2 -mt-3">
        <p className="text-sm text-jt-muted mb-2">
          🧠 Update the state or fire the callback to see changes:
        </p>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-3 py-1 rounded-xl border border-green-400/50 bg-green-500/15 text-green-200 font-medium transition hover:bg-green-500/25 hover:scale-105"
          >
            Count +1
          </button>
          <button
            onClick={callback}
            className="px-3 py-1 rounded-xl border border-blue-400/50 bg-blue-500/15 text-sky-200 font-medium transition hover:bg-blue-500/25 hover:scale-105"
          >
            Fire Callback
          </button>
        </div>
      </div>
    </>
  );
}
