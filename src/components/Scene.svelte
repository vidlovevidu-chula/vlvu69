<script lang="ts">
  import { getContext, type Snippet } from "svelte";
  import type { GameState } from "./GameProvider.svelte";

  interface Props {
    children?: Snippet;
    id: number;
  }

  let { children, id = 0 }: Props = $props();

  const game = getContext<GameState>("game");
</script>

{#if game.currentSceneIndex === id}
  {@render children?.()}
{/if}
