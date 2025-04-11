"use client";

import React from "react";

export function Tooltip({
  children,
  content,
  position = "top",
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}) {
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute z-50 hidden group-hover:block px-3 py-2 text-xs text-white bg-gray-900 rounded shadow-md w-max ${
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
