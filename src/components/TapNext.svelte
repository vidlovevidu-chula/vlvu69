<script lang="ts">
  import { getContext } from "svelte";
  import type { GameState } from "./GameProvider.svelte";
  import type { GetImageResult } from "astro";

  const game = getContext<GameState>("game");
  const imageMap = getContext<Map<string, GetImageResult>>("imageMap");

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

  const defaultSrc =
    "/03 Story scene 1/ฉาก ปฏิทิน/text/text tap to continue.PNG";
  const optimizedImage = imageMap?.get(defaultSrc);
</script>

<button
  class="absolute z-20 delay-show min-h-screen left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer"
  {onclick}
>
  <span class="sr-only"> แตะเพื่อไปต่อ </span>
  <img
    {...optimizedImage?.attributes}
    src={optimizedImage?.src}
    class="h-full w-auto"
    alt=""
  />
</button>
