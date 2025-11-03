<script>
  import { fade, scale } from "svelte/transition";
  import { innerWidth, innerHeight } from "svelte/reactivity/window";
  import Activities from "./modules/activities.svelte";

  let visible = $state(false);
</script>

<!--overlaps with avatar, might wanna make it collapse if height isnt a certain amount-->
<div
  class="fixed bottom-0 flex flex-col justify-center items-start w-[80vw] z-1 {visible
    ? 'pb-1'
    : ''}"
>
  <button
    class="relative top-0 left-0 border-t-2 border-l-2 border-r-2 text-white rounded-t-4xl not-dark:border-black"
    onclick={() => {
      visible = !visible;
    }}
    ><img
      class="h-6 not-md:h-12 dark:invert"
      alt="collapse"
      src="/menu-swap.svg"
    /></button
  >
  <div class="w-[100vw] mb-1 border-1 border-black dark:border-white"></div>

  {#if visible}
    <Activities></Activities>
  {/if}
</div>
