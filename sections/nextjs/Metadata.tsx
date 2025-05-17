'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { metadataExamples } from '@/data/nextjs/metadata';

export default function Metadata() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="max-w-3xl p-6 bg-gray-700 border border-gray-600 rounded">
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
