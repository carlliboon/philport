import { useRef, useEffect, useCallback } from "react";
import type { Player as LordiconPlayer } from "@lordicon/react";
import { AnimationHandler } from "@/utils/animationHandler";

/**
 * Reusable hook to manage multiple Lordicon players with a central AnimationHandler.
 * This follows the DRY principle and can be reused across pages.
 *
 * @param delay - Delay in ms between animation loops (default 3000)
 * @param initialCount - Optional initial size of the refs array
 */
export const useLordiconAnimation = (delay: number = 3000, initialCount: number = 0) => {
  // Array ref holding Lordicon players
  const playersRef = useRef<(LordiconPlayer | null)[]>(
    Array(initialCount).fill(null)
  );

  // Holds the AnimationHandler instance
  const handlerRef = useRef<AnimationHandler | null>(null);

  /**
   * Register a player to a given index in the array.
   * Usage: ref={registerPlayer(0)}
   */
  const registerPlayer = useCallback(
    (index: number) => (node: LordiconPlayer | null) => {
      playersRef.current[index] = node;
    },
    []
  );

  // Initialize / cleanup AnimationHandler
  useEffect(() => {
    const refs = playersRef.current
      .map((p) => ({ current: p }))
      .filter((r) => r.current !== null);

    handlerRef.current = AnimationHandler.createFromRefs(refs, delay);

    return () => handlerRef.current?.destroy();
    // we intentionally omit dependencies to run only on mount / unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Expose a manual replay handler
  const replay = () => handlerRef.current?.handleLoop();

  return {
    registerPlayer,
    replay,
  } as const;
}; 