'use client';

import React from 'react';

import { DevFortuneCookie } from './funLab/DevFortuneCookie';
import { DebugPuzzle } from './funLab/DebugPuzzle';
import { TechAcronymDecoder } from './funLab/TechAcronymDecoder';

const features = [
  {
    id: 'fortune',
    label: '🥠 Dev Fortune Cookie',
    description: 'Get a random JavaScript wisdom cookie.',
    component: <DevFortuneCookie />
  },
  {
    id: 'debug',
    label: '🧩 Debug Puzzle',
    component: <DebugPuzzle />
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
    <div className="bg-teal-950 rounded-lg p-4 shadow-lg">
      <h2 className="text-lg font-bold text-white mb-4">🎮 FunLab Playground</h2>
      <ul className="flex gap-0.5 border-b border-gray-600">
        {features.map((f) => (
          <li key={f.id}>
            <button
              className={`py-2 px-4 bg-slate-900 rounded-t-lg ${
                active === f.id
                  ? 'border-t-2 border-x-2 border-emerald-600 text-blue-500 bg-slate-700'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="-mt-0.5 border-2 border-emerald-600 rounded-b-lg bg-slate-600 px-4 py-6">
        {activeComponent}
      </div>
    </div>
  );
}
