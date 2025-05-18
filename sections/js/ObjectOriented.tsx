'use client';

import React from 'react';

import { objectOrientedExamples } from '@/data/js/objectOriented';
import { SectionHeader, ExampleBlock } from '@/components/shared';

export default function JsObjectOriented() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of objectOrientedExamples) {
      try {
        const result = ex.run?.();
        newResults[ex.id] = String(result ?? 'N/A');
      } catch (err) {
        newResults[ex.id] = 'Error: ' + (err as Error).message;
      }
    }
    setResults(newResults);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="max-w-3xl w-full p-6 bg-gray-700 border border-gray-600 rounded">
        <SectionHeader
          title="📦 Object-Oriented JavaScript"
          description="Learn how JavaScript supports object-oriented programming with classes, prototypes, constructors, and inheritance."
        />
        {objectOrientedExamples.map((example) => (
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
