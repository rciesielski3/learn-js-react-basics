'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { renderingExamples } from '@/data/nextjs/rendering';

export default function RenderingStrategies() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
      <SectionHeader
        title="💧 Next.js - Rendering Strategies"
        description="Understand CSR, SSR, SSG, ISR and how hydration connects them to interactive UI."
      />
      {renderingExamples.map((ex) => (
        <ExampleBlock
          key={ex.id}
          id={ex.id}
          name={ex.name}
          description={ex.description}
          code={ex.code}
          usage={ex.usage}
          result={ex.result}
        />
      ))}
    </div>
  );
}
