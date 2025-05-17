'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { summaryComparison } from '@/data/nextjs/summary';

export default function NextSummary() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="mt-6 p-6 max-w-3xl mx-auto bg-gray-700 border border-gray-500 rounded">
        <SectionHeader
          title="🔄 React vs Next.js Summary"
          description="Compare the core responsibilities, strengths, and limitations of React and Next.js with real-world perspective."
        />
        <table className="w-full text-sm text-gray-300 mt-6">
          <thead>
            <tr className="text-left border border-gray-800 bg-gray-600">
              <th className="py-2 px-2">Feature</th>
              <th className="py-2 px-2">React</th>
              <th className="py-2 px-2">Next.js</th>
            </tr>
          </thead>
          <tbody>
            {summaryComparison.map((item) => (
              <tr key={item.feature} className="border border-gray-800">
                <td className="py-2 px-2 font-semibold">{item.feature}</td>
                <td className="py-2 px-2">{item.react}</td>
                <td className="py-2 px-2">{item.next}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-400 pt-10">
          <strong>Summary:</strong> React is a powerful UI library for building components, while
          Next.js is a full-stack framework built on top of React that handles routing, rendering
          strategies, data fetching, optimization, and deployment. Use React when you need
          flexibility and full control over setup. Choose Next.js when you want built-in server
          rendering, routing, API support, and performance best practices out of the box.
        </p>
      </div>
    </div>
  );
}
