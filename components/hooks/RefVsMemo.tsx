"use client";

import React from "react";

import { InfoBox, Tooltip } from "@/components/shared";

type Props = {
  log: (msg: string) => void;
};

export default function RefVsMemo({ log }: Props) {
  const [trigger, setTrigger] = React.useState(0);

  const ref = React.useRef(Math.random().toFixed(3));

  // trigger is intentionally not read in the callback: bumping it forces a recompute.
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="w-full sm:w-1/2 border border-purple-400/50 rounded p-4">
          <p className="text-purple-200 font-semibold">useRef (persistent)</p>
          <p className="text-jt-ink">Value: {ref.current}</p>
        </div>
        <div className="w-full sm:w-1/2 border border-yellow-400/50 rounded p-4">
          <p className="text-yellow-200 font-semibold">useMemo (dynamic)</p>
          <p className="text-jt-ink">Value: {memo}</p>
        </div>
      </div>

      <p className="text-base text-jt-muted py-2">
        🛠️ Force memo to recalculate:
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setTrigger((t) => t + 1)}
          className="px-3 py-1 rounded-xl border border-orange-400/50 bg-orange-500/15 text-orange-200 font-medium transition hover:bg-orange-500/25 hover:scale-105"
        >
          Recompute Memo
        </button>

        <Tooltip
          content={
            <div className="text-sm text-jt-ink max-w-xs">
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
          <span className="text-jt-muted hover:text-jt-ink cursor-help text-lg">
            ℹ️
          </span>
        </Tooltip>
      </div>
    </InfoBox>
  );
}
