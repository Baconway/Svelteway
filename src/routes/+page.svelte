<script lang="js">
  /**@type {import('./$types').PageProps}*/ //type checking for base js
  let { data } = $props();
  let canSeeBubble = $state(false);

  import Status from "./modules/status.svelte";
  import Info from "./modules/info.svelte";
  import { fade, scale, slide } from "svelte/transition";
</script>

<div class="flex justify-center items-center gap-65 mt-50" transition:slide>
  <div class="dark:text-white text-black w-2xl">
    <p class="text-8xl font-bold">Welcome!</p>
    <p class="text-3xl">This is a revamped landing page.</p>
    <p class="text-xl">
      (Still a static Website, but I'll figure out what else to do.)
    </p>
    <Info></Info>
  </div>

  <div class="shrink-0">
    <div class="relative flex justify-center items-center">
      <img
        class="shadow-lg not-dark:shadow-indigo-700 shadow-salt-blue rounded-2xl"
        alt="avatar img"
        src={data.avatar}
        onmouseenter={() => (canSeeBubble = true)}
        onmouseleave={() => (canSeeBubble = false)}
      />

      {#if canSeeBubble}
        <div
          class="absolute top-70 dark:bg-gray-800 border-indigo-700 dark:border-salt-blue border-2 bg-gray-300 rounded-md p-2 text-black dark:text-white"
          transition:scale
        >
          <p class="text-ellipsis font-bold w-xs wrap-break-word text-center">
            {data.customStatus.state
              ? data.customStatus.state
              : "Not doing Anything"}
          </p>

          <div
            class="absolute top-0 left-1/2 border-10 border-t-indigo-700 dark:border-t-salt-blue -mt-5 rotate-180 border-transparent"
          ></div>
        </div>
      {/if}

      <Status></Status>
    </div>
  </div>
</div>
