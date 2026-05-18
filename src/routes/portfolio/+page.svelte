<script>
  import { Languages, Development_Platforms } from "$lib/jsons/portfolio.json";
  import { fade, scale, slide } from "svelte/transition";
</script>

<div class="flex flex-col gap-2 p-2.5" transition:slide>
  <div
    class="flex flex-col gap-4 p-5 bg-shiroko-5 border-2 border-salt-1 rounded-lg overflow-auto"
  >
    <p class="text-2xl font-extrabold">Programming Languages</p>
    <div class="flex flex-wrap items-start gap-2">
      {#each Languages as lang}
        <img
          class="w-12 h-12"
          src={lang.link}
          alt="{lang.lang} logo"
          title={lang.title}
        />
      {/each}
    </div>
  </div>

  <div
    class="flex flex-col gap-4 p-5 bg-shiroko-5 border-2 border-salt-1 rounded-lg"
  >
    <p class="text-2xl font-extrabold">Development Platforms</p>
    <div class="flex flex-wrap items-start gap-2">
      {#each Development_Platforms as platform}
        <img
          class="w-12 h-12"
          src={platform.link}
          alt="{platform.platform} logo"
          title={platform.title}
        />
      {/each}
    </div>
  </div>
</div>
