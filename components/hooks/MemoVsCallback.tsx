"use client";

import React from "react";
import { InfoBox } from "@/components/shared";

type Props = {
  log: (msg: string) => void;
};

export default function MemoVsCallback({ log }: Props) {
  const [count, setCount] = React.useState(0);
  const [other, setOther] = React.useState(0);

  const memoizedValue = React.useMemo(() => {
    log(`[useMemo] Recalculating value for count: ${count}`);
    return count * 2;
  }, [count]);

  const memoizedCallback = React.useCallback(() => {
    log(`[useCallback] Memoized function called with count: ${count}`);
    return count * 3;
  }, [count]);

  return (
    <InfoBox
      title="useMemo vs useCallback"
      description="useMemo memoizes a value; useCallback memoizes a function."
      code={`useMemo(() => expensiveCalculation(), [deps]);
useCallback(() => handler(), [deps]);`}
    >
      <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
        <code>Memoized Value (count * 2): {memoizedValue}</code>
      </pre>

      <p className="text-base text-gray-400 py-2">
        🛠️ Update the count or call the callback:
      </p>
      <div className="flex gap-2 flex-wrap mt-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
        >
          Increment Count
        </button>
        <button
          onClick={() => setOther((o) => o + 1)}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:scale-105"
        >
          Change Unrelated State
        </button>
        <button
          onClick={() => {
            const result = memoizedCallback();
            log(`[useCallback] Result: ${result}`);
          }}
          className="px-3 py-1 bg-purple-600 text-white rounded hover:scale-105"
        >
          Call Memoized Callback
        </button>
      </div>
    </InfoBox>
  );
}
