'use client';

import { useState } from 'react';

import { ui } from '@/components/shared/theme';
import { debugChallenges } from '@/data/funLab/debugPuzzle';

export const DebugPuzzle = () => {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = debugChallenges[index];

  const handleNext = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % debugChallenges.length);
  };

  return (
    <div className={ui.cardInner}>
      <h3 className="mb-2 place-self-center text-lg font-medium text-jt-ink">🧩 Debug Puzzle #{index + 1}</h3>
      <p className="mb-4 text-sm text-jt-next">
        ℹ️ Identify the bug in the code block below and click &quot;Show answer&quot; to see the
        expected output.
      </p>
      <span className="justify-left text-sm font-medium text-jt-muted">Code block:</span>
      <pre className="overflow-x-auto rounded border border-white/10 bg-black/40 p-2 text-sm text-green-200">
        <code> {current.code}</code>
      </pre>

      {!showAnswer ? (
        <div className="justify-self-center">
          <button
            onClick={() => setShowAnswer(true)}
            className={`${ui.btn} mt-4 hover:scale-105`}
          >
            ✅ Show answer
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <span className="text-sm font-medium text-jt-muted">Output:</span>
          <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded border border-white/10 bg-black/40 p-2 text-sm text-yellow-200">
            <code>{current.explanation}</code>
          </pre>
          <div className="justify-self-center">
            <button
              onClick={handleNext}
              className={`${ui.btn} mt-3 hover:scale-105`}
            >
              Next card ➡️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
