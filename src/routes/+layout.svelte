<script>
	let { children } = $props();
	import "../applet.css";
  import Page from "./+page.svelte";

	function themeChange(theme) {
		console.log(document.documentElement.className )
		if (document.documentElement.className == 'dark') {
			document.documentElement.className = 'light'
		} else {
			document.documentElement.className = 'dark'
		}
	}
</script>

<nav class="flex border-b-4 border-amber-50 text-[20px] p-1 sticky justify-between items-center bg-gray-500">
	<div class="flex gap-1 ">
	<a class="p-2 dark:text-white text-black rounded-xs hover:bg-blue-800" href="/">Home</a>
	<a class="p-2 dark:text-white text-black rounded-xs hover:bg-blue-800" href="/portfolio">Portfolio</a>
</div>
<p class="inline dark:text-white text-black" >pretend this is a logo</p>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->

<img class="w-[1.75em] pr-1 hover:cursor-pointer pl-0.5 dark:invert" onclick={() => themeChange()} id="switch-theme" src="../src/routes/themeSwitch.svg" alt="theme switching button">

</nav>

{@render children()}