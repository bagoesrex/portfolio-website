export type ProjectStatus = "completed" | "in-progress" | "archived";

export type ProjectVariant =
  | "gray"
  | "skyblue"
  | "blue"
  | "darkBlue"
  | "green"
  | "darkgreen"
  | "purple"
  | "orange"
  | "darkOrange";

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  status: ProjectStatus;
  techStack: string[];
  coverImage: string;
  githubUrl: string;
  variant: ProjectVariant;
}
