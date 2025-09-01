<script>
	let { children } = $props();
	import "../applet.css";
</script>

<nav class="flex border-b-5 text-[20px] p-1 sticky justify-between items-center">
	<div class="flex gap-1 ">
	<a class="p-2 bg-gray-700 text-white rounded-xs" href="/">Home</a>
	<a class="p-2 bg-gray-700 text-white rounded-xs" href="/portfolio">Portfolio</a>
</div>
<p class="inline ">pretend this is a logo</p>
<img class="w-[1.75em] pr-1 hover:cursor-pointer pl-0.5" src="../src/routes/themeSwitch.svg" alt="theme switching button">
</nav>

{@render children()}