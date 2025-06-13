'use client';

import React from 'react';

import { DevFortuneCookie } from './funLab/DevFortuneCookie';
import { DebugPuzzle } from './funLab/DebugPuzzle';
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
    <div className="bg-teal-950 rounded-lg p-4 shadow-lg">
      <h2 className="text-1 text-lg font-bold text-white mb-4">🎮 FunLab Playground</h2>
      <ul className="flex gap-0.5 border-b border-gray-600">
        {features.map((f) => (
          <li key={f.id} className="flex-1">
            <button
              className={`w-full py-2 px-4  rounded-t-lg ${
                active === f.id
                  ? 'border-t-2 border-x-2 border-emerald-600 text-blue-500 bg-slate-700 hover:bg-gray-700'
                  : 'text-gray-300 hover:text-white bg-slate-900 hover:bg-slate-700'
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
