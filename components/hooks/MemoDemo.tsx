'use client';

import React from 'react';

import { ExampleBlock } from '@/components/shared';
import { hookData } from '@/data/react/hooks';

export function MemoDemo() {
  const [a, setA] = React.useState(1);
  const [b, setB] = React.useState(1);

  const { sampleSnippet, visualReprezentation } = hookData.useMemo;

  const product = React.useMemo(() => {
    return a * b;
  }, [a, b]);

  return (
    <>
      <ExampleBlock
        id="memo"
        name="useMemo"
        description="Avoids recalculating derived values on every render."
        code={`const memo = useMemo(() => compute(), [deps]);`}
        usage={`Useful for optimizing expensive calculations\nReturns memoized value unless dependencies change`}
        result={`A: ${a}, B: ${b}, A * B = ${product}`}
        sampleSnippet={sampleSnippet}
        visualReprezentation={visualReprezentation}
      />
      <div className="px-6 pb-2 -mt-3">
        <p className="text-base text-gray-400 mb-2">
          🛠️ Try adjusting A or B values using the buttons:
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setA(a + 1)}
            className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105"
          >
            A +1
          </button>
          <button
            onClick={() => setA(a - 1)}
            className="px-3 py-1 bg-red-600 text-white rounded hover:scale-105"
          >
            A -1
          </button>
          <button
            onClick={() => setB(b + 1)}
            className="px-3 py-1 bg-green-600 text-white rounded hover:scale-105 transition-transform"
          >
            B +1
          </button>
          <button
            onClick={() => setB(b - 1)}
            className="px-3 py-1 bg-red-600 text-white rounded hover:scale-105 transition-transform"
          >
            B -1
          </button>
        </div>
      </div>
    </>
  );
}
