<script lang="js">
  import { blur, fade, scale, slide } from "svelte/transition";
  import { changeTitle, getTitle } from "$modules/state.svelte.js";
  import { resolveRoute } from "$app/paths";
  let { data } = $props();

  changeTitle("Home Page");
</script>

<title>{getTitle()}</title>

<div
  class="flex flex-col justify-center items-center-safe mx-5 text-2xl"
  transition:slide
>
  <img class="w-32" src="/salt2.png" alt="logo" />
  <p class="">Baconway (Bway)</p>
  <p>idk what I'm doing half the time but I:</p>
  <ul class="list-outside list-disc pl-5">
    <li class="border-2 border-salt-3 rounded-sm px-2 m-1">
      <a href={resolveRoute("/portfolio")}>write code</a>
    </li>
    <li class="border-2 border-salt-3 rounded-sm px-2 m-1">
      <a href={resolveRoute("/extras")}>play games</a>
    </li>
  </ul>
</div>
