<script>
  import CloseIcon from "@iconify-svelte/lsicon/close-small-outline";
  import Window_max from "@iconify-svelte/lsicon/shell-window-maximize-outline";
  import Window_min from "@iconify-svelte/lsicon/shell-window-minimize-outline";

  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";
  let data = $props();
</script>

<div
  style="background-image: linear-gradient({data.palette[0]}, {data
    .palette[1]});"
  class="flex flex-row bg-linear-to-br px-0.5 pb-1 justify-between items-center"
>
  <div class="flex flex-row items-center justify-center">
    <img class="w-7 h-7" src="/shiroko.gif" alt="icon" />
    <p>Information</p>
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
      class="px-3 border-l-0 border-2 border-shiroko-5 border-t-0 rounded-br-md bg-red-400"
      onclick={() => changeVisibility()}
      ><CloseIcon width="24px" height="24px" /></button
    >
  </div>
</div>
