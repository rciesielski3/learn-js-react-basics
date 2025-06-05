'use client';

import React from 'react';

import { ExampleBlock, SectionHeader } from '@/components/shared';
import { jsBasicsExamples } from '@/data/js/basics';

export default function Basics() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of jsBasicsExamples) {
      try {
        const result = ex.run();
        newResults[ex.id] = String(result);
      } catch (err) {
        newResults[ex.id] = 'Error: ' + (err as Error).message;
      }
    }
    setResults(newResults);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="🔵 JavaScript Basics"
          description="Explore the fundamentals of JavaScript through examples covering variables, data types, functions, conditionals, and loops."
        />
        {jsBasicsExamples.map((example) => (
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
