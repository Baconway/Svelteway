<script>
  import { fade, scale } from "svelte/transition";
  import { onMount } from "svelte";

  import "../applet.css";
  import Connections from "$modules/connections.svelte";
  import Profile from "$modules/profile.svelte";
  import WindowBar from "$modules/windowBar.svelte";
  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";
  let { children, data } = $props();

  let profileContainer;
  let windowBodyHeight = $state("auto");
  let windowBodyWidth = $state("auto");

  const syncWindowBody = () => {
    if (profileContainer) {
      windowBodyHeight = `${profileContainer.offsetHeight}px`;
      windowBodyWidth = `${profileContainer.offsetWidth}px`;
    }
  };

  onMount(() => {
    syncWindowBody();
  });

  /*function themeChange(theme) {
    if (document.documentElement.className == "dark") {
      document.documentElement.className = "light";
    } else {
      document.documentElement.className = "dark";
    }
  }*/
</script>

<video
  class="fixed inset-0 min-w-screen min-h-screen opacity-40 loop object-right"
  muted
  loop
  autoplay
>
  <source src={data.vid} type="video/mp4" />
  <track kind="captions" />
</video>

<div
  class="flex justify-center items-center fixed w-screen h-screen"
  transition:fade
>
  <div
    class="flex flex-col md:flex-row items-center gap-2 duration-200 drop-shadow-sm drop-shadow-black"
  >
    <div bind:this={profileContainer} class="flex flex-col shrink-0">
      <Profile profileData={data.profileData} />
    </div>

    {#if getVisibility()}
      <div
        class="relative pb-2 overflow-y-auto text-white bg-shiroko-1 w-3xl"
        transition:scale={{ scale: 1 }}
        style="height: {windowBodyHeight}"
      >
        <WindowBar palette={data.profileData.palette} />
        {@render children()}
      </div>
    {/if}
  </div>
</div>
