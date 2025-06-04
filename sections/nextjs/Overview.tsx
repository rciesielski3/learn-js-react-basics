'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { nextOverviewTopics } from '@/data/nextjs/overview';

export default function NextOverview() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="mt-6 p-6 max-w-3xl mx-auto bg-gray-700 border border-gray-500 rounded">
        <SectionHeader
          title="⚡ Next.js Overview"
          description="Understand what makes Next.js different from React, and how it solves rendering, caching, and routing challenges for modern web apps."
        />

        <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
          {nextOverviewTopics.map((topic) => (
            <li key={topic.id}>
              <strong>{topic.title}:</strong> {topic.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
