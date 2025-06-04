'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';

export default function VirtualDomSection() {
  const [text, setText] = React.useState('Text entered above will appear here');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-800 to-gray-500">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="⚛️ Virtual DOM Visualizer"
          description="This demo shows how React efficiently re-renders only the part of the DOM that changes. Type below to see real-time updates."
        />
        <div className="text-sm font-medium text-gray-400">Enter text:</div>
        <input
          type="text"
          onChange={handleChange}
          className="bg-gray-800 border border-gray-600 text-blue-300 p-2 rounded w-full mb-4 text-base"
          placeholder="Type something..."
        />

        <div className="text-sm text-gray-400 mb-1">Rendered Text:</div>
        <div className="bg-gray-900 p-2 text-yellow-300 rounded border border-gray-600 text-base">
          {text}
        </div>
      </div>
    </div>
  );
}
