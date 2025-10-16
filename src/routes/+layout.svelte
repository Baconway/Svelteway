<script>
  let { children } = $props();
  import "../applet.css";
  import Footer from "./modules/footer.svelte";

  function themeChange(theme) {
    if (document.documentElement.className == "dark") {
      document.documentElement.className = "light";
    } else {
      document.documentElement.className = "dark";
    }
  }
</script>

<nav
  class="flex border-4 dark:border-amber-50 border-b-gray-900 text-[25px] pl-3 m-5 sticky justify-between items-center bg-amber-50 dark:bg-black rounded-2xl"
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
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img
      class="max-w-[1.75em] pr-1 hover:cursor-pointer pl-0.5 dark:invert object-center"
      onclick={() => themeChange()}
      id="switch-theme"
      src="/themeSwitch.svg"
      alt="theme switching button"
    />
  </div>
</nav>

<Footer></Footer>

{@render children()}
