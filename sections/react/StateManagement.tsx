'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { stateManagementExamples } from '@/data/react/stateManagement';

export default function StateManagement() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of stateManagementExamples) {
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
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-800 to-gray-500">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="🔼 React State Management"
          description="Explore how to manage, share, lift, and derive state across React components."
        />
        {stateManagementExamples.map((example) => (
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
