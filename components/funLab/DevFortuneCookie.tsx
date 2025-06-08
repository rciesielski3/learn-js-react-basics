'use client';

import React from 'react';

import { fortuneMessages } from '@/data/funLab/devFortuneCookie.js';

export const DevFortuneCookie = () => {
  const [fortune, setFortune] = React.useState('');

  const getRandomFortune = () => {
    const random = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
    setFortune(random);
  };

  return (
    <div className="rounded-xl bg-gray-700 p-4">
      <p className="mb-2 font-medium text-lg place-self-center">🥠 Dev Fortune Cookie</p>
      <p className="text-sm mb-4 text-orange-600">
        ℹ️ Click the button to crack a fortune cookie and get some JavaScript wisdom!
      </p>
      <div className="justify-self-center">
        <button
          onClick={getRandomFortune}
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded hover:scale-105 font-bold"
        >
          Crack a Cookie
        </button>
      </div>
      {fortune && (
        <pre className="mt-4 bg-gray-900 text-yellow-300 p-2 rounded text-sm overflow-x-auto whitespace-pre-wrap break-words">
          <code>“{fortune}”</code>
        </pre>
      )}
    </div>
  );
};
