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

<div class="flex justify-center items-center fixed w-screen h-screen">
  <div class="flex flex-row gap-2">
    <div class=" bg-blue-500 pb-6">
      <div class="relative">
        <img
          class="relative w-[340px] h-[120px] object-cover object-bottom"
          src="/frame.png"
          alt="banner"
        /><img
          class="absolute w-[128px] z-10 left-1 top-1/2 border-4 border-blue-500 rounded-full"
          src="/test.webp"
          alt="pfp"
        />
      </div>

      <div class="px-2 mt-[70px] text-white">
        <p>Display Name</p>
        <p>username &bull; pronouns</p>
        <p>Time currently: 1:25 AM, 5/15/2026</p>
        <div>
          <p>Connections</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <div class="w-lg h-30 bg-emerald-500">{@render children()}</div>
      <div class="w-lg h-30 bg-emerald-500"><p>cccccc</p></div>
    </div>
  </div>
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
