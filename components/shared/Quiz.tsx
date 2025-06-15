'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { quizQuestions } from '@/data/navElements/questions';

import { QuizQuestion } from './types';

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
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-lg text-gray-400">Loading quiz...</p>
      </div>
    );
  }

  const correctCount = questions.reduce((total, q, i) => {
    return answers[i] === q.answer ? total + 1 : total;
  }, 0);

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white flex justify-center">
      <div className="max-w-3xl w-full bg-gray-800 p-6 rounded border border-gray-600">
        <SectionHeader
          title="🧠 Interactive Quiz"
          description="Test your knowledge across JavaScript, React, and Next.js."
        />

        {questions.map((q, i) => (
          <div key={i} className="mb-6">
            <h3 className="font-semibold mb-2 text-purple-300">
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
                    className={`cursor-pointer px-4 py-2 rounded border bg-gray-700 ${
                      isCorrect
                        ? 'border-green-500 bg-green-800'
                        : isWrong
                        ? 'border-red-500 bg-red-800'
                        : isSelected
                        ? 'border-blue-500 bg-blue-700'
                        : 'border-gray-600 hover:bg-gray-700'
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
          <div className="mt-6 text-center text-lg">
            <button
              onClick={handleSubmit}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
            >
              Submit Quiz
            </button>
          </div>
        ) : (
          <div className="mt-6 text-center text-lg">
            ✅ You scored <span className="font-bold">{correctCount}</span> / {questions.length}
            <div className="mt-4">
              <button
                onClick={handleRestart}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
              >
                🔄 Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
