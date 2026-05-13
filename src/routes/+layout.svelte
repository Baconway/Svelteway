<script>
  import CloseIcon from "@iconify-svelte/material-symbols/close-rounded";
  import { fade } from "svelte/transition";
  let { children, data } = $props();
  let miniMenuVisible = $state(false);
  import "../applet.css";
  import Footer from "./footer.svelte";

  function themeChange(theme) {
    if (document.documentElement.className == "dark") {
      document.documentElement.className = "light";
    } else {
      document.documentElement.className = "dark";
    }
  }
</script>

<!--<nav
  class="flex border-4 dark:border-amber-50 border-b-gray-900 text-[25px] pl-3 m-5 sticky top-0 justify-between items-center bg-amber-50 dark:bg-black rounded-xl
   not-md:hidden"
>
  <div class="flex gap-1 basis-0 grow">
    <a class="p-2 dark:text-white text-black" href="/">Home</a>
    <a class="p-2 dark:text-white text-black" href="/portfolio">Portfolio</a>
    <a class="p-2 dark:text-white text-black" href="/extras">Extras</a>
  </div>

  <div class="flex justify-center grow-1">
    <img class="dark:invert-100 w-40" src="/logo.png" alt="logo here" />
  </div>

  <div class="flex grow basis-0 items-end justify-end pr-2">
    <img
      class="max-w-[1.75em] pr-1 hover:cursor-pointer pl-0.5 dark:invert object-center"
      onclick={() => themeChange()}
      id="switch-theme"
      src="/themeSwitch.svg"
      alt="theme switching button"
    />
  </div>
</nav>

<nav
  class="fixed top-3 left-2 rounded-4xl w-12 h-12 border-2 dark:border-amber-50 md:hidden z-3"
>
  <img
    class="dark:invert p-1"
    src="/menu.svg"
    alt="hamburger"
    onclick={() => (miniMenuVisible = !miniMenuVisible)}
  />
</nav>-->

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
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 flex flex-col align-top h-3/4 py-10 {miniMenuVisible
    ? 'w-0'
    : 'w-2/3'} duration-200 transition-all"
>
  <div class="bg-blue-300">aaaaaa</div>
  <button onclick={() => (miniMenuVisible = !miniMenuVisible)}
    >View Full Profile</button
  >
  <div></div>
  <div></div>
  <button
    class="absolute top-5 right-5 w-6 h-6 cursor-pointer"
    onclick={() => (miniMenuVisible = !miniMenuVisible)}><CloseIcon /></button
  >
</div>
<!--
{#if miniMenuVisible}
  <div
    class="absolute top-0 bottom-0 left-0 right-0 mt-10 bg-black/10 backdrop-blur-xs z-2 duration-75"
    transition:fade
  >
    <div class="flex flex-col justify-center items-center gap-2">
      <div
        class="w-xs bg-gray-400 dark:bg-gray-800 border-2 border-indigo-700 dark:border-salt-blue flex justify-center"
      >
        <img class="dark:invert-100 w-40" src="/logo.png" alt="logo here" />
      </div>

      <a
        class="w-xs text-center bg-gray-400 dark:bg-gray-800 border-2 border-indigo-700 dark:border-salt-blue p-2 dark:text-white text-black"
        href="/">Home</a
      >
      <a
        class="w-xs text-center bg-gray-400 dark:bg-gray-800 border-2 border-indigo-700 dark:border-salt-blue p-2 dark:text-white text-black"
        href="/portfolio">Portfolio</a
      >
      <a
        class="w-xs text-center bg-gray-400 dark:bg-gray-800 border-2 border-indigo-700 dark:border-salt-blue p-2 dark:text-white text-black"
        href="/extras">Extras</a
      >

      <img
        class="max-w-[2.15rem] pr-1 hover:cursor-pointer pl-0.5 dark:invert object-center"
        onclick={() => themeChange()}
        id="switch-theme"
        src="/themeSwitch.svg"
        alt="theme switching button"
      />
    </div>
  </div>
{/if}

<Footer></Footer>
-->
{@render children()}
