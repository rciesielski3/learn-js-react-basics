'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { quizQuestions } from '@/data/navElements/questions';

import { ui } from './theme';

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
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className={ui.body}>❌ No flashcard available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${ui.card} mx-auto mt-6 w-full max-w-xl text-center`}>
        <SectionHeader
          title="🧾 Interview Prep"
          description="Quick flashcards to help you review core concepts in JavaScript, React and Next.js."
        />
        <div className={`${ui.cardInner} flex flex-wrap items-center justify-center gap-3 p-4`}>
          <h3 className="my-4 w-full text-xl font-semibold text-jt-ink">{card.question}</h3>
          {showAnswer ? (
            <p className="mb-2 w-full text-accent">{card.answer}</p>
          ) : (
            <button onClick={() => setShowAnswer(true)} className={ui.btnPrimary}>
              ✅ Show answer
            </button>
          )}
          <button onClick={next} className={ui.btn}>
            Next card ➡️
          </button>
        </div>
      </div>
    </div>
  );
}
