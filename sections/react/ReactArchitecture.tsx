'use client';

import React from 'react';

import { SectionHeader } from '@/components/shared';

export default function ReactArchitecture() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800 text-white">
      <div className="mt-6 p-6 max-w-3xl mx-auto border border-gray-400 bg-gray-700 rounded">
        <SectionHeader
          title="🧠 React Architecture Overview"
          description="Understand how React renders, updates, and manages components behind the scenes — including the role of Virtual DOM, Hooks, Effects, and more."
        />

        <ul className="list-disc list-inside mb-6 text-sm text-gray-300">
          <li>
            <strong>Component Tree:</strong> Built using JSX & composed from functions
          </li>
          <li>
            <strong>Props & State:</strong> Trigger re-renders when data changes
          </li>
          <li>
            <strong>Virtual DOM:</strong> Lightweight JS tree used for diffing updates
          </li>
          <li>
            <strong>Render Phase:</strong> Prepares the next UI state (pure)
          </li>
          <li>
            <strong>Commit Phase:</strong> Updates DOM, runs effects and refs
          </li>
          <li>
            <strong>Context:</strong> Prop drilling solution for global data
          </li>
          <li>
            <strong>Hooks:</strong> Add local state, side effects, memoization, etc.
          </li>
          <li>
            <strong>Error Boundaries:</strong> Catch rendering errors and show fallback
          </li>
          <li>
            <strong>Suspense & Lazy:</strong> Pause rendering until code/data is ready
          </li>
          <li>
            <strong>Portals:</strong> Render UI outside root (modals, tooltips)
          </li>
        </ul>

        <div className="text-sm text-yellow-300 font-mono bg-gray-900 p-4 rounded mb-4 border border-gray-600">
          {`// Simplified lifecycle
User Action → setState()
 → Re-render (Virtual DOM diff)
 → Commit Phase
 → useEffect / useLayoutEffect / refs
`}
        </div>

        <p className="text-sm text-gray-400">
          Understanding this cycle helps you write performant, predictable, and robust React apps.
        </p>
      </div>
    </div>
  );
}
