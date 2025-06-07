'use client';

import React from 'react';
import { DevFortuneCookie } from './funLab/DevFortuneCookie';

const features = [
  {
    id: 'fortune',
    label: '🥠 Dev Fortune Cookie',
    description: 'Get a random JavaScript wisdom cookie.',
    component: <DevFortuneCookie />
  }
];

export default function FunLab() {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div className="mt-5 bg-gray-900 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">🎮 FunLab Playground</h2>
      <ul className="flex gap-4 border-b border-gray-600">
        {features.map((f) => (
          <li key={f.id}>
            <button
              className={`py-2 px-4 bg-slate-800 rounded-t-lg ${
                active === f.id
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          </li>
        ))}
      </ul>
      <div>{features.find((f) => f.id === active)?.component}</div>
    </div>
  );
}
