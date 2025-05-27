'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { serverActionsExamples } from '@/data/nextjs/serverActions';

export default function ServerActions() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="📬 Server Actions in Next.js"
          description="Server Actions let you submit forms and trigger logic directly on the server without an API route or client JavaScript."
        />
        {serverActionsExamples.map((example) => (
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
