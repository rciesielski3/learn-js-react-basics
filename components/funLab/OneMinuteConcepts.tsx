'use client';

import React from 'react';

import { ConceptsModal } from '../shared';

import { ui } from '@/components/shared/theme';
import { conceptData } from '@/data/funLab/oneMinuteConcepts';

export const OneMinuteConcepts = () => {
  const [index, setIndex] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);

  const concept = conceptData[index];

  const nextConcept = () => {
    setIndex((prev) => (prev + 1) % conceptData.length);
  };

  return (
    <div className={ui.cardInner}>
      <h3 className="mb-2 place-self-center text-lg font-medium text-jt-ink">⏱️ One-Minute Concepts</h3>
      <p className="mb-4 text-sm text-jt-next">
        ℹ️ Learn foundational JavaScript/React/Next.js concepts in under a minute.
      </p>

      <div className="overflow-x-auto whitespace-pre-wrap break-words rounded border border-white/10 bg-black/40 p-3">
        <p className="mb-1 font-bold text-jt-ink">📘 {concept.title}</p>
        <p className="text-sm italic text-yellow-200">{concept.summary}</p>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <button onClick={nextConcept} className={`${ui.btn} hover:scale-105`}>
          Next Concept ⏭️
        </button>
        <button onClick={() => setShowModal(true)} className={ui.btn}>
          View All Concepts 📚
        </button>
      </div>

      {showModal && (
        <ConceptsModal
          title="📚 All One-Minute Concepts"
          onClose={() => setShowModal(false)}
          concepts={conceptData}
        />
      )}
    </div>
  );
};
