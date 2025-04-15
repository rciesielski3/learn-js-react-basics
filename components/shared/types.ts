export type ExampleHookData = {
  sampleSnippet: string;
  visualReprezentation: string;
};

export type ModalProps = {
  name: string;
  onClose: () => void;
  sampleSnippet: string;
  visualReprezentation: string;
};

export type Props = {
  id: string;
  name: string;
  description?: string;
  code: string;
  usage: string;
  result: string;
  sampleSnippet?: string;
  visualReprezentation?: string;
};

export type InfoBoxProps = {
  title: string;
  description: string;
  code: string;
  children?: React.ReactNode;
};

export type SectionHeaderProps = {
  title: string;
  description?: string;
};

type TooltipPosition = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPosition;
};
