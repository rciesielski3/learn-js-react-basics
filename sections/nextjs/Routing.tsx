'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { routingExamples } from '@/data/nextjs/routing';

export default function Routing() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
      <SectionHeader
        title="🗂️ Next.js - Routing"
        description="Understand Pages vs App Router, dynamic routes, nesting, layouts, and key differences in behavior."
      />
      {routingExamples.map((ex) => (
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
