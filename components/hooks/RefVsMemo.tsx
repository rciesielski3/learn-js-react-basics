"use client";

import React from "react";
import { InfoBox } from "@/components/shared";

type Props = {
  log: (msg: string) => void;
};

export default function RefVsMemo({ log }: Props) {
  const [trigger, setTrigger] = React.useState(0);
  const ref = React.useRef(Math.random());
  const memo = React.useMemo(() => {
    const val = Math.random();
    log(`[useMemo] Generated value: ${val}`);
    return val;
  }, [trigger]);

  return (
    <InfoBox
      title="useRef vs useMemo"
      description="useRef returns a stable object that persists across renders. useMemo recalculates only when dependencies change."
      code={`const ref = useRef(Math.random());
const memo = useMemo(() => Math.random(), [deps]);`}
    >
      <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
        <code className="block">Ref (stable): {ref.current}</code>
        <code>Memo (recomputes): {memo}</code>
      </pre>

      <p className="text-base text-gray-400 py-2">
        🛠️ Try triggering a re-render:
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setTrigger((t) => t + 1)}
          className="px-3 py-1 bg-orange-600 text-white rounded hover:scale-105"
        >
          Re-trigger Memo
        </button>
      </div>
    </InfoBox>
  );
}
