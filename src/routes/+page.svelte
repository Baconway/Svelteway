<script lang="js">
  import { fade, scale, slide } from "svelte/transition";
  import { changeTitle, getTitle } from "$modules/state.svelte.js";
  import { resolveRoute } from "$app/paths";
  let { data } = $props();

  changeTitle("Home Page");
</script>

<title>{getTitle()}</title>

<p class="text-3xl">big placeholder</p>
<ul class="list-outside list-disc pl-5">
  <li class="">placeholder</li>
  <li><a href={resolveRoute("/portfolio")}>placeholder</a></li>
  <li>placeholder</li>
  <li>placeholder</li>
</ul>
