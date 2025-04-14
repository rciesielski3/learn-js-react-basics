import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  onClose: () => void;
  sampleSnippet: string;
  visualReprezentation: string;
};

export function ExampleModal({
  onClose,
  sampleSnippet,
  visualReprezentation,
}: ModalProps) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm"
        >
          Close
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-sm text-gray-400 mb-2">🛠️ Sample Snippet</p>
            <pre className="bg-gray-700 text-green-300 p-2 rounded text-sm overflow-x-auto max-h-80">
              <code>{sampleSnippet}</code>
            </pre>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">🧠 Visual Breakdown</p>
            <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm overflow-x-auto max-h-80">
              <code>{visualReprezentation}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
