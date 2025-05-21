'use client';

import React from 'react';

import { InfoBox, Tooltip } from '@/components/shared';

type Props = {
  log: (msg: string) => void;
};

export default function MemoVsCallback({ log }: Props) {
  const [count, setCount] = React.useState(0);
  const [otherState, setOtherState] = React.useState(0);

  const memoizedValue = React.useMemo(() => count * 2, [count]);

  const memoizedCallback = React.useCallback(() => {
    const result = count * 3;
    log(`[useCallback] Called with count ${count}: ${count} * 3 = ${result}`);
    return result;
  }, [count, log]);

  React.useEffect(() => {
    log(`[useMemo] Recomputed: ${count} * 2 = ${memoizedValue}`);
  }, [count, memoizedValue, log]);

  return (
    <InfoBox
      title="useMemo vs useCallback"
      description={`useMemo memoizes computed values; \nuseCallback memoizes function references.`}
      code={`useMemo(() => computeValue(), [deps]);
useCallback(() => handler(), [deps]);`}
    >
      <div className="flex gap-4">
        <div className="w-full sm:w-1/2 border border-yellow-400 rounded p-4">
          <p className="text-yellow-300 font-semibold">useMemo</p>
          <p className="text-white">Memoized Value (count × 2): {memoizedValue}</p>
        </div>
        <div className="w-full sm:w-1/2 border border-cyan-400 rounded p-4">
          <p className="text-cyan-300 font-semibold">useCallback</p>
          <p className="text-white text-sm">Call logs show memoized function usage</p>
          <p className="text-sm text-gray-400 mt-2">Unrelated State: {otherState}</p>
        </div>
      </div>

      <p className="text-base text-gray-400 py-2">🛠️ Try updating:</p>
      <div className="flex gap-2 flex-wrap mt-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
        >
          Increment Count
        </button>
        <button
          onClick={() => setOtherState((s) => s + 1)}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:scale-105"
        >
          Change Unrelated State
        </button>
        <button
          onClick={() => memoizedCallback()}
          className="px-3 py-1 bg-cyan-600 text-white rounded hover:scale-105"
        >
          Call useCallback
        </button>

        <Tooltip
          content={
            <div className="text-sm text-white max-w-xs">
              <ul className="list-disc list-inside ml-2">
                <li>
                  <b>useMemo</b> avoids recalculation unless deps change.
                </li>
                <li>
                  <b>useCallback</b> avoids function recreation unless deps change.
                </li>
              </ul>
            </div>
          }
          position="right"
        >
          <span className="text-gray-300 hover:text-white cursor-help text-lg">ℹ️</span>
        </Tooltip>
      </div>
    </InfoBox>
  );
}
