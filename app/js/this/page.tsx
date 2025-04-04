"use client";

import { useEffect, useState } from "react";
import { thisExamples } from "../../../js/this-keyword";

export default function JsThisPage() {
  const [results, setResults] = useState<Record<string, string>>({});

  useEffect(() => {
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
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">
        Understanding <code>this</code> in JavaScript
      </h1>

      {thisExamples.map(({ id, name, code, usage }) => (
        <div key={id} className="bg-gray-800 p-4 rounded mb-6">
          <h2 className="font-semibold text-lg mb-2">{name}</h2>

          <div className="mb-2">
            <span className="text-sm font-medium text-gray-400">
              Code block:
            </span>
            <pre className="bg-gray-700 text-green-300 p-2 rounded text-sm overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>

          <div className="mb-2">
            <span className="text-sm font-medium text-gray-400">
              Example usage:
            </span>
            <pre className="bg-gray-700 text-blue-300 p-2 rounded text-sm">
              <code>{usage}</code>
            </pre>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-400">Output:</span>
            <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-sm">
              <code>{results[id] ?? "..."}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
