'use client';

import React from 'react';
import { ui } from '@/components/shared/theme';

import { ExampleBlock, SectionHeader } from '@/components/shared';
import { modulesExamples } from '@/data/js/modules';

export default function Modules() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of modulesExamples) {
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
    <div className="space-y-6">
      <div className={ui.card}>
        <SectionHeader
          title="📥 Modules & Import/Export"
          description="Understand how JavaScript modules work using ES6 import/export syntax and how to structure code for reuse."
        />
        {modulesExamples.map((example) => (
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
