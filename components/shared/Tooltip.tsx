"use client";

import React from "react";

import { TooltipProps } from "./types";

export function Tooltip({ children, content, position = "top" }: TooltipProps) {
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute z-50 hidden group-hover:block px-3 py-2 text-xs text-jt-ink bg-jt-bg/95 backdrop-blur-md border border-white/10 rounded-lg shadow-lg w-max ${
          position === "top"
            ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
            : position === "bottom"
            ? "top-full left-1/2 -translate-x-1/2 mt-2"
            : position === "left"
            ? "right-full top-1/2 -translate-y-1/2 mr-2"
            : "left-full top-1/2 -translate-y-1/2 ml-2"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
