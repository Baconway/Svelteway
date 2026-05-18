<script>
  import { fade, slide, scale, draw } from "svelte/transition";
  import { onMount } from "svelte";

  import "../applet.css";
  import Footer from "$modules/footer.svelte";
  import Connections from "$modules/connections.svelte";
  import Profile from "$modules/profile.svelte";
  import WindowBar from "$modules/windowBar.svelte";
  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";
  let { children, data } = $props();

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

<div class="flex justify-center items-center fixed w-screen h-screen">
  <div
    class="flex flex-row gap-2 duration-200 drop-shadow-sm drop-shadow-black"
  >
    <Profile profileData={data.profileData} />

    {#if getVisibility()}
      <div
        class="relative h-auto self-stretch overflow-y-auto text-white bg-shiroko-1"
        transition:scale={{ scale: 1 }}
      >
        <WindowBar palette={data.profileData.palette} />
        {@render children()}
      </div>
    {/if}
  </div>
</div>

<Footer></Footer>
