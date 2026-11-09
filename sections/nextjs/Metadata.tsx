'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { metadataExamples } from '@/data/nextjs/metadata';

export default function Metadata() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
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
  );
}
