'use client';

import React from 'react';

import { ui } from '@/components/shared/theme';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { devtoolsTips } from '@/data/react/devtools';

export default function DevTools() {
  return (
    <div className="space-y-6">
      <div className={ui.card}>
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
