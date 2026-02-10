<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { linear } from "svelte/easing";
  import { on } from "svelte/events";
  import { fade } from "svelte/transition";

  interface Props {
    delay?: number;
    duration?: number;
    easing?: (t: number) => number;
    children?: Snippet;
  }

  let {
    delay = 0,
    duration = 400,
    easing = linear,
    children,
  }: Props = $props();

  let isShow = $state(false);

  onMount(() => {
    setTimeout(
      () => {
        isShow = true;
      },
      Math.max(delay, 0),
    );
  });
</script>

{#if isShow}
  <div class="absolute inset-0" transition:fade={{ duration, easing }}>
    {@render children?.()}
  </div>
{/if}
