export const FRAME_INTERVAL_MS = 800;
export const SPRITE_SHEET = "/images/home/ranpo-sprite.webp";

export const IDLE_FRAMES = [
  { id: "idle-01", backgroundPosition: "4.077415% 0%" },
  { id: "idle-02", backgroundPosition: "33.239384% 0%" },
];

export const HOVER_FRAMES = [
  { id: "hover-01", backgroundPosition: "62.363773% 0%" },
  { id: "hover-02", backgroundPosition: "91.525742% 0%" },
  { id: "hover-03", backgroundPosition: "4.077415% 97.970688%" },
  { id: "hover-04", backgroundPosition: "33.239384% 97.970688%" },
  { id: "hover-05", backgroundPosition: "62.363773% 97.970688%" },
  { id: "hover-06", backgroundPosition: "91.525742% 97.970688%" },
];

/**
 * @param {number} currentIndex
 * @param {readonly unknown[]} frames
 */
export function getNextFrameIndex(currentIndex, frames) {
  return (currentIndex + 1) % frames.length;
}
