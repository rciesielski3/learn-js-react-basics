"use client";

import React from "react";

import { SectionHeader } from "@/components/shared";
import { tsVsJsExamples } from "@/data/js/tsVsJs";

export default function TypeComparison() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="mt-6 p-6 max-w-5xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="🆚 JavaScript vs TypeScript"
          description="Page compares core JavaScript features with TypeScript equivalents. Use it to understand how TypeScript enhances JavaScript with type safety and developer tooling."
        />

        {tsVsJsExamples.map((example, idx) => (
          <div
            key={idx}
            className="mb-10 border border-gray-600 rounded-lg p-4 bg-gray-800"
          >
            <h3 className="text-xl font-bold text-white mb-1">
              {example.title}
            </h3>
            <p className="text-gray-300 mb-4">{example.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">JavaScript</p>
                <pre className="bg-gray-900 text-sm text-green-300 p-3 rounded overflow-x-auto">
                  <code>{example.jsCode}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">TypeScript</p>
                <pre className="bg-gray-900 text-sm text-green-300 p-3 rounded overflow-x-auto">
                  <code>{example.tsCode}</code>
                </pre>
              </div>
            </div>

            <p className="mt-4 text-yellow-300 italic">{example.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
