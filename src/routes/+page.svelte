<script lang="js">
  import { blur, fade, scale, slide } from "svelte/transition";

  import { getVisibility } from "$modules/state.svelte.js";

  import { resolveRoute } from "$app/paths";

  let { data } = $props();
</script>

<title>Home Page</title>

<div class="flex flex-col px-8">
  <div class="flex flex-row gap-10">
    <img
      class="w-20 h-20 shrink-0 grow-0 animate-spin my-5"
      src="/salt2.png"
      alt="logo"
    />

    <img class="w-20 animate-spinning my-5" src="/salt.png" alt="logo 2" />
  </div>
  <p class="text-[0.45rem]">
    (idk i just put them here because its funny lmao)
  </p>
  <p class="text-3xl">
    It's <span class="font-extrabold">Baconway</span>
    <sub class="text-[0.75rem]"
      >(Bway, Cunnyway, whatever people call me nowadays)</sub
    >
  </p>

  <p class="text-xl">Aside from rhythm games I:</p>
  <ul class="text-lg list-outside list-disc pl-5">
    <li
      class=" underline underline-offset-4 decoration-salt-3 rounded-sm px-2 m-1"
    >
      <a href={resolveRoute("/portfolio")}>write code</a>
    </li>
    <li
      class=" underline underline-offset-4 decoration-salt-3 rounded-sm px-2 m-1"
    >
      <a href={resolveRoute("/extras")}
        >play other stupid games (mainly gacha games)</a
      >
    </li>
  </ul>

  <p class="text-xl">Hardware:</p>
  <ul class="list-disc list-inside">
    <li class="text-lg">PC:</li>
    <ul class="list-disc list-inside pl-5 pb-2">
      <li>ASUS B760M-K Prime DDR4</li>
      <li>Intel Core i5-13400F</li>
      <li>AMD RX6600</li>
      <li>AGI UD138 16GB DDR4-3200</li>
    </ul>

    <li class="text-lg">Laptop: Dell Precision 5540</li>
    <ul class="list-disc list-inside pl-5 pb-2">
      <li>Intel Core i7-9850H</li>
      <li>Nvidia Quadro T2000</li>
      <li>32GB DDR4-3200</li>
    </ul>

    <li class="text-lg">Server: ASUS VivoBook 14</li>
    <ul class="list-disc list-inside pl-5 pb-2">
      <li>Intel Celeron N4000</li>
      <li>4GB DDR4-2600</li>
    </ul>
  </ul>
</div>
