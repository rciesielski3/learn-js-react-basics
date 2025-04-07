import React from "react";

type SectionHeaderProps = {
  title: string;
  description?: string;
};

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
      {description && (
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
