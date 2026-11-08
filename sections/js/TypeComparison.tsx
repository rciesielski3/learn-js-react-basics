'use client';

import React from 'react';
import { ui } from '@/components/shared/theme';

import { SectionHeader } from '@/components/shared';
import { tsVsJsExamples } from '@/data/js/tsVsJs';

export default function TypeComparison() {
  return (
    <div className="space-y-6">
      <div className={ui.card}>
        <SectionHeader
          title="🆚 JavaScript vs TypeScript"
          description="Page compares core JavaScript features with TypeScript equivalents. Use it to understand how TypeScript enhances JavaScript with type safety and developer tooling."
        />

        {tsVsJsExamples.map((example, idx) => (
          <div key={idx} className={`mb-10 ${ui.cardInner}`}>
            <h3 className={`${ui.h2} mb-1 text-xl`}>{example.title}</h3>
            <p className="text-jt-muted mb-4">{example.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-jt-muted mb-1">JavaScript</p>
                <pre className={ui.code}>
                  <code>{example.jsCode}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-jt-muted mb-1">TypeScript</p>
                <pre className={ui.code}>
                  <code>{example.tsCode}</code>
                </pre>
              </div>
            </div>

            <p className="mt-4 text-jt-muted italic">{example.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
