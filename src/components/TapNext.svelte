<script lang="ts">
  import { getContext } from "svelte";
  import type { GameState } from "./GameProvider.svelte";

  const game = getContext<GameState>("game");

  let {
    onclick = () => {
      if (next === "scene") {
        game.nextScene();
      } else {
        game.nextStep();
      }
    },
    src,
    alt,
    next = "scene",
  }: {
    onclick?: () => void;
    src?: string;
    alt?: string;
    next: "scene" | "step";
  } = $props();
</script>

<button
  class="absolute z-20 delay-show min-h-screen left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer"
  {onclick}
>
  <span class="sr-only"> แตะเพื่อไปต่อ </span>
  <img
    src="/03 Story scene 1/ฉาก ปฏิทิน/text/text tap to continue.PNG"
    class="w-full"
    alt=""
  />
</button>
