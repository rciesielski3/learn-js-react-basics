'use client';

import React from 'react';

import { ui } from '@/components/shared/theme';
import { fortuneMessages } from '@/data/funLab/devFortuneCookie.js';

export const DevFortuneCookie = () => {
  const [fortune, setFortune] = React.useState('');

  const getRandomFortune = () => {
    const random = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
    setFortune(random);
  };

  return (
    <div className={ui.cardInner}>
      <p className="mb-2 place-self-center text-lg font-medium text-jt-ink">🥠 Dev Fortune Cookie</p>
      <p className="mb-4 text-sm text-jt-next">
        ℹ️ Click the button to crack a fortune cookie and get some JavaScript wisdom!
      </p>
      <div className="justify-self-center">
        <button onClick={getRandomFortune} className={`${ui.btn} hover:scale-105`}>
          🍪 Crack a Cookie
        </button>
      </div>
      {fortune && (
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap break-words rounded border border-white/10 bg-black/40 p-2 text-sm text-yellow-200">
          <code>“{fortune}”</code>
        </pre>
      )}
    </div>
  );
};
