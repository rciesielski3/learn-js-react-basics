'use client';

import React from 'react';

import { SectionHeader, ExampleBlock } from '@/components/shared';
import { deployMonitorTopics } from '@/data/nextjs/deployMonitor';

export default function DeployMonitor() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="max-w-3xl w-full bg-gray-700 border border-gray-600 rounded p-6">
        <SectionHeader
          title="🚀 Next.js Deploy & Monitor"
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
    </div>
  );
}
