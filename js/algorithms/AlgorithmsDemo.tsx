"use client";

import { useEffect, useState } from "react";

import { ExampleBlock } from "@/components/shared";
import { algorithmExamples } from "./algorithms-examples";

export default function AlgorithmsDemo() {
  const [results, setResults] = useState<Record<string, string>>({});

  useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of algorithmExamples) {
      try {
        const result = ex.run();
        newResults[ex.id] = String(result);
      } catch (err) {
        newResults[ex.id] = "Error: " + (err as Error).message;
      }
    }
    setResults(newResults);
  }, []);

  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">⚙️ JavaScript Algorithms</h1>
      <p className="text-sm text-gray-400 mb-6 max-w-2xl">
        These classic algorithm examples demonstrate recursion, string
        manipulation, and array operations using fundamental JavaScript
        functions.
      </p>

      {algorithmExamples.map((example) => (
        <ExampleBlock
          key={example.id}
          id={example.id}
          name={example.name}
          code={example.code}
          usage={example.usage}
          result={results[example.id]}
        />
      ))}
    </div>
  );
}
