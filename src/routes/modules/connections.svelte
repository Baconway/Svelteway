<script>
  import { connections } from "$lib/jsons/connections.json";
  let data = $props();
</script>

{#each connections as connectionBlock}
  <div class="flex flex-row items-center select-none">
    <img
      class="w-6 p-1 rounded-lg bg-white"
      src={connectionBlock.image}
      alt="connection icon"
      draggable="false"
    /><a
      class="mx-1.25 hover:underline"
      target="_blank"
      href={connectionBlock.link}
      >{connectionBlock.caption}
    </a><span>&nearrow;</span>
  </div>
{/each}

<div class="flex flex-row items-center select-none">
  <img
    class="w-6 p-1 rounded-lg bg-white"
    src={data.steam.image}
    alt="connection icon"
    draggable="false"
  /><a class="mx-1.25 hover:underline" target="_blank" href={data.steam.link}
    >{data.steam.caption}
  </a><span>&nearrow;</span>
</div>
