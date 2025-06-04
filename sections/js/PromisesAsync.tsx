'use client';

import React from 'react';

import { ExampleBlock, SectionHeader } from '@/components/shared';
import { promisesExamples } from '@/data/js/promises';

export default function PromisesAsync() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const runExamples = async () => {
      const newResults: Record<string, string> = {};
      for (const ex of promisesExamples) {
        try {
          const result = await ex.run();
          newResults[ex.id] = String(result);
        } catch (err) {
          newResults[ex.id] = 'Error: ' + (err as Error).message;
        }
      }
      setResults(newResults);
    };
    runExamples();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-800 to-gray-500">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="📦 Promises & Async/Await"
          description="Explore asynchronous programming in JavaScript using Promises and async/await patterns."
        />
        {promisesExamples.map((example) => (
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
