'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { serverComponentExamples } from '@/data/nextjs/serverComponents';

export default function ServerComponents() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
      <SectionHeader
        title="🧱 React Server Components (RSC)"
        description="Server Components render on the server, allow backend access, and send minimal JS to the client."
      />
      {serverComponentExamples.map((ex) => (
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
