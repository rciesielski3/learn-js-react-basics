// components/hooks/CallbackDemo.tsx
"use client";

import React, { useCallback, useState } from "react";
import { ExampleBlock } from "../shared/ExampleBlock";

export function CallbackDemo() {
  const [count, setCount] = useState(0);

  const callback = useCallback(() => {
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
      />
      <div className="px-6 pb-2 -mt-3">
        <p className="text-sm text-gray-400 mb-2">
          🧠 Update the state or fire the callback to see changes:
        </p>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105 transition-transform"
          >
            Count +1
          </button>
          <button
            onClick={callback}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:scale-105 transition-transform"
          >
            Fire Callback
          </button>
        </div>
      </div>
    </>
  );
}
