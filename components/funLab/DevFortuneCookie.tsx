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
    <div className="rounded-xl bg-gray-700 p-4 text-center">
      <p className="mb-2 font-medium text-lg">🥠 Dev Fortune Cookie</p>
      <button
        onClick={getRandomFortune}
        className="p-2 bg-blue-600 hover:bg-blue-700 rounded hover:scale-105 font-bold"
      >
        Crack a Cookie
      </button>
      {fortune && <p className="mt-3 italic text-orange-600">“{fortune}”</p>}
    </div>
  );
};
