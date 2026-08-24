import assert from "node:assert/strict";
import test from "node:test";

import {
  FRAME_INTERVAL_MS,
  HOVER_FRAMES,
  IDLE_FRAMES,
  SPRITE_SHEET,
  getNextFrameIndex,
} from "./hero-animation.mjs";

test("idle animation alternates between the first two sprite frames", () => {
  assert.equal(FRAME_INTERVAL_MS, 800);
  assert.equal(SPRITE_SHEET, "/images/home/ranpo-sprite.webp");
  assert.equal(IDLE_FRAMES.length, 2);
  assert.deepEqual(IDLE_FRAMES[0], {
    id: "idle-01",
    backgroundPosition: "4.077415% 0%",
  });
  assert.deepEqual(IDLE_FRAMES[1], {
    id: "idle-02",
    backgroundPosition: "33.239384% 0%",
  });
  assert.equal(getNextFrameIndex(0, IDLE_FRAMES), 1);
  assert.equal(getNextFrameIndex(1, IDLE_FRAMES), 0);
});

test("hover animation cycles through the remaining six sprite frames", () => {
  assert.equal(HOVER_FRAMES.length, 6);
  assert.equal(
    new Set(HOVER_FRAMES.map((frame) => frame.backgroundPosition)).size,
    6,
  );
  assert.equal(getNextFrameIndex(0, HOVER_FRAMES), 1);
  assert.equal(getNextFrameIndex(5, HOVER_FRAMES), 0);
});

test("every frame keeps the same body anchor while cropping the sprite", () => {
  assert.deepEqual(
    HOVER_FRAMES.map((frame) => frame.backgroundPosition),
    [
      "62.363773% 0%",
      "91.525742% 0%",
      "4.077415% 97.970688%",
      "33.239384% 97.970688%",
      "62.363773% 97.970688%",
      "91.525742% 97.970688%",
    ],
  );
});
