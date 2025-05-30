'use client';

import React from 'react';
import Link from 'next/link';

export default function MainNav() {
  return (
    <div className="w-full py-2 px-4 border-t border-b rounded-b-lg border-gray-700 bg-gray-800 text-center">
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/glossary"
          className="bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white p-2 rounded font-bold"
        >
          📚 Glossary
        </Link>
        <Link
          href="/flashcards"
          className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white p-2 rounded font-bold"
        >
          🧾 Flashcards
        </Link>
        <Link
          href="/quiz"
          className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white p-2 rounded font-bold"
        >
          🧠 Quiz
        </Link>
      </div>
    </div>
  );
}
