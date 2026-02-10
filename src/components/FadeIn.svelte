<script lang="ts">
  import type { Snippet } from "svelte";
  import { linear } from "svelte/easing";
  import { fade } from "svelte/transition";

  let {
    children,
    class: className,
  }: {
    children?: Snippet;
    class?: string;
  } = $props();
</script>

<div
  transition:fade={{
    duration: 1000,
    easing: (t) => linear(t),
  }}
  class={className}
>
  {@render children?.()}
</div>
