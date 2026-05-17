<script>
  import CloseIcon from "@iconify-svelte/lsicon/close-small-outline";
  import Window_max from "@iconify-svelte/lsicon/shell-window-maximize-outline";
  import Window_min from "@iconify-svelte/lsicon/shell-window-minimize-outline";
  import { fade, slide, scale, draw } from "svelte/transition";
  import { onMount } from "svelte";

  import "../applet.css";
  import Footer from "$modules/footer.svelte";
  import Connections from "$modules/connections.svelte";
  import Profile from "$modules/profile.svelte";
  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";
  let { children, data } = $props();

  function themeChange(theme) {
    if (document.documentElement.className == "dark") {
      document.documentElement.className = "light";
    } else {
      document.documentElement.className = "dark";
    }
  }
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
        class="flex flex-col drop-shadow-sm drop-shadow-black"
        transition:scale
      >
        <div
          class="flex flex-row bg-shiroko-2 px-0.5 pb-1 justify-between items-center"
        >
          <div class="flex flex-row items-center justify-center">
            <img class="w-7 h-7" src="/shiroko.gif" alt="icon" />
            <p>Information</p>
          </div>

          <div class="flex">
            <button
              class="px-1 border-t-0 border-2 border-shiroko-5 rounded-bl-md"
              ><Window_min width="24px" height="24px" /></button
            >
            <button class="px-1 border-l-0 border-t-0 border-2 border-shiroko-5"
              ><Window_max width="24px" height="24px" /></button
            >
            <button
              class="px-3 border-l-0 border-2 border-shiroko-5 border-t-0 rounded-br-md bg-red-400"
              onclick={() => changeVisibility()}
              ><CloseIcon width="24px" height="24px" /></button
            >
          </div>
        </div>

        <div class="relative w-xl h-1/3 p-1 bg-emerald-500">
          {@render children()}
        </div>
      </div>{/if}
  </div>
</div>

<Footer></Footer>
