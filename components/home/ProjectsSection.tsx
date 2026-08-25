import { PROJECT_VARIANT_STYLES, PROJECTS } from "@/data/projects";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LAYOUT } from "@/config/layout";

export default function ProjectsSection() {
  const featuredProjects = [...PROJECTS].slice(0, 3);

  return (
    <section id="projects">
      <MaxWidthWrapper className="space-y-6 pt-10 pb-5">
        <div>
          <h2 className="text-[21.5px] font-[640] tracking-tighter">
            Featured Projects
          </h2>
        </div>
        <div className="space-y-5.5">
          {featuredProjects.map((project, i) => {
            const variantStyles = PROJECT_VARIANT_STYLES[project.variant];
            const IconBg = variantStyles.iconBg;

            return (
              <article className="group" key={i}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4"
                >
                  <div className={cn("size-fit rounded-md p-3", IconBg)}>
                    <div className="relative h-9.25 min-w-9.25">
                      <Image
                        src={project.coverImage}
                        alt={`${project.title} Image`}
                        fill
                        priority
                        className="pointer-events-none object-contain drop-shadow-xs transition-transform duration-300 ease-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <header className="space-y-2">
                      <div className="-space-y-px">
                        <h3 className="font-semibold underline decoration-transparent decoration-[1.75px] transition-all duration-200 ease-out group-hover:decoration-current">
                          {project.title}
                        </h3>
                        {/* <p
                className={cn(
                  "flex min-w-fit items-center gap-2 border px-2 py-px text-[10px] font-bold",
                  project.StatusClassName,
                )}
              >
                <StatusIcon className="size-3" />
                {project.StatusLabel}
              </p> */}
                        <p className="line-clamp-2 text-sm font-[380]">
                          {project.description}
                        </p>
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm font-[360]">
                        {project.longDescription}
                      </p>
                    </header>
                    {/* <footer className="flex flex-wrap gap-2 text-xs font-light text-white">
            {project.techStack.map((item, i) => (
              <span key={i} className="bg-primary/50 px-1.5 py-1">
                {item}
              </span>
            ))}
          </footer> */}
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </MaxWidthWrapper>
      <hr
        className={cn(
          "mx-auto w-[93%] border-t-2 border-dotted border-gray-200",
          LAYOUT.container,
        )}
      />
    </section>
  );
}
