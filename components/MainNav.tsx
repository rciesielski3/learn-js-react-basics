'use client';

import React from 'react';
import Link from 'next/link';

import { useVisitorCount } from './hooks/useVisitorCount';

export default function MainNav() {
  const count = useVisitorCount();
  return (
    <div className="w-full py-2 px-4 border-t border-b rounded-b-lg border-gray-600 bg-gray-600 text-center">
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
        <Link
          href="https://buycoffee.to/adateo"
          target="_blank"
          className="bg-indigo-700 hover:bg-indigo-900 hover:scale-105 text-white p-2 rounded font-bold"
        >
          ☕ Buy Me a Coffee
        </Link>
        <p className="text-white p-2 rounded font-bold bg-gray-800">
          👁️ Visitors:{' '}
          <span className="text-blue-500 font-semibold">
            {count !== null ? count : 'Loading...'}
          </span>
        </p>
      </div>
    </div>
  );
}
