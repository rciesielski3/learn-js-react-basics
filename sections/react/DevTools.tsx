'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { devtoolsTips } from '@/data/react/devtools';

export default function DevTools() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="🛠️ React DevTools"
          description="Learn how to inspect and debug your React components using the React Developer Tools browser extension."
        />
        {devtoolsTips.map((tip) => (
          <ExampleBlock
            key={tip.id}
            id={tip.id}
            name={tip.name}
            description={tip.description}
            code={tip.code}
            usage={tip.usage}
            result={tip.result}
          />
        ))}
      </div>
    </div>
  );
}
