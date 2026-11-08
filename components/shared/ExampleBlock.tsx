import React from 'react';

import { ExampleModal } from './ExampleModal';
import { Props } from './types';
import { ui } from './theme';

export function ExampleBlock({
  name,
  description,
  code,
  usage,
  result,
  sampleSnippet,
  visualReprezentation
}: Props) {
  const [expanded, setExpanded] = React.useState(false);

  const canExpand = sampleSnippet && visualReprezentation;

  return (
    <div className={`${ui.cardInner} mb-6 relative`}>
      <h2 className={`${ui.h2} mb-2`}>{name}</h2>
      {description && <p className="text-sm text-accent mb-3">ℹ️ {description}</p>}

      <div className="mb-3">
        <span className={`${ui.muted} font-medium`}>Code block:</span>
        <pre className={`${ui.code} mt-1 p-3`}>
          <code>{code}</code>
        </pre>
      </div>

      <div className="mb-3">
        <span className={`${ui.muted} font-medium`}>Example usage:</span>
        <pre className="mt-1 overflow-x-auto rounded-xl border border-white/10 bg-black/50 p-3 text-sm text-accent">
          <code>{usage}</code>
        </pre>
      </div>

      <div>
        <span className={`${ui.muted} font-medium`}>Output:</span>
        <pre className={`${ui.code} mt-1 p-3`}>
          <code>{result ?? '...'}</code>
        </pre>
      </div>

      {canExpand && (
        <>
          <span className={`${ui.muted} font-medium`}>
            Sample Snippet and Visual Breakdown:
          </span>
          <div
            className="flex justify-between items-center cursor-pointer mt-2"
            onClick={() => setExpanded(true)}
          >
            <div className={ui.btn}>Show Example</div>
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
