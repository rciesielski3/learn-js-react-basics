"use client";

import React from "react";
import { InfoBox } from "@/components/shared";

type Props = {
  log: (msg: string) => void;
};

export default function RefVsState({ log }: Props) {
  const refValue = React.useRef(0);
  const [stateValue, setStateValue] = React.useState(0);

  const [pendingStateLog, setPendingStateLog] = React.useState<string | null>(
    null
  );
  const [pendingRefLog, setPendingRefLog] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (pendingStateLog) {
      log(pendingStateLog);
      setPendingStateLog(null);
    }
  }, [stateValue, pendingStateLog, log]);

  React.useEffect(() => {
    if (pendingRefLog) {
      log(pendingRefLog);
      setPendingRefLog(null);
    }
  }, [pendingRefLog, log]);

  return (
    <InfoBox
      title="useRef vs useState"
      description="useRef persists a mutable value without causing re-renders, unlike useState."
      code={`const ref = useRef(0);
ref.current++;

const [state, setState] = useState(0);`}
    >
      <span className="text-sm font-medium text-gray-400">Output:</span>
      <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
        <code className="block">useRef (no re-render): {refValue.current}</code>
        <code>useState: {stateValue}</code>
      </pre>
      <p className="text-base text-gray-400 py-2">🛠️ Try updating both:</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => {
            refValue.current += 1;
            setPendingRefLog(`[useRef] refValue.current = ${refValue.current}`);
          }}
          className="px-3 py-1 bg-purple-600 text-white rounded hover:scale-105"
        >
          Update Ref
        </button>
        <button
          onClick={() => {
            setStateValue((s) => s + 1);
            setPendingStateLog(`[useState] setStateValue -> ${stateValue + 1}`);
          }}
          className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
        >
          Update State
        </button>
      </div>
    </InfoBox>
  );
}
