'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { cachingExamples } from '@/data/nextjs/caching';

export default function Caching() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
      <SectionHeader
        title="🗃️ Caching & Revalidation in Next.js"
        description="Next.js supports static and dynamic caching strategies out of the box, including ISR, fetch caching, and smart revalidation."
      />
      {cachingExamples.map((example) => (
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
