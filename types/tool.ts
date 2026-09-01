export interface Tool {
  name: string;
  type?: string;
  icon: string;
  href?: string;
  tags?: string[];
  className?: string;
}

export type ToolCategory = "everyday" | "coding" | "software";

export type Tools = Record<ToolCategory, Tool[]>;
