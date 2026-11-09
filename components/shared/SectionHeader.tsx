import { SectionHeaderProps } from "./types";
import { ui } from "./theme";

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-xl font-semibold text-jt-ink md:text-2xl">{title}</h2>
      {description && <p className={`${ui.body} text-sm`}>{description}</p>}
    </div>
  );
}
