'use client';

import React from 'react';

import { glossary } from '@/data/navElements/glossary';
import { SectionHeader } from '@/components/shared';

const categories = ['javascript', 'react', 'nextjs'] as const;
type Category = (typeof categories)[number];

const categoryLabels: Record<Category, string> = {
  javascript: 'JavaScript',
  react: 'React',
  nextjs: 'Next.js'
};

export default function Glossary() {
  const [activeTab, setActiveTab] = React.useState<Category>('javascript');

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <div className="max-w-3xl w-full bg-gray-700 p-6 rounded border border-gray-700 text-shadow-md">
        <SectionHeader
          title="📚 Glossary"
          description="Quick reference for key terms in JavaScript, React, and Next.js."
        />

        <div className="flex gap-0.5">
          {categories.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full font-medium py-2 px-4 rounded-t-lg ${
                activeTab === key
                  ? 'border-t-2 border-x-2 border-emerald-600 text-blue-500 bg-gray-900'
                  : 'bg-gray-800 hover:bg-gray-900'
              }`}
            >
              {categoryLabels[key]}
            </button>
          ))}
        </div>

        <ul className="text-sm text-gray-300 bg-gray-800 space-y-3 rounded-tl-none rounded-b-lg border-2 p-4 border-x-2 border-emerald-600">
          {glossary[activeTab].map(({ term, definition }: { term: string; definition: string }) => (
            <li key={term}>
              <strong className="text-white">{term}:</strong> {definition}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
