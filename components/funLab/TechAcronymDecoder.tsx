'use client';

import React from 'react';

import { ConceptsModal } from '../shared';

import { ui } from '@/components/shared/theme';
import { techAcronyms } from '@/data/funLab/techAcronymDecoder';

export const TechAcronymDecoder = () => {
  const [input, setInput] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);

  const techAcronymsData = Object.entries(techAcronyms).map(([key, value]) => ({
    title: key,
    summary: value
  }));

  const match = (techAcronyms as Record<string, string>)[input.trim().toUpperCase()];

  return (
    <div className={ui.cardInner}>
      <p className="mb-2 place-self-center text-lg font-medium text-jt-ink">🔍 Tech Acronym Decoder</p>
      <p className="mb-4 text-sm text-jt-next">
        ℹ️ Enter a short tech acronym (e.g. SSR, JSX, CSR) to get its full form and meaning.
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter acronym (e.g. SSR)"
        className="mb-3 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-jt-ink placeholder:text-jt-muted focus:border-jt-js/60 focus:outline-none focus:ring-2 focus:ring-jt-js/30"
      />

      {input && (
        <div className="text-sm">
          {match ? (
            <p className="font-medium text-jt-js">👉 {match}</p>
          ) : (
            <p className="italic text-red-300">❓ Unknown acronym</p>
          )}
        </div>
      )}
      <div className="flex justify-center gap-2">
        <button onClick={() => setShowModal(true)} className={ui.btn}>
          View All Acronyms 📚
        </button>
      </div>

      {showModal && (
        <ConceptsModal
          title="📚 All Tech Acronym Decoder"
          onClose={() => setShowModal(false)}
          concepts={techAcronymsData}
        />
      )}
    </div>
  );
};
