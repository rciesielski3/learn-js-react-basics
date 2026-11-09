'use client';

import React from 'react';
import { ui } from '@/components/shared/theme';

import { SectionHeader } from '@/components/shared';
import { fileExamples, fileComparison } from '@/data/js/fileTypes';

export default function FileTypeExplanation() {
  return (
    <div className="space-y-6">
      <div className={ui.card}>
        <SectionHeader
          title="📄 JS, JSX, TS, and TSX Explained"
          description="Learn what each file extension is used for in modern JavaScript and TypeScript projects, especially with React."
        />

        {fileExamples.map((example, idx) => (
          <div key={idx} className={`mb-10 ${ui.cardInner}`}>
            <h3 className={`${ui.h2} mb-1 text-xl`}>{example.title}</h3>
            <p className="text-jt-muted mb-4">{example.description}</p>
            <pre className={ui.code}>
              <code>{example.code}</code>
            </pre>
          </div>
        ))}

        <h3 className={`${ui.h2} my-4 text-2xl`}>🔍 Comparison Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-jt-muted">
            <thead>
              <tr className="text-left border border-white/10 bg-white/[0.06] text-jt-ink">
                <th className="p-2 border border-white/10">Extension</th>
                <th className="p-2 border border-white/10">JSX Support</th>
                <th className="p-2 border border-white/10">Type Checking</th>
                <th className="p-2 border border-white/10">Use Case</th>
              </tr>
            </thead>
            <tbody className="border border-white/10">
              {fileComparison.map((row) => (
                <tr key={row.ext} className="bg-white/[0.03]">
                  <td className="p-2 border border-white/10">{row.ext}</td>
                  <td className="p-2 border border-white/10">{row.jsxSupport}</td>
                  <td className="p-2 border border-white/10">{row.typeCheck}</td>
                  <td className="p-2 border border-white/10">{row.useCase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-sm text-jt-muted my-4">
          <strong>ℹ️ Summary: </strong>
          <p>
            Use <code className="text-accent">.js</code> for standard JavaScript files when you
            don’t need JSX or static typing.
          </p>
          <p>
            Choose <code className="text-accent">.jsx</code> if you&apos;re writing React components
            using JavaScript.{' '}
          </p>
          <p>
            Use <code className="text-accent">.ts</code> for general TypeScript code without JSX,
            especially for utility functions, APIs, or configuration.{' '}
          </p>
          <p>
            Pick <code className="text-accent">.tsx</code> when working with React and TypeScript to
            take full advantage of type safety in UI components.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
