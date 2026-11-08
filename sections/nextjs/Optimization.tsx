'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { optimizationExamples } from '@/data/nextjs/optimization';

export default function Optimization() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
      <SectionHeader
        title="⚙️ Next.js Optimization Techniques"
        description="Next.js provides built-in tools for optimizing performance, assets, fonts, and script loading."
      />
      {optimizationExamples.map((example) => (
        <ExampleBlock
          key={example.id}
          id={example.id}
          name={example.name}
          description={example.description}
          code={example.code}
          usage={example.usage}
          result={example.result}
        />
      ))}
    </div>
  );
}
