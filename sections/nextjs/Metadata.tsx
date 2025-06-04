'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { metadataExamples } from '@/data/nextjs/metadata';

export default function Metadata() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-800 to-gray-500">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="🔖 Next.js Metadata API"
          description="Use static or dynamic metadata in App Router to control page titles, descriptions, Open Graph, Twitter cards, and SEO."
        />
        {metadataExamples.map((example) => (
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
