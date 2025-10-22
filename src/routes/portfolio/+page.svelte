<script>
  import { slide, fade } from "svelte/transition";
  import portfolioPaths from "../jsonPaths/portfolio.json";
</script>

{#snippet infoBlock(side)}
  {#each portfolioPaths[side] as parts}
    <a
      class={parts.Link ? "hover:cursor-pointer" : "hover:cursor-not-allowed"}
      href={parts.Link}
      target="_blank"
    >
      <div
        class="flex flex-row justify-between items-center w-lg dark:text-white bg-gray-300 dark:bg-gray-800 ml-0.5 rounded-lg p-2.5 border-1 border-indigo-700 dark:border-salt-blue"
      >
        <p class="font-bold text-lg">{parts.Title}</p>
        <div class="flex flex-wrap gap-2">
          {#each parts.Image as ImagePath}
            <img class="h-[43px] rounded-sm" alt="a" src={ImagePath} />
          {/each}
        </div>
      </div></a
    >
  {/each}
{/snippet}

<title>Portfolio</title>
<div
  class="ml-5 flex flex-row not-md:flex-col gap-5 not-md:mt-5 justify-center"
>
  <div class="flex flex-col justify-center items-center gap-5 grow-1 h-min">
    <p class="text-3xl font-bold dark:text-white">What I Know:</p>
    {@render infoBlock("know")}
  </div>

  <div
    class="h-[60vh] w-[1px] bg-black dark:bg-amber-100 not-md:w-[95vw] not-md:h-[1px]"
  ></div>

  <div class="flex flex-col justify-center items-center gap-5 grow-1 h-min">
    <p class="text-3xl font-bold dark:text-white">
      Stuff I Work On/Groups I Work For:
    </p>
    {@render infoBlock("project")}
  </div>
</div>
