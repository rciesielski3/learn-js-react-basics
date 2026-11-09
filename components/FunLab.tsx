'use client';

import React from 'react';

import { ui } from '@/components/shared/theme';

import { DebugPuzzle } from './funLab/DebugPuzzle';
import { DevFortuneCookie } from './funLab/DevFortuneCookie';
import { OneMinuteConcepts } from './funLab/OneMinuteConcepts';
import { TechAcronymDecoder } from './funLab/TechAcronymDecoder';

const features = [
  {
    id: 'fortune',
    label: '🥠 Fortune Cookie',
    description: 'Get a random JavaScript wisdom cookie.',
    component: <DevFortuneCookie />
  },
  {
    id: 'debug',
    label: '🧩 Debug Puzzle',
    component: <DebugPuzzle />
  },
  {
    id: 'concepts',
    label: '⏱️ Quick Concepts',
    component: <OneMinuteConcepts />
  },
  {
    id: 'acronym',
    label: '🔍 Acronym Decoder',
    component: <TechAcronymDecoder />
  }
];

export default function FunLab() {
  const [active, setActive] = React.useState<string | null>('fortune');
  const activeComponent = features.find((f) => f.id === active)?.component;

  return (
    <div className={`${ui.cardInner} shadow-lg`}>
      <h2 className="mb-4 text-lg font-bold text-jt-ink">🎮 FunLab Playground</h2>
      <ul className="flex gap-0.5 border-b border-white/10">
        {features.map((f) => (
          <li key={f.id} className="flex-1">
            <button
              className={`w-full rounded-t-lg px-4 py-2 transition ${
                active === f.id
                  ? 'border-x-2 border-t-2 border-jt-js/40 bg-white/10 text-jt-js'
                  : 'bg-transparent text-jt-muted hover:bg-white/[0.06] hover:text-jt-ink'
              }`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="-mt-0.5 rounded-b-lg border-2 border-jt-js/40 bg-black/40 px-4 py-6">
        {activeComponent}
      </div>
    </div>
  );
}
