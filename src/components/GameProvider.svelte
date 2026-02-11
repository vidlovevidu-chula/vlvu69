<script module>
  interface MbtiScores {
    I: number;
    E: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  }

  export class GameState {
    mbtiScores = new SvelteMap<keyof MbtiScores, number>([
      ["I", 0],
      ["E", 0],
      ["S", 0],
      ["N", 0],
      ["T", 0],
      ["F", 0],
      ["J", 0],
      ["P", 0],
    ]);

    currentSceneIndex: number = $state(-1);
    currentStepIndex: number = $state(0);
    playerName: string = $state("");
    isDebugTouchAreaVisible: boolean = $state(false);

    constructor({
      currentSceneIndex = -1,
      playerName = "",
      isDebugTouchAreaVisible = false,
      mbtiScores = {
        I: 0,
        E: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
      },
    } = {}) {
      this.currentSceneIndex = currentSceneIndex;
      this.playerName = playerName;
      this.isDebugTouchAreaVisible = isDebugTouchAreaVisible;
      if (mbtiScores) {
        this.mbtiScores.clear();
        for (const [key, value] of Object.entries(mbtiScores)) {
          this.mbtiScores.set(key as keyof MbtiScores, value ?? 0);
        }
      }
    }

    nextScene() {
      this.currentStepIndex = 0;
      this.currentSceneIndex += 1;

      return this;
    }

    nextStep() {
      this.currentStepIndex += 1;
      return this;
    }

    addScore(effects: Partial<MbtiScores>) {
      for (const [key, value] of Object.entries(effects)) {
        const current = this.mbtiScores.get(key as keyof MbtiScores) ?? 0;
        this.mbtiScores.set(key as keyof MbtiScores, current + (value ?? 0));
      }
      return this;
    }
  }
</script>

<script lang="ts">
  import type { GetImageResult } from "astro";

  import { setContext, type Snippet } from "svelte";
  import { SvelteMap } from "svelte/reactivity";

  interface Props {
    children?: Snippet<[typeof game]>;
    gameOptions?: Partial<ConstructorParameters<typeof GameState>[0]>;
    imageMap?: Map<string, GetImageResult>;
  }

  let {
    children,
    gameOptions = $bindable({}),
    imageMap = $bindable(),
  }: Props = $props();

  const game = new GameState(gameOptions);

  setContext("game", game);
  if (imageMap) {
    setContext("imageMap", imageMap);
  }
</script>

{@render children?.(game)}
