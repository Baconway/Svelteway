<script>
  import { slide, fade } from "svelte/transition";
  import { CopyInfo, LinkInfo } from "../jsonPaths/extraInfo.json";
</script>

{#snippet InfoBlock(reference)}
  <div
    class="flex flex-col flex-wrap justify-between items-center align-middle w-64 border-2 border-indigo-700 dark:border-salt-blue bg-gray-300 dark:bg-gray-800 dark:text-white p-3 rounded-sm"
  >
    <div class="flex flex-col justify-center items-center gap-1">
      <img
        class="w-14 h-14 rounded-sm object-contain"
        alt="supporting"
        src={reference.Image}
      />
      <p class="font-bold text-2xl">{reference.Title}</p>
      <p>{reference.Desc}</p>
    </div>
  </div>
{/snippet}

<title>Extras</title>
<div class="ml-5 flex flex-col justify-center items-center gap-2">
  <p class="text-2xl font-bold dark:text-white">Other Links</p>

  <div class="flex flex-row gap-2 flex-wrap justify-center max-w-256">
    {#each CopyInfo as extraInfoBlock}
      <button
        class="hover:cursor-pointer"
        onclick={() => {
          navigator.clipboard.writeText(extraInfoBlock.CopyItem);
          alert("Copied!");
        }}
      >
        {@render InfoBlock(extraInfoBlock)}</button
      >
    {/each}

    {#each LinkInfo as extraInfoBlock}
      <a href={extraInfoBlock.Link} target="_blank">
        {@render InfoBlock(extraInfoBlock)}</a
      >
    {/each}
  </div>
</div>
