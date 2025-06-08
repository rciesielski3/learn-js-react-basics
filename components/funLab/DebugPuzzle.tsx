'use client';

import { useState } from 'react';
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
    <div className="bg-gray-700 rounded-xl p-4">
      <h3 className="mb-2 font-medium text-lg place-self-center">🧩 Debug Puzzle #{index + 1}</h3>
      <p className="text-sm mb-4 text-orange-600">
        ℹ️ Identify the bug in the code block below and click &quot;Show answer&quot; to see the
        expected output.
      </p>
      <span className="text-sm font-medium text-gray-400 justify-left">Code block:</span>
      <pre className="bg-gray-800 text-green-300 p-2 rounded text-sm overflow-x-auto">
        <code> {current.code}</code>
      </pre>

      {!showAnswer ? (
        <div className="justify-self-center">
          <button
            onClick={() => setShowAnswer(true)}
            className="mt-4 p-2 bg-blue-600 hover:bg-blue-700 rounded hover:scale-105 font-bold"
          >
            ✅ Show answer
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <span className="text-sm font-medium text-gray-400">Output:</span>
          <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm overflow-x-auto whitespace-pre-wrap break-words">
            <code>{current.explanation}</code>
          </pre>
          <div className="justify-self-center">
            <button
              onClick={handleNext}
              className="mt-3 p-2 bg-green-600 hover:bg-green-700 rounded hover:scale-105 font-bold"
            >
              Next card ➡️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
