"use client";

import React from "react";
import { InfoBox, Tooltip } from "@/components/shared";

type Props = {
  log: (msg: string) => void;
};

export default function RefVsMemo({ log }: Props) {
  const [trigger, setTrigger] = React.useState(0);

  const ref = React.useRef(Math.random().toFixed(3));

  const memo = React.useMemo(() => Math.random().toFixed(3), [trigger]);

  React.useEffect(() => {
    log(`[useMemo] Recomputed memo: ${memo}`);
  }, [memo, log]);

  return (
    <InfoBox
      title="useRef vs useMemo"
      description={`useRef stores a value that persists between renders; \nuseMemo recalculates a value only when dependencies change.`}
      code={`const ref = useRef(Math.random());
const memo = useMemo(() => Math.random(), [deps]);`}
    >
      <div className="flex gap-4">
        <div className="w-full sm:w-1/2 border border-purple-400 rounded p-4">
          <p className="text-purple-300 font-semibold">useRef (persistent)</p>
          <p className="text-white">Value: {ref.current}</p>
        </div>
        <div className="w-full sm:w-1/2 border border-yellow-400 rounded p-4">
          <p className="text-yellow-300 font-semibold">useMemo (dynamic)</p>
          <p className="text-white">Value: {memo}</p>
        </div>
      </div>

      <p className="text-base text-gray-400 py-2">
        🛠️ Force memo to recalculate:
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setTrigger((t) => t + 1)}
          className="px-3 py-1 bg-orange-600 text-white rounded hover:scale-105"
        >
          Recompute Memo
        </button>

        <Tooltip
          content={
            <div className="text-sm text-white max-w-xs">
              <ul className="list-disc list-inside ml-2">
                <li>
                  <b>useRef</b> keeps the same value throughout — even if the
                  component re-renders.
                </li>
                <li>
                  <b>useMemo</b> recalculates when dependencies change.
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
