<script lang="ts">
  import { getContext } from "svelte";
  import type { GameState } from "./GameProvider.svelte";
  import { twMerge } from "tailwind-merge";

  const game = getContext<GameState>("game");

  interface Props {
    title: string;
    onclick?: () => void;
    top?: string;
    left?: string;
    rotate?: string;
    width?: string;
    height?: string;
    class?: string;
  }

  let {
    title,
    onclick = () => {},
    top,
    left,
    rotate,
    width,
    height,
    class: className,
  }: Props = $props();
</script>

<button
  style:top
  style:left
  style:rotate
  style:width
  style:height
  {onclick}
  class={twMerge(
    "absolute z-50 text-transparent -translate-y-1/2 -translate-x-1/2 cursor-pointer",
    className,
    game.isDebugTouchAreaVisible &&
      "bg-red-500/50 hover:bg-red-500/80 border border-red-700",
  )}
>
  {title}
</button>
