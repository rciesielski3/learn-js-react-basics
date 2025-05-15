'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { serverComponentExamples } from '@/data/nextjs/server-components';

export default function ServerComponents() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="max-w-3xl p-6 bg-gray-700 rounded border border-gray-500">
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
    </div>
  );
}
