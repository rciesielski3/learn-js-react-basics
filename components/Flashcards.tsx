'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { flashcards } from '@/data/flashcards';

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
          description="Quick flashcards to help you review core concepts in JavaScript, React, and Next.js."
        />
        <h3 className="text-lg font-semibold mt-6 mb-4">{card.question}</h3>
        {showAnswer ? (
          <p className="text-green-300 mb-6">{card.answer}</p>
        ) : (
          <button
            onClick={() => setShowAnswer(true)}
            className="mb-6 text-blue-400 hover:underline"
          >
            Show Answer
          </button>
        )}
        <button
          onClick={next}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Next Card
        </button>
      </div>
    </div>
  );
}
