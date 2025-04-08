"use client";

import { demos } from "../../components/hooks/hook-demos-config";

export default function HooksSection() {
  return (
    <div className="text-white max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🔁 React Hooks</h1>
      <p className="text-sm text-gray-400 mb-6">
        Explore core React hooks interactively. See how <code>useState</code>,{" "}
        <code>useContext</code>, <code>useMemo</code>, and others behave with
        live updates and examples.
      </p>
      Select a demo:
      <nav className="flex gap-4 flex-wrap text-sm text-blue-300 underline mb-6">
        {demos.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="hover:text-blue-200 transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
      {demos.map(({ id, Component }) => (
        <section
          key={id}
          id={id}
          className="mb-10 border border-gray-700 bg-gray-800 p-2 rounded shadow"
        >
          <Component />
        </section>
      ))}
    </div>
  );
}
