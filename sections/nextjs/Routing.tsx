'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { routingExamples } from '@/data/nextjs/routing';

export default function Routing() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-800 to-gray-500">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
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
    </div>
  );
}
