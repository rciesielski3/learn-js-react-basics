'use client';

import React from 'react';

import { techAcronyms } from '@/data/funLab/techAcronymDecoder';

export const TechAcronymDecoder = () => {
  const [input, setInput] = React.useState('');
  const match = (techAcronyms as Record<string, string>)[input.trim().toUpperCase()];

  return (
    <div className="rounded-xl bg-gray-700 p-4">
      <p className="mb-2 font-medium text-lg place-self-center">🔍 Tech Acronym Decoder</p>
      <p className="text-sm mb-4 text-orange-600">
        ℹ️ Enter a short tech acronym (e.g. SSR, JSX, CSR) to get its full form and meaning.
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter acronym (e.g. SSR)"
        className="px-3 py-2 w-full bg-gray-800 rounded border border-blue-300 text-white mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {input && (
        <div className="text-sm">
          {match ? (
            <p className="text-green-700 font-medium">👉 {match}</p>
          ) : (
            <p className="text-red-600 italic">❓ Unknown acronym</p>
          )}
        </div>
      )}
    </div>
  );
};
