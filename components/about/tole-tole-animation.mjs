export const SPRITE_SHEET = "/images/about/tole-tole-sprite.webp";

export const IDLE_INTERVAL_MS = 600;
export const DANCE_INTERVAL_MS = 260;
export const SPRITE_COLUMNS = 5;
export const SPRITE_ROWS = 1;
export const BODY_ANCHOR = Object.freeze({ x: 160, y: 316 });

function formatPercentage(value) {
  return `${Number(value.toFixed(6))}%`;
}

export const SPRITE_FRAMES = Array.from(
  { length: SPRITE_COLUMNS * SPRITE_ROWS },
  (_, sourceFrame) => {
    const column = sourceFrame % SPRITE_COLUMNS;
    const row = Math.floor(sourceFrame / SPRITE_COLUMNS);

    return {
      id: `source-${String(sourceFrame + 1).padStart(2, "0")}`,
      sourceFrame,
      backgroundPosition: `${formatPercentage(
        (column / Math.max(1, SPRITE_COLUMNS - 1)) * 100,
      )} ${formatPercentage((row / Math.max(1, SPRITE_ROWS - 1)) * 100)}`,
      bodyAnchor: BODY_ANCHOR,
    };
  },
);

const IDLE_FRAME_ORDER = [0, 0, 1, 0];

export const IDLE_FRAMES = IDLE_FRAME_ORDER.map((sourceFrame, index) => ({
  ...SPRITE_FRAMES[sourceFrame],
  id: `idle-${String(index + 1).padStart(2, "0")}`,
  accessory: null,
  expression: sourceFrame === 1 ? "meowing" : "viral-stare",
  transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
  isRest: true,
}));

const DANCE_POSES = [
  {
    transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
    isRest: true,
  },
  { transform: "translate3d(-3px, -2px, 0) rotate(-2deg) scale(1.01)" },
  { transform: "translate3d(-5px, -4px, 0) rotate(-4deg) scale(1.015)" },
  { transform: "translate3d(-2px, -2px, 0) rotate(-2deg) scale(1.01)" },
  { transform: "translate3d(2px, -2px, 0) rotate(2deg) scale(1.01)" },
  { transform: "translate3d(5px, -4px, 0) rotate(4deg) scale(1.015)" },
  { transform: "translate3d(3px, -2px, 0) rotate(2deg) scale(1.01)" },
  {
    transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
    isRest: true,
  },
];
const ACCESSORY_VARIANTS = [
  { sourceFrame: 2, accessory: "rose-glasses" },
  { sourceFrame: 3, accessory: "blue-visor" },
  { sourceFrame: 4, accessory: "melon-helmet" },
];

export const DANCE_FRAMES = ACCESSORY_VARIANTS.flatMap(
  ({ sourceFrame, accessory }) =>
    DANCE_POSES.map((pose, poseIndex) => ({
      ...SPRITE_FRAMES[sourceFrame],
      ...pose,
      id: `dance-${accessory}-${String(poseIndex + 1).padStart(2, "0")}`,
      accessory,
      expression: "playful",
      isRest: pose.isRest ?? false,
    })),
);

export const INITIAL_ANIMATION_STATE = {
  sequence: "idle",
  frameIndex: 0,
};

export function shouldDance(isHovered, isPinned) {
  return isHovered || isPinned;
}

export function getCurrentFrame(state) {
  const frames = state.sequence === "dance" ? DANCE_FRAMES : IDLE_FRAMES;

  return frames[state.frameIndex] ?? frames[0];
}

export function getNextAnimationState(state, isActive) {
  if (isActive) {
    if (state.sequence !== "dance") {
      return { sequence: "dance", frameIndex: 0 };
    }

    return {
      sequence: "dance",
      frameIndex: (state.frameIndex + 1) % DANCE_FRAMES.length,
    };
  }

  if (state.sequence === "idle") {
    return {
      sequence: "idle",
      frameIndex: (state.frameIndex + 1) % IDLE_FRAMES.length,
    };
  }

  if (DANCE_FRAMES[state.frameIndex]?.isRest) {
    return INITIAL_ANIMATION_STATE;
  }

  const nextFrameIndex = (state.frameIndex + 1) % DANCE_FRAMES.length;

  return { sequence: "dance", frameIndex: nextFrameIndex };
}
