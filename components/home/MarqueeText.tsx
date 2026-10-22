"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeTextProps {
  text: string;
  className?: string;
  speedSeconds?: number;
}

export default function MarqueeText({
  text,
  className,
  speedSeconds = 12,
}: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !measureRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const textWidth = measureRef.current.scrollWidth;
      setIsOverflow(textWidth > containerWidth);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden select-none",
        isOverflow && [
          "[mask-image:linear-gradient(to_right,transparent_0%,black_16px,black_calc(100%-16px),transparent_100%)]",
          "[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_16px,black_calc(100%-16px),transparent_100%)]",
        ],
        className,
      )}
      title={text}
    >
      {/* Invisible measurement element to gauge natural text width */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute top-0 left-0 whitespace-nowrap"
      >
        {text}
      </span>

      {isOverflow ? (
        <>
          <div
            className="animate-marquee flex w-max shrink-0 hover:[animation-play-state:paused] motion-reduce:animate-none"
            style={{ animationDuration: `${speedSeconds}s` }}
          >
            <span className="pr-8 whitespace-nowrap">{text}</span>
            <span className="pr-8 whitespace-nowrap" aria-hidden="true">
              {text}
            </span>
          </div>
          {/* Subtle edge blur overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-3 backdrop-blur-[1px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-3 backdrop-blur-[1px]"
          />
        </>
      ) : (
        <p className="whitespace-nowrap">{text}</p>
      )}
    </div>
  );
}
