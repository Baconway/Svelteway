<script>
  import { connections } from "$lib/jsons/connections.json";
</script>

{#each connections as connectionBlock}
  <div class="flex flex-row items-center">
    <img
      class="w-6 p-1 rounded-lg bg-white"
      src={connectionBlock.image}
      alt="connection icon"
    /><a
      class="mx-1.25 hover:underline"
      target="_blank"
      href={connectionBlock.link}
      >{connectionBlock.caption}
    </a><span>&nearrow;</span>
  </div>
{/each}
