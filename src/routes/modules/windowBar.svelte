<script>
  import CloseIcon from "@iconify-svelte/lsicon/close-small-outline";
  import Window_max from "@iconify-svelte/lsicon/shell-window-maximize-outline";
  import Window_min from "@iconify-svelte/lsicon/shell-window-minimize-outline";
  import BackIcon from "@iconify-svelte/lsicon/arrow-left-outline";
  import { page } from "$app/state";
  import { resolveRoute } from "$app/paths";

  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";
  let data = $props();
  console.log(page.url);
</script>

<div
  style="background-image: linear-gradient({data.palette[0]}, {data
    .palette[1]});"
  class="sticky top-0 flex flex-row w-full pb-1 mb-2 bg-linear-to-br justify-between items-center"
>
  <div class="flex flex-row items-center justify-center align-middle pl-2">
    <a href={resolveRoute("/")}
      ><BackIcon width="24px" height="24px" color="black" /></a
    >
    <img class="w-7 h-7" src="/shiroko.gif" alt="icon" />
    <p class="text-black">Information</p>
  </div>

  <div class="flex">
    <button
      class="px-1 border-t-0 border-2 border-shiroko-5 opacity-10 rounded-bl-md"
      ><Window_min width="24px" height="24px" /></button
    >
    <button
      class="px-1 border-l-0 border-t-0 border-2 border-shiroko-5 opacity-10"
      ><Window_max width="24px" height="24px" /></button
    >
    <button
      class="px-3 border-l-0 border-2 border-b-shiroko-3 border-t-0 rounded-br-md bg-red-400"
      onclick={() => changeVisibility()}
      ><CloseIcon width="24px" height="24px" /></button
    >
  </div>
</div>
