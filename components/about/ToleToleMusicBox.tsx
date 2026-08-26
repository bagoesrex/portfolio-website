"use client";

import {
  type FocusEvent,
  useEffect,
  useReducer,
  useSyncExternalStore,
} from "react";

import {
  DANCE_INTERVAL_MS,
  IDLE_INTERVAL_MS,
  INITIAL_ANIMATION_STATE,
  SPRITE_SHEET,
  getCurrentFrame,
  getNextAnimationState,
  shouldDance,
} from "./tole-tole-animation.mjs";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);

  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

type MusicBoxState = {
  isHovered: boolean;
  isFocusWithin: boolean;
  isPinned: boolean;
  animationState: {
    sequence: string;
    frameIndex: number;
  };
};

type MusicBoxAction =
  | { type: "hover"; value: boolean }
  | { type: "focus"; value: boolean }
  | { type: "toggle-pinned" }
  | { type: "tick" };

const INITIAL_MUSIC_BOX_STATE: MusicBoxState = {
  isHovered: false,
  isFocusWithin: false,
  isPinned: false,
  animationState: INITIAL_ANIMATION_STATE,
};

function getIsActive(state: MusicBoxState) {
  return shouldDance(state.isHovered || state.isFocusWithin, state.isPinned);
}

function musicBoxReducer(
  state: MusicBoxState,
  action: MusicBoxAction,
): MusicBoxState {
  if (action.type === "tick") {
    return {
      ...state,
      animationState: getNextAnimationState(
        state.animationState,
        getIsActive(state),
      ),
    };
  }

  const wasActive = getIsActive(state);
  const nextState = (() => {
    switch (action.type) {
      case "hover":
        return { ...state, isHovered: action.value };
      case "focus":
        return { ...state, isFocusWithin: action.value };
      case "toggle-pinned":
        return { ...state, isPinned: !state.isPinned };
    }
  })();
  const isActive = getIsActive(nextState);

  if (wasActive === isActive) return nextState;

  return {
    ...nextState,
    animationState: getNextAnimationState(state.animationState, isActive),
  };
}

export default function ToleToleMusicBox() {
  const [state, dispatch] = useReducer(
    musicBoxReducer,
    INITIAL_MUSIC_BOX_STATE,
  );
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
  const { animationState, isPinned } = state;
  const isActive = getIsActive(state);
  const renderedAnimationState = prefersReducedMotion
    ? INITIAL_ANIMATION_STATE
    : animationState;
  const activeFrame = getCurrentFrame(renderedAnimationState);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval =
      animationState.sequence === "dance"
        ? DANCE_INTERVAL_MS
        : IDLE_INTERVAL_MS;
    const timer = window.setInterval(() => {
      dispatch({ type: "tick" });
    }, interval);

    return () => window.clearInterval(timer);
  }, [animationState.sequence, isActive, prefersReducedMotion]);

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    const nextFocusedElement = event.relatedTarget;

    if (
      !(nextFocusedElement instanceof Node) ||
      !event.currentTarget.contains(nextFocusedElement)
    ) {
      dispatch({ type: "focus", value: false });
    }
  }

  function handleFocus(event: FocusEvent<HTMLDivElement>) {
    const focusedElement = event.target;

    if (
      focusedElement instanceof HTMLElement &&
      focusedElement.matches(":focus-visible")
    ) {
      dispatch({ type: "focus", value: true });
    }
  }

  return (
    <div
      className="w-52 shrink-0 self-center text-center select-none"
      data-active={isActive}
      data-pinned={isPinned}
      onBlurCapture={handleBlur}
      onFocusCapture={handleFocus}
      onPointerEnter={() => dispatch({ type: "hover", value: true })}
      onPointerLeave={() => dispatch({ type: "hover", value: false })}
    >
      <div
        aria-label="A full-body Tole Tole cat that meows and dances in playful accessories"
        className="relative z-10 mx-auto aspect-square w-48 cursor-default contain-[paint]"
        data-accessory={activeFrame.accessory ?? "none"}
        data-expression={activeFrame.expression ?? "playful"}
        data-frame={activeFrame.id}
        data-state={animationState.sequence}
        role="img"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-size-[500%_100%] bg-no-repeat transition-transform duration-300 ease-in-out will-change-transform motion-reduce:transition-none"
          style={{
            backgroundImage: `url("${SPRITE_SHEET}")`,
            backgroundPosition: activeFrame.backgroundPosition,
            transform: activeFrame.transform,
            transformOrigin: "50% 94%",
          }}
        />
      </div>

      <div className="relative -mt-4 hidden h-12 rounded-md">
        <button
          aria-label={
            isPinned
              ? "Stop the continuous Tole Tole dance"
              : "Keep the Tole Tole cat dancing"
          }
          aria-pressed={isPinned}
          className={`absolute top-1 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border-2 border-stone-800 shadow-sm transition-[transform,background-color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900 dark:border-stone-200 dark:focus-visible:outline-stone-200 ${
            isPinned
              ? "translate-y-1 bg-orange-300"
              : "bg-amber-100 hover:translate-y-0.5"
          }`}
          onClick={() => dispatch({ type: "toggle-pinned" })}
          type="button"
        >
          <span aria-hidden="true" className="relative block size-6">
            <span className="absolute bottom-0 left-1/2 h-3 w-4 -translate-x-1/2 rounded-full bg-stone-900 dark:bg-stone-700" />
            <span className="absolute top-1 left-0.5 size-2 rounded-full bg-stone-900 dark:bg-stone-700" />
            <span className="absolute top-0 left-1/2 size-2 -translate-x-1/2 rounded-full bg-stone-900 dark:bg-stone-700" />
            <span className="absolute top-1 right-0.5 size-2 rounded-full bg-stone-900 dark:bg-stone-700" />
          </span>
        </button>
      </div>

      <p className="text-muted-foreground mt-2 text-xs">
        <span className="font-architects-daughter border-b-2 border-dotted text-[13.2px] font-bold tracking-[0.9px]">
          Keonk Fact
        </span>{" "}
        <br />
        Tole-tole is my fav cat btw
      </p>
      <p aria-live="polite" className="sr-only">
        {isPinned
          ? "Tole Tole dance is kept active."
          : "Tole Tole dance follows hover and focus."}
      </p>
    </div>
  );
}
