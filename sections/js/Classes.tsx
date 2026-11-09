'use client';

import React from 'react';
import { ui } from '@/components/shared/theme';

import { ExampleBlock, SectionHeader } from '@/components/shared';
import { classesExamples } from '@/data/js/classes';

export default function Classes() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    classesExamples.forEach((ex) => {
      try {
        newResults[ex.id] = String(ex.run());
      } catch (err) {
        newResults[ex.id] = String(err);
      }
    });
    setResults(newResults);
  }, []);

  return (
    <div className="space-y-6">
      <div className={ui.card}>
        <SectionHeader
          title="📚 JS Classes & Inheritance"
          description="This page demonstrates class syntax, inheritance, overriding methods,
        static methods, and constructor functions with prototypes."
        />
        {classesExamples.map((example) => (
          <ExampleBlock key={example.id} {...example} result={results[example.id]} />
        ))}
      </div>
    </div>
  );
}
