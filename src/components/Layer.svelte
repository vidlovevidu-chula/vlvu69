<script lang="ts">
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";

  const id = $props.id();

  let {
    src,
    class: className,
    map,
  }: {
    src: string;
    class?: string;
    map?: Snippet<
      [
        {
          name: string;
        },
      ]
    >;
  } = $props();
</script>

<img
  {src}
  width="1935"
  height="4194"
  class={twMerge(
    "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2",
    className,
  )}
  alt=""
  usemap="#map-{id}"
/>

{@render map?.({ name: `map-${id}` })}
