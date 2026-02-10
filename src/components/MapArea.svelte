<script lang="ts">
  import type { HTMLAreaAttributes } from "svelte/elements";

  let {
    onclick,
    title = "",
    ...restProps
  }: {
    onclick?: () => void;
    title?: string;
  } & HTMLAreaAttributes = $props();
</script>

<area
  class="cursor-pointer"
  role="button"
  {onclick}
  onkeydown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      onclick?.();
      e.preventDefault();
    }
  }}
  alt={title}
  tabindex="0"
  {title}
  {...restProps}
/>
