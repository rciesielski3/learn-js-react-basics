import React from "react";
import ReactDOM from "react-dom";

import { ModalProps } from "./types";
import { ui } from "./theme";

export function ExampleModal({
  name,
  onClose,
  sampleSnippet,
  visualReprezentation,
}: ModalProps) {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      <div className={`${ui.card} relative w-full max-w-4xl max-h-[90vh] overflow-y-auto`}>
        <div className="mb-4 flex items-center justify-between gap-4 pr-16">
          <p className={ui.h2}>{name}</p>
          <button onClick={onClose} className={`${ui.btn} absolute right-5 top-5`}>
            Close
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="min-w-0">
            <p className={`${ui.muted} mb-2`}>🛠️ Sample Snippet</p>
            <pre className={`${ui.code} max-h-80 p-3`}>
              <code>{sampleSnippet}</code>
            </pre>
          </div>
          <div className="min-w-0">
            <p className={`${ui.muted} mb-2`}>🧠 Visual Breakdown</p>
            <pre className="max-h-80 overflow-x-auto rounded-xl border border-white/10 bg-black/50 p-3 text-sm text-accent">
              <code>{visualReprezentation}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
