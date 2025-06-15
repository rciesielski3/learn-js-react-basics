'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { quizQuestions } from '@/data/navElements/questions';

export default function Flashcards() {
  const [current, setCurrent] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);

  const card = quizQuestions[current] ?? null;

  const next = () => {
    setShowAnswer(false);
    setCurrent((prev) => (prev + 1) % quizQuestions.length);
  };

  if (!card) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p>❌ No flashcard available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <div className="mt-6 p-6 w-full max-w-xl mx-auto border border-gray-600 bg-gray-700 rounded-lg text-center">
        <SectionHeader
          title="🧾 Interview Prep"
          description="Quick flashcards to help you review core concepts in JavaScript, React and Next.js."
        />
        <div className="text-white bg-gray-800 border p-4 gap-4 rounded-lg border-emerald-600">
          <div className="bg-gray-900 mb-3 p-3 rounded text-black overflow-x-auto whitespace-pre-wrap break-words">
            <p className="font-bold text-white">{card.question}</p>
          </div>
          {showAnswer ? (
            <div className="text-left">
              <span className="text-sm font-medium text-gray-400">Answer:</span>
              <pre className="mb-4 bg-gray-900 text-green-300 p-2 rounded text-sm overflow-x-auto whitespace-pre-wrap break-words">
                <code>{card.answer}</code>
              </pre>
            </div>
          ) : (
            <button
              onClick={() => setShowAnswer(true)}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded hover:scale-105 mr-5"
            >
              ✅ Show answer
            </button>
          )}
          <button
            onClick={next}
            className="p-2 bg-purple-600 hover:bg-purple-700 rounded hover:scale-105"
          >
            Next card ➡️
          </button>
        </div>
      </div>
    </div>
  );
}
