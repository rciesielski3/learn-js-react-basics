"use client";

import { demos } from "../../../components/hooks/hook-demos-config";

export default function HooksSection() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-800">
      <div className="text-white max-w-3xl mx-auto p-6 border border-gray-400 bg-gray-700 rounded">
        <h1 className="text-2xl font-bold mb-4">🔁 React Hooks</h1>
        <p className="text-sm text-gray-400 mb-6">
          Explore core React hooks interactively. See how <code>useState</code>,
          <code>useContext</code>, <code>useMemo</code>, and others behave with
          live updates and examples.
        </p>
        <div className="border border-solid p-4 rounded-lg mb-6 bg-gray-600">
          <p className="text-sm mb-4">
            Click on the demo name to see the code and live example:
          </p>
          <nav className="flex gap-6 flex-wrap text-sm text-blue-300 mt-5">
            {demos.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:scale-105 bg-gray-800 rounded px-2 py-1"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="text-sm text-gray-400 mb-2">Hook lists:</p>
        {demos.map(({ id, Component }) => (
          <section
            key={id}
            id={id}
            className="mb-6 border border-gray-700 bg-gray-800 p-2 shadow rounded-lg"
          >
            <Component />
          </section>
        ))}
      </div>
    </div>
  );
}
