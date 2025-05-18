'use client';

import React from 'react';

import { glossary } from '@/data/glossary';
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
      <div className="max-w-3xl w-full bg-gray-800 p-6 rounded border border-gray-700 text-shadow-md">
        <SectionHeader
          title="📚 Glossary"
          description="Quick reference for key terms in JavaScript, React, and Next.js."
        />

        <div className="flex gap-2">
          {categories.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-t-lg font-medium transition ${
                activeTab === key ? 'bg-purple-900' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {categoryLabels[key]}
            </button>
          ))}
        </div>

        <ul className="text-sm text-gray-300 bg-gray-900 space-y-3 rounded-tl-none border border-gray-700 p-4">
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
