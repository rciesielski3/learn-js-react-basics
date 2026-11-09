'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { quizQuestions } from '@/data/navElements/questions';

import { QuizQuestion } from './types';
import { ui } from './theme';

const getRandomQuestions = (count = 10): QuizQuestion[] => {
  return [...quizQuestions]
    .filter((q): q is QuizQuestion => q !== undefined)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

export default function QuizPage() {
  const [questions, setQuestions] = React.useState<QuizQuestion[] | null>(null);
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleSelect = (qIndex: number, option: string) => {
    if (submitted || !questions) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRestart = () => {
    setQuestions(getRandomQuestions());
    setAnswers({});
    setSubmitted(false);
  };

  React.useEffect(() => {
    setQuestions(getRandomQuestions());
  }, []);

  if (typeof window === 'undefined' || !questions) return null;

  if (!questions) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className={`${ui.body} text-lg`}>Loading quiz...</p>
      </div>
    );
  }

  const correctCount = questions.reduce((total, q, i) => {
    return answers[i] === q.answer ? total + 1 : total;
  }, 0);

  return (
    <div className="flex justify-center">
      <div className={`${ui.card} w-full max-w-3xl`}>
        <SectionHeader
          title="🧠 Interactive Quiz"
          description="Test your knowledge across JavaScript, React, and Next.js."
        />

        {questions.map((q, i) => (
          <div key={i} className="mb-6">
            <h3 className={`${ui.h3} mb-3`}>
              {i + 1}. {q.question}
            </h3>
            <div className="space-y-2">
              {q.options.map((opt) => {
                const isSelected = answers[i] === opt;
                const isCorrect = submitted && opt === q.answer;
                const isWrong = submitted && isSelected && opt !== q.answer;

                return (
                  <div
                    key={opt}
                    onClick={() => handleSelect(i, opt)}
                    className={`cursor-pointer rounded-xl border px-4 py-2 text-sm transition ${
                      isCorrect
                        ? 'border-emerald-400/60 bg-emerald-400/15 text-emerald-100'
                        : isWrong
                        ? 'border-red-400/60 bg-red-500/15 text-red-100'
                        : isSelected
                        ? 'border-accent bg-white/[0.08] text-jt-ink'
                        : 'border-white/10 bg-white/[0.03] text-jt-muted hover:bg-white/[0.07] hover:text-jt-ink'
                    }`}
                  >
                    {opt}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {!submitted ? (
          <div className="mt-6 text-center">
            <button onClick={handleSubmit} className={ui.btnPrimary}>
              Submit Quiz
            </button>
          </div>
        ) : (
          <div className="mt-6 text-center text-lg text-jt-ink">
            ✅ You scored <span className="font-bold text-accent">{correctCount}</span> / {questions.length}
            <div className="mt-4">
              <button onClick={handleRestart} className={ui.btnPrimary}>
                🔄 Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
