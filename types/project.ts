export type ProjectStatus = "completed" | "in-progress" | "archived";

export type ProjectVariant = "gray" | "skyblue" | "blue" | "green" | "purple";

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  techStack: string[];
  coverImage: string;
  githubUrl: string;
  variant: ProjectVariant;
}
