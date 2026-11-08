'use client';

import React from 'react';

import { ui } from '@/components/shared/theme';

import { SectionHeader } from '@/components/shared';

export default function VirtualDomSection() {
  const [text, setText] = React.useState('Text entered above will appear here');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="space-y-6">
      <div className={ui.card}>
        <SectionHeader
          title="⚛️ Virtual DOM Visualizer"
          description="This demo shows how React efficiently re-renders only the part of the DOM that changes. Type below to see real-time updates."
        />
        <div className="text-sm font-medium text-jt-muted">Enter text:</div>
        <input
          type="text"
          onChange={handleChange}
          className={`${ui.input} mb-4 text-base`}
          placeholder="Type something..."
        />

        <div className="text-sm text-jt-muted mb-1">Rendered Text:</div>
        <div className="bg-black/40 p-2 text-yellow-200 rounded border border-white/10 text-base">
          {text}
        </div>
      </div>
    </div>
  );
}
