'use client';

import React from 'react';
import ReactDOM from 'react-dom';

interface ConceptsModalProps {
  title: string;
  onClose: () => void;
  concepts: { title: string; summary: string }[];
}

export const ConceptsModal = ({ title, onClose, concepts }: ConceptsModalProps) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-20 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full shadow-lg relative overflow-y-auto max-h-[90vh]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Close
          </button>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4">
          {concepts.map((c, i) => (
            <li key={i} className="bg-gray-900 p-4 rounded shadow">
              <p className="text-lg font-semibold text-white mb-1">📘 {c.title}</p>
              <p className="text-sm italic text-yellow-300">{c.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
};
