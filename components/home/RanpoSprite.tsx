"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import {
  FRAME_INTERVAL_MS,
  HOVER_FRAMES,
  IDLE_FRAMES,
  SPRITE_SHEET,
  getNextFrameIndex,
} from "./hero-animation.mjs";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);

  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export default function RanpoSprite() {
  const [isHovered, setIsHovered] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
  const activeFrames = isHovered ? HOVER_FRAMES : IDLE_FRAMES;
  const activeFrame = activeFrames[frameIndex];

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setFrameIndex((currentIndex) =>
        getNextFrameIndex(currentIndex, activeFrames),
      );
    }, FRAME_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [activeFrames, prefersReducedMotion]);

  function changeAnimationState(hovered: boolean) {
    setIsHovered(hovered);
    setFrameIndex(0);
  }

  return (
    <div
      className="relative aspect-square w-32 shrink-0 cursor-default bg-size-[400%_200%] bg-no-repeat drop-shadow-[0_0_8px_rgba(0,0,0,0.2)] contain-[paint] md:w-54"
      data-frame={activeFrame.id}
      data-state={isHovered ? "hover" : "idle"}
      onPointerEnter={() => changeAnimationState(true)}
      onPointerLeave={() => changeAnimationState(false)}
      role="img"
      aria-label="Pixel art character of Ranpo"
      style={{
        backgroundImage: `url("${SPRITE_SHEET}")`,
        backgroundPosition: activeFrame.backgroundPosition,
      }}
    />
  );
}
