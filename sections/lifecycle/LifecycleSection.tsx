"use client";

import React from "react";

import { LogBox, SectionHeader, useLogger } from "@/components/shared";
import { LifecycleChild } from "../../components/livecycle/LifecycleChild";

export default function LifecycleSection() {
  const [count, setCount] = React.useState(0);
  const [logs, setLogs] = React.useState<string[]>([]);
  const [showChild, setShowChild] = React.useState(true);
  const [showLayoutDemo, setShowLayoutDemo] = React.useState(false);
  const [showCleanupDemo, setShowCleanupDemo] = React.useState(false);

  const log = useLogger(setLogs);

  React.useEffect(() => {
    log("[PARENT] Mounted");
    return () => log("[PARENT] Unmounted");
  }, [log]);

  React.useEffect(() => {
    log(`[PARENT] Count updated: ${count}`);
  }, [count, log]);

  return (
    <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded text-white">
      <SectionHeader
        title="🔁 React Lifecycle Demo"
        description="This section demonstrates how React components behave during mount, update, unmount, layout effects, and cleanup with logs."
      />
      <div className="flex gap-2 flex-wrap mb-4">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 bg-green-600 text-white rounded"
        >
          +1 Count
        </button>
        <button
          onClick={() => setLogs([])}
          className="px-3 py-1 bg-orange-500 text-white rounded"
        >
          Clear Logs
        </button>
        <button
          onClick={() => setShowChild((v) => !v)}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          {showChild ? "Unmount Child" : "Mount Child"}
        </button>
      </div>

      <p className="text-sm text-gray-400 mb-4">Current count: {count}</p>

      {showChild && <LifecycleChild count={count} log={log} />}

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">
          📐 useLayoutEffect Example
        </h3>
        <p className="text-sm text-gray-300 mb-2">
          This demo shows how <code>useLayoutEffect</code> fires before the
          browser paints.
        </p>
        <button
          onClick={() => setShowLayoutDemo((v) => !v)}
          className="px-3 py-1 bg-purple-600 text-white rounded mb-2"
        >
          {showLayoutDemo ? "Hide Layout Demo" : "Show Layout Demo"}
        </button>
        {showLayoutDemo && <LayoutLogger log={log} />}
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">🧹 Cleanup in useEffect</h3>
        <p className="text-sm text-gray-300 mb-2">
          This demo sets up an interval and shows how the cleanup removes it on
          unmount.
        </p>
        <button
          onClick={() => setShowCleanupDemo((v) => !v)}
          className="px-3 py-1 bg-purple-600 text-white rounded mb-2"
        >
          {showCleanupDemo ? "Hide Cleanup Demo" : "Start Cleanup Demo"}
        </button>
        {showCleanupDemo && <IntervalLogger log={log} />}
      </div>

      <LogBox logs={logs} />
    </div>
  );
}

function LayoutLogger({ log }: { log: (msg: string) => void }) {
  React.useLayoutEffect(() => {
    log("[LAYOUT EFFECT] Executed before paint");
  }, []);
  return (
    <p className="text-sm text-yellow-300">
      Layout effect triggered on mount (check console/logs)
    </p>
  );
}

function IntervalLogger({ log }: { log: (msg: string) => void }) {
  React.useEffect(() => {
    log("[INTERVAL] Starting interval logging every 3s");
    const id = setInterval(() => {
      log("[INTERVAL] Tick at " + new Date().toLocaleTimeString());
    }, 3000);
    return () => {
      clearInterval(id);
      log("[INTERVAL] Cleanup: interval cleared");
    };
  }, []);

  return (
    <p className="text-sm text-orange-300">
      Interval started, logs every 3s (check console/logs)
    </p>
  );
}
