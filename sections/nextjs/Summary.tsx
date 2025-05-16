'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { summaryComparison } from '@/data/nextjs/summary';

export default function NextSummary() {
  return (
    <div className="flex justify-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="max-w-4xl w-full p-6 bg-gray-700 border border-gray-600 rounded">
        <SectionHeader
          title="🔄 React vs Next.js Summary"
          description="Compare the core responsibilities, strengths, and limitations of React and Next.js with real-world perspective."
        />
        <table className="w-full text-sm text-gray-300 mt-6">
          <thead>
            <tr className="text-left border-b border-gray-600">
              <th className="py-2 px-2">Feature</th>
              <th className="py-2 px-2">React</th>
              <th className="py-2 px-2">Next.js</th>
            </tr>
          </thead>
          <tbody>
            {summaryComparison.map((item) => (
              <tr key={item.feature} className="border-b border-gray-700">
                <td className="py-2 px-2 font-semibold">{item.feature}</td>
                <td className="py-2 px-2">{item.react}</td>
                <td className="py-2 px-2">{item.next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
