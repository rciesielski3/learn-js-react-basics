import React from "react";

import { ExampleModal } from "./ExampleModal";
import { Props } from "./types";

export function ExampleBlock({
  name,
  description,
  code,
  usage,
  result,
  sampleSnippet,
  visualReprezentation,
}: Props) {
  const [expanded, setExpanded] = React.useState(false);

  const canExpand = sampleSnippet && visualReprezentation;

  return (
    <div className="bg-gray-800 p-4 rounded mb-6 relative">
      <h2 className="font-semibold text-lg mb-2">{name}</h2>
      {description && (
        <p className="text-sm text-orange-500 mb-2">ℹ️ {description}</p>
      )}

      <div className="mb-2">
        <span className="text-sm font-medium text-gray-400">Code block:</span>
        <pre className="bg-gray-700 text-green-300 p-2 rounded text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>

      <div className="mb-2">
        <span className="text-sm font-medium text-gray-400">
          Example usage:
        </span>
        <pre className="bg-gray-700 text-blue-300 p-2 rounded text-sm">
          <code>{usage}</code>
        </pre>
      </div>

      <div>
        <span className="text-sm font-medium text-gray-400">Output:</span>
        <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
          <code>{result ?? "..."}</code>
        </pre>
      </div>

      {canExpand && (
        <>
          <span className="text-sm font-medium text-gray-400">
            Sample Snippet and Visual Breakdown:
          </span>
          <div
            className="flex justify-between items-center cursor-pointer mt-2"
            onClick={() => setExpanded(true)}
          >
            <div className="px-3 py-1 bg-cyan-600 text-white rounded hover:scale-105 transition">
              Show Example
            </div>
          </div>
        </>
      )}

      {expanded && sampleSnippet && visualReprezentation && (
        <ExampleModal
          name={name}
          onClose={() => setExpanded(false)}
          sampleSnippet={sampleSnippet}
          visualReprezentation={visualReprezentation}
        />
      )}
    </div>
  );
}
