<script>
  import CloseIcon from "@iconify-svelte/material-symbols/close-rounded";
  import { fade } from "svelte/transition";
  let { children, data } = $props();
  let miniMenuVisible = $state(false);
  import "../applet.css";
  import Footer from "./footer.svelte";
  import Connections from "./modules/connections.svelte";

  function themeChange(theme) {
    if (document.documentElement.className == "dark") {
      document.documentElement.className = "light";
    } else {
      document.documentElement.className = "dark";
    }
  }
</script>

<video
  class="fixed inset-0 min-w-screen min-h-screen opacity-40 loop object-right"
  muted
  loop
  autoplay
>
  <source src={data.vid} type="video/mp4" />
  <track kind="captions" />
</video>

<div class="flex justify-center items-center fixed w-screen h-screen">
  <div class="flex flex-row gap-2">
    <div
      style="background-image: linear-gradient({data.palette[0]}, {data
        .palette[1]});"
      class="flex flex-col bg-linear-to-br rounded-md p-1"
    >
      <div class="relative">
        <img
          class="relative w-[340px] h-[120px] object-cover object-bottom rounded-t-sm"
          src={data.banner}
          alt="banner"
        />

        <img
          class="absolute w-[128px] z-10 left-2 top-1/2 border-4 border-shiroko-1 rounded-full"
          src={data.avatar}
          alt="pfp"
        />
      </div>

      <div class="bg-shiroko-1 border-salt-1 pb-6 rounded-b-sm">
        <div class="px-2.5 mt-[72px] text-white text-sm">
          <p>{data.display_name}</p>
          <p>{data.username} &bull; I exist</p>
          <p class="my-5">Current Time: {data.date}</p>
          <div class="flex flex-col gap-2 mb-4">
            <p class="font-bold">Connections</p>
            <Connections />
          </div>
          <div class="flex flex-row gap-2">
            <button
              style="background-color: {data.palette[2]};"
              class="grow-1 p-2 items-center-safe rounded-xl text-md cursor-pointer"
              >Example Button &raquo;</button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <div class=" bg-emerald-500">{@render children()}</div>
    </div>
  </div>
</div>

<Footer></Footer>
