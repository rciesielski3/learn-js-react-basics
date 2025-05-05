"use client";

import React from "react";

import { useRefExamples } from "@/data/react/useRef";
import { SectionHeader, ExampleBlock } from "@/components/shared";

export default function UseRef() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of useRefExamples) {
      try {
        const result = ex.run?.();
        newResults[ex.id] = String(result ?? "N/A");
      } catch (err) {
        newResults[ex.id] = "Error: " + (err as Error).message;
      }
    }
    setResults(newResults);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="📍 useRef in React"
          description="useRef lets you persist values across renders and access DOM elements directly without re-rendering the component."
        />
        {useRefExamples.map((example) => (
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
