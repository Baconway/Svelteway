<script>
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";

  import "../applet.css";
  import Connections from "$modules/connections.svelte";
  import Profile from "$modules/profile.svelte";
  import WindowBar from "$modules/windowBar.svelte";
  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";
  import { circInOut } from "svelte/easing";

  let { children, data } = $props();
  let profileHolder = $state(null);
  let profileHeight = $state();

  $effect(() => {
    if (!profileHolder) return;
    profileHeight = `${profileHolder.offsetHeight}px`;
  });
</script>

<div
  class="fixed w-screen h-screen opacity-35 bg-[url(https://image.bway.lol/frame/Fragrance_UI_Frame_250744.png)] bg-cover"
></div>

<div class="flex justify-center items-center fixed w-screen h-screen">
  <div
    class="flex flex-col md:flex-row items-center gap-2 duration-200 drop-shadow-sm drop-shadow-black"
  >
    <div bind:this={profileHolder} class="flex flex-col shrink-0">
      <Profile profileData={data.profileData} />
    </div>

    {#if getVisibility()}
      <div
        class="self-start flex flex-col grow-0 shrink-0"
        transition:scale={{ scale: 1, easing: circInOut }}
      >
        <WindowBar palette={data.profileData.palette} />
        <div
          class="overflow-y-auto text-white bg-shiroko-1 w-3xl scrollbar-none"
          style="height: {profileHeight};"
        >
          {@render children()}
        </div>
      </div>
    {/if}
  </div>
</div>
