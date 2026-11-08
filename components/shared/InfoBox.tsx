"use client";

import React from "react";

import { InfoBoxProps } from "./types";
import { ui } from "./theme";

export function InfoBox({ title, description, code, children }: InfoBoxProps) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={`${ui.cardInner} mb-6 w-full`}>
      <div
        className="flex cursor-pointer items-center justify-between gap-4"
        onClick={() => setExpanded((e) => !e)}
      >
        <h3 className={ui.h3}>{title}</h3>
        <span className="shrink-0 text-xs text-accent">
          {expanded ? "Hide Details" : "Show Details"}
        </span>
      </div>

      {expanded && (
        <div className="mt-3">
          <p className={`${ui.muted} mb-3 whitespace-pre-wrap`}>
            {description}
          </p>
          <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/50 p-3 text-xs text-accent">
            <code>{code}</code>
          </pre>

          {children && <div className="mt-4">{children}</div>}
        </div>
      )}
    </div>
  );
}
