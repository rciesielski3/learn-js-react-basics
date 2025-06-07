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
    <div className="rounded-xl bg-yellow-900 p-4 text-center shadow mt-6">
      <p className="mb-2 font-medium text-lg">🥠 Dev Fortune Cookie</p>
      <button
        onClick={getRandomFortune}
        className="bg-yellow-600 px-4 py-1 rounded hover:bg-yellow-700"
      >
        Crack a Cookie
      </button>
      {fortune && <p className="mt-3 italic">“{fortune}”</p>}
    </div>
  );
};
