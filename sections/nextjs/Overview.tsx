'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';
import { ui } from '@/components/shared/theme';
import { nextOverviewTopics } from '@/data/nextjs/overview';

export default function NextOverview() {
  return (
    <div className={`${ui.card} mx-auto max-w-3xl`}>
      <SectionHeader
        title="🔲 Next.js Overview"
        description="Understand what makes Next.js different from React, and how it solves rendering, caching, and routing challenges for modern web apps."
      />

      <ul className="list-disc list-inside text-sm text-jt-muted space-y-2 marker:text-accent">
        {nextOverviewTopics.map((topic) => (
          <li key={topic.id}>
            <strong className="text-jt-ink">{topic.title}:</strong> {topic.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
