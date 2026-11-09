'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { summaryComparison } from '@/data/nextjs/summary';

export default function NextSummary() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
      <SectionHeader
        title="🔄 React vs Next.js Summary"
        description="Compare the core responsibilities, strengths, and limitations of React and Next.js with real-world perspective."
      />
      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[32rem] text-left text-sm text-jt-muted">
          <thead className="bg-white/[0.06] text-jt-ink">
            <tr>
              <th className="px-3 py-2 font-semibold">Feature</th>
              <th className="px-3 py-2 font-semibold">React</th>
              <th className="px-3 py-2 font-semibold">Next.js</th>
            </tr>
          </thead>
          <tbody>
            {summaryComparison.map((item) => (
              <tr key={item.feature} className="border-t border-white/10 bg-white/[0.02]">
                <td className="px-3 py-2 font-semibold text-accent">{item.feature}</td>
                <td className="px-3 py-2">{item.react}</td>
                <td className="px-3 py-2">{item.next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-relaxed text-jt-ink">
        <strong className="text-accent">ℹ️ Summary:</strong> React is a powerful UI library for building components, while
        Next.js is a full-stack framework built on top of React that handles routing, rendering
        strategies, data fetching, optimization, and deployment. Use React when you need
        flexibility and full control over setup. Choose Next.js when you want built-in server
        rendering, routing, API support, and performance best practices out of the box.
      </p>
    </div>
  );
}
