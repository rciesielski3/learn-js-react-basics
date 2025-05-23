'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { flashcards } from '@/data/navElements/flashcards';

export default function Flashcards() {
  const [current, setCurrent] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);

  const card = flashcards[current];

  const next = () => {
    setShowAnswer(false);
    setCurrent((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <div className="mt-6 p-6 w-full max-w-xl mx-auto border border-gray-600 bg-gray-800 rounded-lg text-center">
        <SectionHeader
          title="📚 Interview Prep"
          description="Quick flashcards to help you review core concepts in JavaScript, React and Next.js."
        />
        <div className=" text-white bg-gray-900 border border-gray-700 p-4 gap-4">
          <h3 className="text-xl font-semibold my-4 text-gray-300">{card.question}</h3>
          {showAnswer ? (
            <p className="text-green-300 mb-6">{card.answer}</p>
          ) : (
            <button
              onClick={() => setShowAnswer(true)}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded hover:scale-105 mr-5 font-bold"
            >
              ✅ Show answer
            </button>
          )}
          <button
            onClick={next}
            className="p-2 bg-purple-600 hover:bg-purple-700 rounded hover:scale-105 font-bold"
          >
            Next card ➡️
          </button>
        </div>
      </div>
    </div>
  );
}
