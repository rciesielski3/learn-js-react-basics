'use client';

import { useState } from 'react';

import { conceptData } from '@/data/funLab/oneMinuteConcepts';

export const OneMinuteConcepts = () => {
  const [index, setIndex] = useState(0);
  const concept = conceptData[index];

  const nextConcept = () => {
    setIndex((prev) => (prev + 1) % conceptData.length);
  };

  return (
    <div className="bg-gray-700 rounded-xl p-4">
      <h3 className="mb-2 font-medium text-lg place-self-center">⏱️ One-Minute Concepts</h3>
      <p className="text-sm mb-4 text-orange-600">
        ℹ️ Learn foundational JavaScript/React/Next.js concepts in under a minute.
      </p>

      <div className="bg-gray-900 p-3 rounded text-black overflow-x-auto whitespace-pre-wrap break-words">
        <p className="font-bold mb-1 text-white">📘 {concept.title}</p>
        <p className="text-sm italic text-yellow-300">{concept.summary}</p>
      </div>
      <div className="justify-self-center">
        <button
          onClick={nextConcept}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded hover:scale-105"
        >
          Next Concept ⏭️
        </button>
      </div>
    </div>
  );
};
