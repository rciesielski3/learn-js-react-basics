'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { renderingExamples } from '@/data/nextjs/rendering';

export default function RenderingStrategies() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="max-w-3xl p-6 bg-gray-700 rounded border border-gray-500">
        <SectionHeader
          title="🧩 Next.js - Rendering Strategies"
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
    </div>
  );
}
