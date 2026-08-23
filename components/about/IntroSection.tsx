import { SOCIAL_LINKS } from "@/config/socials";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";

export default function IntroSection() {
  return (
    <section id="intro">
      <MaxWidthWrapper className="space-y-6.5 pt-35 pb-20">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">About Me</h1>
          <p>
            Hey there! I’m Bagus Rahmawan, a developer based in Semarang. where
            ideas slowly turn into lines of code.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="space-y-6.5">
            <p>
              I focus on building responsive and interactive web applications
              with clean and maintainable code. I enjoy refining user
              interfaces, improving performance, and continuously sharpening my
              development workflow.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-1.5 text-gray-500"
                >
                  <Icon className="size-5 duration-300 group-hover:scale-110 group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>
          <div className="h-50 min-w-50 bg-amber-300"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
