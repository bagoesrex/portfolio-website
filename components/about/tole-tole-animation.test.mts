import assert from "node:assert/strict";
import test from "node:test";

import * as toleAnimation from "./tole-tole-animation.mjs";
import {
  BODY_ANCHOR,
  DANCE_FRAMES,
  DANCE_INTERVAL_MS,
  IDLE_FRAMES,
  INITIAL_ANIMATION_STATE,
  SPRITE_COLUMNS,
  SPRITE_FRAMES,
  SPRITE_ROWS,
  SPRITE_SHEET,
  getCurrentFrame,
  getNextAnimationState,
  shouldDance,
} from "./tole-tole-animation.mjs";

test("uses five aligned full-body variants from one character anchor", () => {
  assert.equal(SPRITE_SHEET, "/images/about/tole-tole-sprite.webp");
  assert.equal(SPRITE_COLUMNS, 5);
  assert.equal(SPRITE_ROWS, 1);
  assert.equal(SPRITE_FRAMES.length, 5);
  assert.equal(
    new Set(SPRITE_FRAMES.map((frame) => frame.backgroundPosition)).size,
    5,
  );
  assert.deepEqual(
    SPRITE_FRAMES.map((frame) => frame.bodyAnchor),
    Array.from({ length: 5 }, () => BODY_ANCHOR),
  );
});

test("keeps the viral stare dominant while occasionally meowing", () => {
  assert.equal(IDLE_FRAMES.length, 4);
  assert.deepEqual(
    IDLE_FRAMES.map((frame) => frame.sourceFrame),
    [0, 0, 1, 0],
  );
  assert.deepEqual(
    IDLE_FRAMES.map((frame) => frame.expression),
    ["viral-stare", "viral-stare", "meowing", "viral-stare"],
  );
});

test("swaps only the current sprite frame without crossfade state", () => {
  assert.equal("FRAME_CROSSFADE_MS" in toleAnimation, false);
  assert.equal("getPreviousFrame" in toleAnimation, false);
});

test("cycles through internet-inspired accessories over a six-second dance", () => {
  assert.equal(DANCE_INTERVAL_MS, 260);
  assert.equal(DANCE_FRAMES.length, 24);
  assert.deepEqual(
    [...new Set(DANCE_FRAMES.map((frame) => frame.accessory))],
    ["rose-glasses", "blue-visor", "melon-helmet"],
  );
  assert.deepEqual(
    [...new Set(DANCE_FRAMES.map((frame) => frame.sourceFrame))],
    [2, 3, 4],
  );
  assert.ok(new Set(DANCE_FRAMES.map((frame) => frame.transform)).size >= 6);
  assert.equal(DANCE_FRAMES.length * DANCE_INTERVAL_MS, 6240);
  assert.equal(DANCE_FRAMES[0].isRest, true);
  assert.equal(DANCE_FRAMES.at(-1)?.isRest, true);
});

test("activates the dance while hovered or pinned", () => {
  assert.equal(shouldDance(false, false), false);
  assert.equal(shouldDance(true, false), true);
  assert.equal(shouldDance(false, true), true);
  assert.equal(shouldDance(true, true), true);
});

test("starts the dance from a centered resting frame", () => {
  const nextState = getNextAnimationState(INITIAL_ANIMATION_STATE, true);

  assert.deepEqual(nextState, { sequence: "dance", frameIndex: 0 });
  assert.equal(getCurrentFrame(nextState).isRest, true);
});

test("returns to idle only after reaching a centered resting frame", () => {
  const turnedState = { sequence: "dance", frameIndex: 5 } as const;
  const returningState = getNextAnimationState(turnedState, false);
  const restingState = getNextAnimationState(returningState, false);
  const idleState = getNextAnimationState(restingState, false);

  assert.deepEqual(returningState, { sequence: "dance", frameIndex: 6 });
  assert.deepEqual(restingState, { sequence: "dance", frameIndex: 7 });
  assert.equal(getCurrentFrame(restingState).isRest, true);
  assert.deepEqual(idleState, INITIAL_ANIMATION_STATE);
});

test("loops both animation sequences", () => {
  const lastIdleState = {
    sequence: "idle",
    frameIndex: IDLE_FRAMES.length - 1,
  } as const;
  const lastDanceState = {
    sequence: "dance",
    frameIndex: DANCE_FRAMES.length - 1,
  } as const;

  assert.deepEqual(getNextAnimationState(lastIdleState, false), {
    sequence: "idle",
    frameIndex: 0,
  });
  assert.deepEqual(getNextAnimationState(lastDanceState, true), {
    sequence: "dance",
    frameIndex: 0,
  });
});
