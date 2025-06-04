'use client';

import React from 'react';

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
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
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
