import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { LAYOUT } from "@/config/layout";
import RanpoSprite from "./RanpoSprite";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="pt-30 pb-10">
        <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:justify-between sm:gap-3">
          <div className="min-w-0 flex-1 space-y-5">
            <div>
              <div className="group relative h-[30.5px] overflow-hidden">
                <h1 className="font-architects-daughter absolute top-0 text-2xl leading-none font-bold tracking-[3.1px] transition-all duration-400 group-hover:top-8">
                  Bagus Rahmawan
                </h1>
                <p className="font-architects-daughter absolute top-8 text-2xl leading-none font-bold tracking-[3.3px] transition-all duration-400 group-hover:top-0">
                  @bagoesrex
                </p>
              </div>
              <p className="text-muted-foreground">Tech Enthusiast</p>
            </div>
            <p>
              A tech enthusiast with a strong interest in building responsive
              and interactive web applications. I enjoy experimenting with new
              technologies and creating clean user interfaces.
            </p>
          </div>
          <div>
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
