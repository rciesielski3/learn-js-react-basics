'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { performanceExamples } from '@/data/react/performance';

export default function Performance() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const output: Record<string, string> = {};
    for (const ex of performanceExamples) {
      try {
        const result = ex.run?.();
        output[ex.id] = String(result ?? 'N/A');
      } catch (err) {
        output[ex.id] = 'Error: ' + (err as Error).message;
      }
    }
    setResults(output);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="max-w-3xl w-full p-6 bg-gray-700 border border-gray-600 rounded">
        <SectionHeader
          title="🔋 React Performance Optimization"
          description="Learn to optimize React apps using memoization, preventing re-renders, and avoiding unnecessary calculations."
        />
        {performanceExamples.map((example) => (
          <ExampleBlock
            key={example.id}
            id={example.id}
            name={example.name}
            description={example.description}
            code={example.code}
            usage={example.usage}
            result={results[example.id]}
          />
        ))}
      </div>
    </div>
  );
}
