'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { routingExamples } from '@/data/nextjs/routing';

export default function Routing() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="max-w-3xl p-6 bg-gray-700 border border-gray-500 rounded">
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
