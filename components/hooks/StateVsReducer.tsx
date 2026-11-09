'use client';

import React from 'react';

import { InfoBox, Tooltip } from '@/components/shared';

type Props = {
  log: (msg: string) => void;
};

export default function StateVsReducer({ log }: Props) {
  const [stateValue, setStateValue] = React.useState(0);
  const [reducerValue, dispatch] = React.useReducer(
    (state: number, action: { type: 'inc' | 'dec' }) =>
      action.type === 'inc' ? state + 1 : state - 1,
    0
  );

  const [pendingStateLog, setPendingStateLog] = React.useState<string | null>(null);
  const [pendingReducerLog, setPendingReducerLog] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (pendingStateLog) {
      log(pendingStateLog);
      setPendingStateLog(null);
    }
  }, [stateValue, pendingStateLog, log]);

  React.useEffect(() => {
    if (pendingReducerLog) {
      log(pendingReducerLog);
      setPendingReducerLog(null);
    }
  }, [reducerValue, pendingReducerLog, log]);

  return (
    <InfoBox
      title="useState vs useReducer"
      description={`Compare basic state updates with reducer-based state management. \nObserve the difference in usage and logic structure.`}
      code={`const [value, setValue] = useState(0);
const [value, dispatch] = useReducer(reducer, 0);`}
    >
      <div className="flex gap-4">
        <div className="w-full sm:w-1/2 border border-green-400/50 rounded p-4">
          <p className="text-green-200 font-semibold">useState</p>
          <p className="text-jt-ink">Value: {stateValue}</p>
        </div>
        <div className="w-full sm:w-1/2 border border-indigo-400/50 rounded p-4">
          <p className="text-indigo-200 font-semibold">useReducer</p>
          <p className="text-jt-ink">Value: {reducerValue}</p>
        </div>
      </div>

      <p className="text-base text-jt-muted py-2">🛠️ Update values:</p>
      <div className="flex gap-2 flex-wrap mt-2">
        <button
          onClick={() => {
            setStateValue((v) => v - 1);
            setPendingStateLog(`[useState] setStateValue -> ${stateValue - 1}`);
          }}
          className="px-3 py-1 rounded-xl border border-red-400/50 bg-red-500/15 text-red-200 font-medium transition hover:bg-red-500/25 hover:scale-105"
        >
          State -1
        </button>
        <button
          onClick={() => {
            setStateValue((v) => v + 1);
            setPendingStateLog(`[useState] setStateValue -> ${stateValue + 1}`);
          }}
          className="px-3 py-1 rounded-xl border border-green-400/50 bg-green-500/15 text-green-200 font-medium transition hover:bg-green-500/25 hover:scale-105"
        >
          State +1
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'dec' });
            setPendingReducerLog(`[useReducer] dispatch({ type: "dec" })`);
          }}
          className="px-3 py-1 rounded-xl border border-red-400/50 bg-red-500/15 text-red-200 font-medium transition hover:bg-red-500/25 hover:scale-105"
        >
          Reducer -1
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'inc' });
            setPendingReducerLog(`[useReducer] dispatch({ type: "inc" })`);
          }}
          className="px-3 py-1 rounded-xl border border-green-400/50 bg-green-500/15 text-green-200 font-medium transition hover:bg-green-500/25 hover:scale-105"
        >
          Reducer +1
        </button>

        <Tooltip
          content={
            <div className="text-sm text-jt-ink max-w-xs">
              <ul className="list-disc list-inside ml-2">
                <li>
                  <b>useState</b> is simpler and great for isolated values.
                </li>
                <li>
                  <b>useReducer</b> is better for complex or interrelated state logic.
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
