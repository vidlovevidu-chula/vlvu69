<script lang="ts">
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { getContext } from "svelte";
  import type { GetImageResult } from "astro";

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

  const imageMap = getContext<Map<string, GetImageResult>>("imageMap");
  const optimizedImage = imageMap?.get(src);
  const optimizedImageSrc = imageMap?.get(src)?.src ?? src;
</script>

<img
  {...optimizedImage?.attributes}
  src={optimizedImageSrc}
  class={twMerge(
    "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2",
    className,
  )}
  alt=""
  usemap="#map-{id}"
/>

{@render map?.({ name: `map-${id}` })}
