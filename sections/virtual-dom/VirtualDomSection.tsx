"use client";

import React from "react";

import { SectionHeader } from "@/components/shared";

export default function VirtualDomSection() {
  const [text, setText] = React.useState("Type something...");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded text-white">
      <SectionHeader
        title="⚛️ Virtual DOM Visualizer"
        description="This demo shows how React efficiently re-renders only the part of the DOM that changes. Type below to see real-time updates."
      />
      <div className="text-sm font-medium text-gray-400">Enter text:</div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="bg-gray-600 border border-gray-600 text-blue-300 p-2 rounded w-full mb-4"
        placeholder="Type something..."
      />

      <div className="text-sm text-gray-400 mb-1">Rendered Text:</div>
      <div className="bg-gray-900 p-2 text-yellow-300 rounded border border-gray-600">
        {text}
      </div>
    </div>
  );
}
