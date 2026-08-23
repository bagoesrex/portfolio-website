export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  techStack: string[];
  coverImage: string;
  githubUrl: string;
}
