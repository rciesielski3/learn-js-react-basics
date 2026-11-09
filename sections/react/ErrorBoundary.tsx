'use client';

import React from 'react';

import { ui } from '@/components/shared/theme';

import { errorBoundaryExamples } from '@/data/react/errorBoundary';
import { SectionHeader, ExampleBlock } from '@/components/shared';

export default function ErrorBoundary() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of errorBoundaryExamples) {
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
    <div className="space-y-6">
      <div className={ui.card}>
        <SectionHeader
          title="🚨 Error Boundaries in React"
          description="React Error Boundaries allow you to catch JavaScript errors in components and render fallback UIs instead of crashing the app."
        />
        {errorBoundaryExamples.map((example) => (
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
