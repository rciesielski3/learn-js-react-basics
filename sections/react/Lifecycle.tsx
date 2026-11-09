'use client';

import React from 'react';

import { ui } from '@/components/shared/theme';

import { LogBox, SectionHeader, useLogger } from '@/components/shared';
import { LifecycleChild } from '@/components/livecycle/LifecycleChild';

export default function Lifecycle() {
  const [count, setCount] = React.useState(0);
  const [logs, setLogs] = React.useState<string[]>([]);
  const [showChild, setShowChild] = React.useState(true);
  const [showLayoutDemo, setShowLayoutDemo] = React.useState(false);
  const [showCleanupDemo, setShowCleanupDemo] = React.useState(false);

  const log = useLogger(setLogs);

  React.useEffect(() => {
    log('[PARENT] Mounted');
    return () => log('[PARENT] Unmounted');
  }, [log]);

  React.useEffect(() => {
    log(`[PARENT] Count updated: ${count}`);
  }, [count, log]);

  return (
    <div className="space-y-6">
      <div className={ui.card}>
        <SectionHeader
          title="🔁 React Lifecycle Demo"
          description="This section demonstrates how React components behave during mount, update, unmount, layout effects, and cleanup with logs."
        />
        <div className="flex gap-2 flex-wrap mb-4">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-3 py-1 rounded-xl border border-green-400/50 bg-green-500/15 text-green-200 font-medium transition hover:bg-green-500/25"
          >
            +1 Count
          </button>
          <button
            onClick={() => setLogs([])}
            className="px-3 py-1 rounded-xl border border-orange-400/50 bg-orange-500/15 text-orange-200 font-medium transition hover:bg-orange-500/25"
          >
            Clear Logs
          </button>
          <button
            onClick={() => setShowChild((v) => !v)}
            className="px-3 py-1 rounded-xl border border-blue-400/50 bg-blue-500/15 text-sky-200 font-medium transition hover:bg-blue-500/25"
          >
            {showChild ? 'Unmount Child' : 'Mount Child'}
          </button>
        </div>

        <p className="text-sm text-jt-muted mb-4">Current count: {count}</p>

        {showChild && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-4">
            <LifecycleChild count={count} log={log} />
          </div>
        )}

        <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-semibold text-lg mb-4">📐 useLayoutEffect Example</h3>
          <p className="text-sm text-jt-muted mb-4">
            This demo shows how <code>useLayoutEffect</code> fires before the browser paints.
          </p>
          <button
            onClick={() => setShowLayoutDemo((v) => !v)}
            className="px-3 py-1 rounded-xl border border-purple-400/50 bg-purple-500/15 text-purple-200 font-medium transition hover:bg-purple-500/25 mb-2 hover:scale-105"
          >
            {showLayoutDemo ? 'Hide Layout Demo' : 'Show Layout Demo'}
          </button>
          {showLayoutDemo && <LayoutLogger log={log} />}
        </div>

        <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-semibold text-lg mb-4">🧹 Cleanup in useEffect</h3>
          <p className="text-sm text-jt-muted mb-2">
            This demo sets up an interval and shows how the cleanup removes it on unmount.
          </p>
          <button
            onClick={() => setShowCleanupDemo((v) => !v)}
            className="px-3 py-1 rounded-xl border border-purple-400/50 bg-purple-500/15 text-purple-200 font-medium transition hover:bg-purple-500/25 mb-2 hover:scale-105"
          >
            {showCleanupDemo ? 'Hide Cleanup Demo' : 'Start Cleanup Demo'}
          </button>
          {showCleanupDemo && <IntervalLogger log={log} />}
        </div>

        <LogBox logs={logs} />
      </div>
    </div>
  );
}

function LayoutLogger({ log }: { log: (msg: string) => void }) {
  React.useLayoutEffect(() => {
    log('[LAYOUT EFFECT] Executed before paint');
  }, []);
  return (
    <p className="text-sm text-yellow-200">Layout effect triggered on mount (check console/logs)</p>
  );
}

function IntervalLogger({ log }: { log: (msg: string) => void }) {
  React.useEffect(() => {
    log('[INTERVAL] Starting interval logging every 3s');
    const id = setInterval(() => {
      log('[INTERVAL] Tick at ' + new Date().toLocaleTimeString());
    }, 3000);
    return () => {
      clearInterval(id);
      log('[INTERVAL] Cleanup: interval cleared');
    };
  }, []);

  return (
    <p className="text-sm text-orange-200">Interval started, logs every 3s (check console/logs)</p>
  );
}
