"use client";

import React from "react";

type InfoBoxProps = {
  title: string;
  description: string;
  code: string;
  children?: React.ReactNode;
};

export function InfoBox({ title, description, code, children }: InfoBoxProps) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="w-full mb-6 border border-gray-500 rounded bg-gray-800 text-white p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded((e) => !e)}
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="text-xs text-gray-300">
          {expanded ? "Hide Details" : "Show Details"}
        </span>
      </div>

      {expanded && (
        <div className="mt-3">
          <p className="text-sm text-gray-300 mb-2 whitespace-pre-wrap">
            {description}
          </p>
          <pre className="bg-gray-900 text-green-400 text-xs p-2 rounded overflow-x-auto">
            <code>{code}</code>
          </pre>

          {children && <div className="mt-4">{children}</div>}
        </div>
      )}
    </div>
  );
}
