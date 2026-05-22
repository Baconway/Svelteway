<script>
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";

  import "../applet.css";
  import { site_background } from "$lib/jsons/siteSettings.json";
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
  style="background-image: url({site_background});"
  class="fixed w-screen h-screen opacity-35 bg-cover"
></div>

<div
  class="flex justify-center items-start lg:items-center absolute inset-0 overflow-auto scrollbar-none"
>
  <div
    class="flex flex-col lg:flex-row my-5 lg:my-0 items-center gap-2 duration-200 drop-shadow-sm drop-shadow-black"
  >
    <div bind:this={profileHolder} class="flex flex-col shrink-0">
      <Profile profileData={data.profileData} />
    </div>

    {#if getVisibility()}
      <div
        class="self-start flex flex-col grow-0"
        transition:scale={{ scale: 1, easing: circInOut }}
      >
        <WindowBar palette={data.profileData.palette} />
        <div
          class="overflow-y-auto text-white bg-shiroko-1 w-md md:w-3xl scrollbar-none"
          style="min-height: {profileHeight};"
        >
          {@render children()}
        </div>
      </div>
    {/if}
  </div>
</div>
