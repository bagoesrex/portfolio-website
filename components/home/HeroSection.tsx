import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { LAYOUT } from "@/config/layout";
import RanpoSprite from "./RanpoSprite";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="pt-30 pb-10">
        <div className="flex flex-col-reverse items-center gap-8 px-6 sm:flex-row sm:justify-between sm:gap-3 md:px-0">
          <div className="min-w-0 flex-1 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="group relative h-[30.5px] min-w-59 overflow-hidden">
                  <h1 className="font-architects-daughter absolute top-0 text-xl leading-none font-bold tracking-[3.1px] transition-all duration-400 group-hover:top-8 md:text-2xl">
                    Bagus Rahmawan
                  </h1>
                  <p className="font-architects-daughter absolute top-8 text-2xl leading-none font-bold tracking-[3.3px] transition-all duration-400 group-hover:top-0">
                    @bagoesrex
                  </p>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  Tech Enthusiast
                </p>
              </div>
              <div className="relative h-32 w-1 md:hidden">
                <div className="absolute top-0 -right-3.5">
                  <RanpoSprite />
                </div>
              </div>
            </div>
            <p className="text-sm md:text-base">
              I enjoy turning ideas into thoughtful digital experiences, with a
              focus on clean interfaces, smooth interactions, and building
              things that feel simple and useful.
            </p>
          </div>
          <div className="hidden md:block">
            <RanpoSprite />
          </div>
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
