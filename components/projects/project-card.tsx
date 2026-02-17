import { PROJECT_STATUS_CONFIG } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { Project } from "@/types/project";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, status, techStack, coverImage, githubUrl } = project;

  const statusConfig = PROJECT_STATUS_CONFIG[status];

  const StatusIcon = statusConfig.icon;
  const StatusLabel = statusConfig.label;
  const StatusClassName = statusConfig.className;

  return (
    <article className="group">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-4 rounded-[7px] px-3 py-3.5 transition hover:bg-gray-200/40 md:items-center"
      >
        <div className="relative h-15 min-w-15 overflow-hidden rounded-[5px]">
          <Image src={coverImage} alt={`${title} Image`} fill priority className="object-cover transition-transform group-hover:scale-130" />
        </div>
        <div className="space-y-3">
          <header className="space-y-1">
            <div className="flex justify-between gap-2 md:items-center md:justify-start">
              <h2 className="text-md -mt-1 line-clamp-2 leading-snug font-medium decoration-2 group-hover:underline">{title}</h2>
              <p className={cn("flex size-fit min-w-fit items-center gap-2 px-2 py-0.75 text-xs font-light", StatusClassName)}>
                <StatusIcon className="size-3.5" />
                {StatusLabel}
              </p>
            </div>
            <p className="text-muted-foreground line-clamp-2 text-sm font-light">{description}</p>
          </header>
          <footer className="flex flex-wrap gap-2 text-xs font-light text-white">
            {techStack.map((item, i) => (
              <span key={i} className="bg-primary/50 px-1.5 py-1">
                {item}
              </span>
            ))}
          </footer>
        </div>
      </a>
    </article>
  );
}
