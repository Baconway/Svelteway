<script>
  import { scale } from "svelte/transition";
  import { CopyInfo, LinkInfo } from "$lib/jsons/games.json";
</script>

{#snippet InfoBlock(reference)}
  <div
    class="flex flex-col flex-wrap justify-between items-center align-middle w-64 border-2 border-salt-3 bg-shiroko-5 p-3 rounded-sm"
  >
    <div class="flex flex-col justify-center items-center gap-1">
      <img
        class="w-14 h-14 rounded-sm object-contain"
        alt="supporting"
        src={reference.Image}
      />
      <p class="font-bold text-2xl">{reference.Title}</p>
      <p class="text-sm">{reference.Desc}</p>
    </div>
  </div>
{/snippet}

<title>Extras</title>
<div
  class="ml-5 mt-7 flex flex-col justify-center items-center gap-2 not-md:mb-20"
  transition:scale
>
  <p class="text-2xl font-bold text-white">Other Links</p>

  <div class="flex flex-row gap-2 flex-wrap justify-center max-w-3xl">
    {#each CopyInfo as extraInfoBlock}
      <button
        class="hover:cursor-pointer"
        onclick={() => {
          navigator.clipboard.writeText(extraInfoBlock.CopyItem);
          alert("Copied!");
        }}
        title="Click on this to copy!"
      >
        {@render InfoBlock(extraInfoBlock)}</button
      >
    {/each}

    {#each LinkInfo as extraInfoBlock}
      <a
        href={extraInfoBlock.Link}
        target="_blank"
        title="Click on this to head to the link!"
      >
        {@render InfoBlock(extraInfoBlock)}</a
      >
    {/each}
  </div>
</div>
