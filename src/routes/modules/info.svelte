<script>
  import { links } from "../jsonPaths/Infopaths.json";
</script>

<div class="flex flex-row items-center justify-center gap-4 w-[64%] mt-1">
  {#each links as media}
    <a href={media.url} target="_blank"
      ><img
        class="w-10 h-10 dark:invert"
        alt={media.alt}
        src={media.path}
        title={media.title}
      /></a
    >
  {/each}
</div>
