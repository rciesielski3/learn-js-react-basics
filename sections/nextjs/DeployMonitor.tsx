'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { deployMonitorTopics } from '@/data/nextjs/deployMonitor';

export default function DeployMonitor() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
      <SectionHeader
        title="📊 Next.js Deploy & Monitor"
        description="Learn how to deploy, monitor, and maintain your Next.js app using Vercel, GitHub, analytics, and logging tools."
      />
      {deployMonitorTopics.map((example) => (
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
