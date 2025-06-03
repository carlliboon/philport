import { Player as LordiconPlayer } from "@lordicon/react";
import { RefObject } from "react";

export class AnimationHandler {
  private players: LordiconPlayer[];
  private delay: number;
  private timeoutId: NodeJS.Timeout | null = null;

  constructor(players: LordiconPlayer[], delay: number = 3000) {
    this.players = players;
    this.delay = delay;
  }

  private playAll() {
    this.players.forEach(player => player.playFromBeginning());
  }

  initialize() {
    this.playAll();
    this.scheduleNextLoop();
  }

  handleLoop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.scheduleNextLoop();
  }

  private scheduleNextLoop() {
    this.timeoutId = setTimeout(() => {
      this.playAll();
      this.scheduleNextLoop();
    }, this.delay);
  }

  destroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  static createFromRefs(refs: RefObject<LordiconPlayer | null>[], delay: number = 3000): AnimationHandler | null {
    const validPlayers = refs
      .map(ref => ref.current)
      .filter((player): player is LordiconPlayer => player !== null);

    if (!validPlayers.length) return null;

    const handler = new AnimationHandler(validPlayers, delay);
    handler.initialize();
    return handler;
  }
} 