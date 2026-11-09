'use client';

import React from 'react';

import { InfoBox, Tooltip } from '@/components/shared';

export default function EffectVsLayoutEffect({ log }: { log: (msg: string) => void }) {
  const [count, setCount] = React.useState(0);
  const [effectBg, setEffectBg] = React.useState('transparent');
  const [layoutBg, setLayoutBg] = React.useState('transparent');

  React.useLayoutEffect(() => {
    setLayoutBg('lightblue');
    log(`[useLayoutEffect] Ran for count = ${count}`);
    const timeout = setTimeout(() => setLayoutBg('transparent'), 100);
    return () => clearTimeout(timeout);
  }, [count, log]);

  React.useEffect(() => {
    setEffectBg('yellow');
    log(`[useEffect] Ran for count = ${count}`);
    const timeout = setTimeout(() => setEffectBg('transparent'), 100);
    return () => clearTimeout(timeout);
  }, [count, log]);

  return (
    <InfoBox
      title="useEffect vs useLayoutEffect"
      description={`Observe how useLayoutEffect executes before paint (no flicker), \nwhile useEffect runs after paint (may flicker). \nTrigger both at once to compare!`}
      code={`useLayoutEffect(() => { ... }, [deps]);
useEffect(() => { ... }, [deps]);`}
    >
      <div className="text-sm font-medium text-jt-muted mb-1">Visual Comparison:</div>
      <div className="flex gap-4 ">
        <div
          style={{ backgroundColor: effectBg }}
          className="transition-all duration-200 p-4 rounded w-full sm:w-1/2 border border-yellow-400/50"
        >
          <p className="text-yellow-200 font-semibold">useEffect Box</p>
          <p className="text-sm text-jt-ink">Count: {count}</p>
        </div>
        <div
          style={{ backgroundColor: layoutBg }}
          className="transition-all duration-200 p-4 rounded w-full sm:w-1/2 border border-blue-400/50"
        >
          <p className="text-sky-200 font-semibold">useLayoutEffect Box</p>
          <p className="text-sm text-jt-ink">Count: {count}</p>
        </div>
      </div>

      <p className="text-base text-jt-muted py-2">🛠️ Try these button:</p>
      <div className="flex gap-2 flex-wrap mt-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 rounded-xl border border-violet-400/50 bg-violet-500/15 text-violet-200 font-medium transition hover:bg-violet-500/25 hover:scale-105"
        >
          Trigger Both
        </button>
        <Tooltip
          content={
            <div className="text-sm text-jt-ink max-w-xs">
              <p>🧠 On click:</p>
              <ul className="list-disc list-inside ml-2 mt-1">
                <li>
                  <b>useLayoutEffect</b> runs first: blue flash happens before paint
                </li>
                <li>Then the browser paints the DOM</li>
                <li>
                  <b>useEffect</b> runs after paint: yellow flash may cause flicker
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
