<script>
  import {
    Languages,
    Development_Platforms,
    Development_Groups,
  } from "$lib/jsons/portfolio.json";
  import { fade, scale, slide } from "svelte/transition";
</script>

<title>Portfolio</title>

{#snippet SkillBox(items)}
  <div class="flex flex-wrap items-start gap-2">
    {#each items as item}
      <img
        class="w-12 h-12"
        src={item.link}
        alt="{item.name} logo"
        title={item.title}
      />
    {/each}
  </div>
{/snippet}

<div class="flex flex-col gap-2 p-2.5" transition:slide>
  <div
    class="flex flex-col gap-4 p-5 bg-shiroko-5 border-2 border-salt-1 rounded-lg overflow-hidden"
  >
    <p class="text-2xl font-extrabold">Programming Languages</p>
    {@render SkillBox(Languages)}
  </div>

  <div
    class="flex flex-col gap-4 p-5 bg-shiroko-5 border-2 border-salt-1 rounded-lg overflow-hidden"
  >
    <p class="text-2xl font-extrabold">Development Platforms</p>
    {@render SkillBox(Development_Platforms)}
  </div>

  <div
    class="flex flex-col gap-4 p-5 bg-shiroko-5 border-2 border-salt-1 rounded-lg overflow-hidden"
  >
    <p class="text-2xl font-extrabold">Current Groups</p>
    {@render SkillBox(Development_Groups)}
  </div>
</div>
