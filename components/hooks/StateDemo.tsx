'use client';

import React from 'react';

import { ExampleBlock } from '@/components/shared';
import { hookData } from '@/data/react/hooks';

export function StateDemo() {
  const [value, setValue] = React.useState(0);

  const { sampleSnippet, visualReprezentation } = hookData.useState;

  return (
    <>
      <ExampleBlock
        id="state"
        name="useState"
        description="Allows functional components to hold stateful values."
        code={`const [value, setValue] = React.useState(0);`}
        usage={`Click buttons below to update state
Each change triggers a re-render`}
        result={`Current value: ${value}`}
        sampleSnippet={sampleSnippet}
        visualReprezentation={visualReprezentation}
      />
      <div className="px-6 pb-2 -mt-3">
        <p className="text-base text-jt-muted mb-2">🛠️ Change value using the buttons:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setValue((v) => v - 1)}
            className="px-3 py-1 rounded-xl border border-red-400/50 bg-red-500/15 text-red-200 font-medium transition hover:bg-red-500/25 hover:scale-105"
          >
            Decrement
          </button>
          <button
            onClick={() => setValue((v) => v + 1)}
            className="px-3 py-1 rounded-xl border border-green-400/50 bg-green-500/15 text-green-200 font-medium transition hover:bg-green-500/25 hover:scale-105"
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}
