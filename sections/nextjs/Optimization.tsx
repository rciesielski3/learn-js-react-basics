'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { optimizationExamples } from '@/data/nextjs/optimization';

export default function Optimization() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
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
    </div>
  );
}
