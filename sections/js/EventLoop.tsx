'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { eventLoopExamples } from '@/data/js/eventLoop';

export default function EventLoop() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of eventLoopExamples) {
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
          title="⏱️ Event Loop & Async"
          description="JavaScript runs code synchronously, but it handles async operations using the event loop. Explore how the call stack, Web APIs, and task queues work together."
        />
        {eventLoopExamples.map((example) => (
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
