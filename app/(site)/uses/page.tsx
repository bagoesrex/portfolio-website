import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { LAYOUT } from "@/config/layout";
import { TOOLS } from "@/data/tools";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function UsesPage() {
  const everydayTools = [...TOOLS.everyday];
  const softwareTools = [...TOOLS.software];

  return (
    <main>
      <MaxWidthWrapper className="space-y-6.5 pt-28 pb-10">
        <div className="space-y-4">
          <h1 className="text-[28px] font-[490] tracking-[-2px]">
            What do I use?
          </h1>
          <p className="text-sm md:text-base">
            Here are the tools, software, and apps I use on a daily basis.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-[21.5px] font-[640] tracking-tighter">
            Everyday
          </h2>
          <div className="grid grid-cols-2 border-t border-l border-gray-300 text-center select-none md:grid-cols-3">
            {everydayTools.map((tool, i) => (
              <div
                key={i}
                className="flex min-h-40 flex-col items-center gap-2 border-r border-b border-gray-300 px-4 py-5"
              >
                <div className="relative size-20">
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} Image`}
                    fill
                    priority
                    draggable={false}
                    className={cn(
                      "pointer-events-none object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.21)] select-none",
                      tool.className,
                    )}
                  />
                </div>
                <div>
                  <h3 className="text-md font-semibold capitalize">
                    {tool.type}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-5 font-[380] md:text-sm">
                    {tool.name}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {tool.tags?.map((tag, i) => (
                    <div
                      key={i}
                      className="bg-primary/5 size-fit rounded-4xl px-2.5 py-0.5 text-[10px] md:text-xs"
                    >
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-[21.5px] font-[640] tracking-tighter">
            Software
          </h2>
          <div className="grid grid-cols-3 border-t border-l border-gray-300 text-center select-none md:grid-cols-5">
            {softwareTools.map((tool, i) => (
              <div key={i} className="group">
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-25 flex-col items-center gap-2 border-r border-b border-gray-300 px-4 py-5"
                >
                  <div className="relative size-8">
                    <Image
                      src={tool.icon}
                      alt={`${tool.name} Image`}
                      fill
                      priority
                      draggable={false}
                      className={cn(
                        "pointer-events-none scale-95 object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.19)] duration-400 ease-out select-none group-hover:scale-103 group-hover:rotate-3",
                        tool.className,
                      )}
                    />
                  </div>
                  <div>
                    <h3 className="border-b-2 border-dotted text-xs font-semibold capitalize duration-400 group-hover:border-solid group-hover:border-black md:text-sm">
                      {tool.name}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      <hr
        className={cn(
          "mx-auto w-[93%] border-t-2 border-dotted border-gray-200",
          LAYOUT.container,
        )}
      />
    </main>
  );
}
