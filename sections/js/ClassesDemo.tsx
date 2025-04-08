"use client";

import React from "react";
import { classExamples } from "../../js/class-examples";
import { ExampleBlock } from "../../components/shared/ExampleBlock";

export default function JSClassesDemo() {
  const [results, setResults] = React.useState<Record<string, any>>({});

  React.useEffect(() => {
    const newResults: Record<string, any> = {};
    classExamples.forEach((ex) => {
      try {
        newResults[ex.id] = String(ex.run());
      } catch (err) {
        newResults[ex.id] = String(err);
      }
    });
    setResults(newResults);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 text-white">
      <h1 className="text-2xl font-bold mb-4">📚 JS Classes & Inheritance</h1>
      <p className="text-base text-gray-400 mb-6 max-w-2xl">
        This page demonstrates class syntax, inheritance, overriding methods,
        static methods, and constructor functions with prototypes.
      </p>
      {classExamples.map((example) => (
        <ExampleBlock
          key={example.id}
          {...example}
          result={results[example.id]}
        />
      ))}
    </div>
  );
}
