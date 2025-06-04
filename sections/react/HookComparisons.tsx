'use client';

import React from 'react';

import { SectionHeader, LogBox, useLogger } from '@/components/shared';
import {
  EffectVsLayoutEffect,
  MemoVsCallback,
  RefVsMemo,
  RefVsState,
  StateVsReducer
} from '@/components/hooks';

export default function HookComparisons() {
  const [logs, setLogs] = React.useState<string[]>([]);
  const log = useLogger(setLogs);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-800 to-gray-500">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="🔍 Comparing Similar Hooks"
          description="Explore differences between similar React hooks with live examples and interactive logs."
        />

        <EffectVsLayoutEffect log={log} />
        <StateVsReducer log={log} />
        <RefVsState log={log} />
        <MemoVsCallback log={log} />
        <RefVsMemo log={log} />

        <div className="mb-4 flex gap-4 flex-wrap">
          <button
            onClick={() => setLogs([])}
            className="px-3 py-1 bg-orange-600 text-white rounded hover:scale-105"
          >
            Clear Logs
          </button>
        </div>
        <LogBox logs={logs} />
      </div>
    </div>
  );
}
