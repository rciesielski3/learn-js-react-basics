'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { fileExamples, fileComparison } from '@/data/js/fileTypes';

export default function FileTypeExplanation() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="mt-6 p-6 max-w-3xl mx-auto bg-gray-700 border border-gray-500 rounded">
        <SectionHeader
          title="📄 JS, JSX, TS, and TSX Explained"
          description="Learn what each file extension is used for in modern JavaScript and TypeScript projects, especially with React."
        />

        {fileExamples.map((example, idx) => (
          <div key={idx} className="mb-10 border border-gray-600 rounded-lg p-4 bg-gray-800">
            <h3 className="text-xl font-bold text-white mb-1">{example.title}</h3>
            <p className="text-gray-300 mb-4">{example.description}</p>
            <pre className="bg-gray-900 text-sm text-green-300 p-3 rounded overflow-x-auto">
              <code>{example.code}</code>
            </pre>
          </div>
        ))}

        <h3 className="text-2xl text-white font-semibold my-4">🔍 Comparison Table</h3>
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="text-left border border-gray-800 bg-gray-900">
              <th className="p-2 border border-gray-600">Extension</th>
              <th className="p-2 border border-gray-600">JSX Support</th>
              <th className="p-2 border border-gray-600">Type Checking</th>
              <th className="p-2 border border-gray-600">Use Case</th>
            </tr>
          </thead>
          <tbody className="border border-gray-800">
            {fileComparison.map((row) => (
              <tr key={row.ext} className="bg-gray-800">
                <td className="p-2 border border-gray-600">{row.ext}</td>
                <td className="p-2 border border-gray-600">{row.jsxSupport}</td>
                <td className="p-2 border border-gray-600">{row.typeCheck}</td>
                <td className="p-2 border border-gray-600">{row.useCase}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-sm text-orange-500 my-4">
          <strong>ℹ️ Summary: </strong>
          <p>
            Use <code className="text-green-300">.js</code> for standard JavaScript files when you
            don’t need JSX or static typing.
          </p>
          <p>
            Choose <code className="text-green-300">.jsx</code> if you're writing React components
            using JavaScript.{' '}
          </p>
          <p>
            Use <code className="text-green-300">.ts</code> for general TypeScript code without JSX,
            especially for utility functions, APIs, or configuration.{' '}
          </p>
          <p>
            Pick <code className="text-green-300">.tsx</code> when working with React and TypeScript
            to take full advantage of type safety in UI components.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
