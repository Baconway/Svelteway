<script>
  import CloseIcon from "@iconify-svelte/lsicon/close-small-outline";
  import Window_max from "@iconify-svelte/lsicon/shell-window-maximize-outline";
  import Window_min from "@iconify-svelte/lsicon/shell-window-minimize-outline";
  import BackIcon from "@iconify-svelte/lsicon/arrow-left-outline";

  import { resolveRoute } from "$app/paths";

  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";

  import { shouldTextBeBlack } from "$lib/utilities";
  let data = $props();
</script>

<div
  style="background-color: {data.palette[0]};"
  class="sticky top-0 z-10 flex flex-row w-full pb-1 px-1 bg-linear-to-br justify-between items-center"
>
  <div class="flex flex-row items-center justify-center align-middle pl-1">
    <img class="w-7 h-7" src="/shiroko.gif" alt="icon" draggable="false" />
    <p style="color: {shouldTextBeBlack(data.palette[0]) ? 'black' : 'white'}">
      Information
    </p>
  </div>

  <div class="flex">
    <a
      class="px-3 border-l-0 border-t-0 border-2 border-salt-3 rounded-bl-md bg-shiroko-3"
      href={resolveRoute("/")}
      ><BackIcon width="24px" height="24px" color="black" /></a
    >
    <button
      class="px-3 border-b-2 border-b-salt-3 rounded-br-md bg-red-400"
      onclick={() => changeVisibility()}
      ><CloseIcon width="24px" height="24px" /></button
    >
  </div>
</div>
