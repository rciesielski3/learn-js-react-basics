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
        <div className="w-full sm:w-1/2 border border-yellow-400/50 rounded p-4">
          <p className="text-yellow-200 font-semibold">useMemo</p>
          <p className="text-jt-ink">Memoized Value (count × 2): {memoizedValue}</p>
        </div>
        <div className="w-full sm:w-1/2 border border-cyan-400/50 rounded p-4">
          <p className="text-cyan-200 font-semibold">useCallback</p>
          <p className="text-jt-ink text-sm">Call logs show memoized function usage</p>
          <p className="text-sm text-jt-muted mt-2">Unrelated State: {otherState}</p>
        </div>
      </div>

      <p className="text-base text-jt-muted py-2">🛠️ Try updating:</p>
      <div className="flex gap-2 flex-wrap mt-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 rounded-xl border border-green-400/50 bg-green-500/15 text-green-200 font-medium transition hover:bg-green-500/25 hover:scale-105"
        >
          Increment Count
        </button>
        <button
          onClick={() => setOtherState((s) => s + 1)}
          className="px-3 py-1 rounded-xl border border-blue-400/50 bg-blue-500/15 text-sky-200 font-medium transition hover:bg-blue-500/25 hover:scale-105"
        >
          Change Unrelated State
        </button>
        <button
          onClick={() => memoizedCallback()}
          className="px-3 py-1 rounded-xl border border-cyan-400/50 bg-cyan-500/15 text-cyan-200 font-medium transition hover:bg-cyan-500/25 hover:scale-105"
        >
          Call useCallback
        </button>

        <Tooltip
          content={
            <div className="text-sm text-jt-ink max-w-xs">
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
          <span className="text-jt-muted hover:text-jt-ink cursor-help text-lg">ℹ️</span>
        </Tooltip>
      </div>
    </InfoBox>
  );
}
