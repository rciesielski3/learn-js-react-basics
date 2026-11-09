'use client';

import React from 'react';
import ReactDOM from 'react-dom';

import { ui } from './theme';
import { useDialog } from './useDialog';

interface ConceptsModalProps {
  title: string;
  onClose: () => void;
  concepts: { title: string; summary: string }[];
}

export const ConceptsModal = ({ title, onClose, concepts }: ConceptsModalProps) => {
  const dialogRef = useDialog<HTMLDivElement>(onClose);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        ref={dialogRef}
        className={`${ui.cardFlush} relative max-h-[90vh] w-full max-w-4xl overflow-y-auto`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 rounded-t-[22px] border-b border-white/10 bg-jt-bg/90 p-6 backdrop-blur-md">
          <h2 className={ui.h2}>{title}</h2>
          <button type="button" onClick={onClose} className={ui.btn}>
            Close
          </button>
        </div>

        <ul className="grid gap-4 p-6 sm:grid-cols-2">
          {concepts.map((c, i) => (
            <li key={i} className={ui.cardInner}>
              <p className={`${ui.h3} mb-1`}>📘 {c.title}</p>
              <p className="text-sm italic text-accent">{c.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
};
