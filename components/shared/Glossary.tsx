'use client';

import React from 'react';

import { glossary } from '@/data/navElements/glossary';
import { SectionHeader } from '@/components/shared';

import { ui } from './theme';

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
    <div className="flex justify-center">
      <div className={`${ui.card} w-full max-w-3xl`}>
        <SectionHeader
          title="📚 Glossary"
          description="Quick reference for key terms in JavaScript, React, and Next.js."
        />

        <div className="mb-4 flex flex-wrap gap-2">
          {categories.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              aria-pressed={activeTab === key}
              className={`flex-1 rounded-xl border px-4 py-2 text-sm font-medium transition ${
                activeTab === key
                  ? 'border-accent bg-white/[0.08] text-accent'
                  : 'border-white/10 bg-white/[0.03] text-jt-muted hover:bg-white/[0.07] hover:text-jt-ink'
              }`}
            >
              {categoryLabels[key]}
            </button>
          ))}
        </div>

        <ul className={`${ui.cardInner} space-y-3 text-sm text-jt-muted`}>
          {glossary[activeTab].map(({ term, definition }: { term: string; definition: string }) => (
            <li key={term}>
              <strong className="text-jt-ink">{term}:</strong> {definition}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
