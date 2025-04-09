"use client";

import React from "react";
import { InfoBox } from "@/components/shared";

type Props = {
  log: (msg: string) => void;
};

export default function StateVsReducer({ log }: Props) {
  const [stateValue, setStateValue] = React.useState(0);
  const [pendingStateLog, setPendingStateLog] = React.useState<string | null>(
    null
  );

  const reducer = (state: number, action: { type: "inc" | "dec" }) =>
    action.type === "inc" ? state + 1 : state - 1;

  const [reducerValue, dispatch] = React.useReducer(reducer, 0);
  const [pendingReducerLog, setPendingReducerLog] = React.useState<
    string | null
  >(null);

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
      description="Both manage state, but useReducer is preferred for more complex logic or multiple sub-values."
      code={`const [value, setValue] = useState(0);
const [value, dispatch] = useReducer(reducer, 0);`}
    >
      <span className="text-sm font-medium text-gray-400">Output:</span>
      <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
        <code className="block">useState: {stateValue}</code>
        <code>useReducer: {reducerValue}</code>
      </pre>
      <p className="text-base text-gray-400 py-2">
        🛠️ Interact with the buttons below:
      </p>
      <div className="flex gap-2 flex-wrap mt-2">
        <button
          onClick={() => {
            setStateValue((v) => v - 1);
            setPendingStateLog(`[useState] setStateValue -> ${stateValue - 1}`);
          }}
          className="px-3 py-1 bg-red-600 text-white rounded hover:scale-105"
        >
          State -1
        </button>
        <button
          onClick={() => {
            setStateValue((v) => v + 1);
            setPendingStateLog(`[useState] setStateValue -> ${stateValue + 1}`);
          }}
          className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
        >
          State +1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "dec" });
            setPendingReducerLog(`[useReducer] dispatch({ type: "dec" })`);
          }}
          className="px-3 py-1 bg-red-600 text-white rounded hover:scale-105"
        >
          Reducer -1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "inc" });
            setPendingReducerLog(`[useReducer] dispatch({ type: "inc" })`);
          }}
          className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
        >
          Reducer +1
        </button>
      </div>
    </InfoBox>
  );
}
