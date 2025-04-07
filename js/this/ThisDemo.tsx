"use client";

import React from "react";

import { ExampleBlock } from "@/components/shared/ExampleBlock";
import { thisExamples } from "./this-keyword";

export default function JsThisPage() {
  const [results, setResults] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const newResults: Record<string, string> = {};
    for (const ex of thisExamples) {
      try {
        const result = ex.run();
        newResults[ex.id] =
          typeof result === "object" ? "[object Object]" : String(result);
      } catch (err) {
        newResults[ex.id] = "Error: " + (err as Error).message;
      }
    }
    setResults(newResults);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 text-white">
      <h1 className="text-2xl font-bold mb-4">
        ☝️ Understanding <code className="text-orange-500">this</code> in
        JavaScript
      </h1>

      <p className="text-base text-gray-400 mb-6 max-w-2xl">
        The value of <code className="text-orange-500">this</code> in JavaScript
        depends on how a function is called. It can refer to the global object,
        the current class instance, a bound context, or even be{" "}
        <code className="text-orange-500">undefined</code> in strict mode or
        arrow functions. The examples below explore these variations
        interactively.
      </p>

      {thisExamples.map((example) => (
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
  );
}
