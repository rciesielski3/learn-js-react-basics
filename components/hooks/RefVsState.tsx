"use client";

import React from "react";

import { InfoBox, Tooltip } from "@/components/shared";

type Props = {
  log: (msg: string) => void;
};

export default function RefVsState({ log }: Props) {
  const refValue = React.useRef(0);
  const [stateValue, setStateValue] = React.useState(0);

  const [pendingRefLog, setPendingRefLog] = React.useState<string | null>(null);
  const [pendingStateLog, setPendingStateLog] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    if (pendingRefLog) {
      log(pendingRefLog);
      setPendingRefLog(null);
    }
  }, [pendingRefLog, log]);

  React.useEffect(() => {
    if (pendingStateLog) {
      log(pendingStateLog);
      setPendingStateLog(null);
    }
  }, [stateValue, pendingStateLog, log]);

  return (
    <InfoBox
      title="useRef vs useState"
      description="See how useRef can persist values across renders without triggering rerenders, unlike useState."
      code={`const ref = useRef(0); ref.current++;
const [state, setState] = useState(0);`}
    >
      <div className="flex gap-4">
        <div className="w-full sm:w-1/2 border border-purple-400 rounded p-4">
          <p className="text-purple-300 font-semibold">useRef (no re-render)</p>
          <p className="text-white">Value: {refValue.current}</p>
        </div>
        <div className="w-full sm:w-1/2 border border-green-400 rounded p-4">
          <p className="text-green-300 font-semibold">useState</p>
          <p className="text-white">Value: {stateValue}</p>
        </div>
      </div>

      <p className="text-base text-gray-400 py-2">🛠️ Interact below:</p>
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

        <Tooltip
          content={
            <div className="text-sm text-white max-w-xs">
              <ul className="list-disc list-inside ml-2">
                <li>
                  <b>useRef</b> keeps values stable but doesn’t re-render.
                </li>
                <li>
                  <b>useState</b> causes re-renders on every update.
                </li>
              </ul>
            </div>
          }
          position="right"
        >
          <span className="text-gray-300 hover:text-white cursor-help text-lg">
            ℹ️
          </span>
        </Tooltip>
      </div>
    </InfoBox>
  );
}
