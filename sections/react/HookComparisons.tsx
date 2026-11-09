'use client';

import React from 'react';

import { ui } from '@/components/shared/theme';

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
    <div className="space-y-6">
      <div className={ui.card}>
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
            className="px-3 py-1 rounded-xl border border-orange-400/50 bg-orange-500/15 text-orange-200 font-medium transition hover:bg-orange-500/25 hover:scale-105"
          >
            Clear Logs
          </button>
        </div>
        <LogBox logs={logs} />
      </div>
    </div>
  );
}
