<script lang="js">
  /**@type {import('./$types').PageProps}*/ //type checking for base js
  let { data } = $props();
  import Status from "./status.svelte";
  import Info from "./info.svelte";
</script>

<div class="flex justify-center items-center gap-65 mt-50">
  <div class="dark:text-white text-black w-2xl">
    <p class="text-8xl font-bold">Welcome!</p>
    <p class="text-3xl">This is a revamped landing page.</p>
    <Info></Info>
  </div>
  <div class="shrink-0">
    <div class="relative">
      <img
        class="shadow-md not-dark:shadow-indigo-600 shadow-red-400 rounded-2xl"
        alt="avatar img"
        src={data.avatar}
      />
      <Status></Status>
    </div>
  </div>
</div>

<style lang="postcss">
  @reference 'tailwindcss';
</style>
