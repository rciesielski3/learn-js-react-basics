'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { middlewareExamples } from '@/data/nextjs/middleware';

export default function Middleware() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
      <SectionHeader
        title="🧱 Next.js Middleware"
        description="Middleware lets you run code before a request is completed. Use it for redirects, rewrites, headers, auth, and more."
      />
      {middlewareExamples.map((example) => (
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
