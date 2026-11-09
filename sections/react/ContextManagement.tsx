'use client';

import React from 'react';

import { ui } from '@/components/shared/theme';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { contextManagementExamples } from '@/data/react/contextManagement';

export default function ContextManagement() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of contextManagementExamples) {
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
          title="🌐 React Context"
          description="Learn how to share state globally in React using the Context API without prop-drilling."
        />
        {contextManagementExamples.map((example) => (
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
