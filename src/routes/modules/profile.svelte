<script>
  import { fade, scale } from "svelte/transition";

  import { PUBLIC_USERID, PUBLIC_GUILD_INVITE } from "$env/static/public";

  import Connections from "$modules/connections.svelte";
  import Activities from "$modules/activities.svelte";
  import { defaultStatusColors } from "$lib/jsons/defaults.json";
  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";

  import { onMount } from "svelte";

  let data = $props();
</script>

<div
  style="background-image: linear-gradient({data.profileData.palette[0]}, {data
    .profileData.palette[1]});"
  class="flex flex-col max-w-85 bg-linear-to-br rounded-md p-1"
>
  <div class="relative">
    <img
      class="relative w-85 h-30 object-cover object-bottom rounded-t-sm"
      src={data.profileData.banner}
      alt="banner"
    />

    <img
      style="border-color: {defaultStatusColors[data.profileData.status]};"
      class="absolute w-32 z-10 left-2 top-1/2 border-4 rounded-full"
      src={data.profileData.avatar}
      alt="pfp"
    />
  </div>

  <div class="bg-shiroko-1 border-salt-1 pb-6 rounded-b-sm font-[Google_Sans]">
    <div class="px-2.5 mt-18 text-white text-sm">
      <p class="font-[Shippori_Mincho] text-xl">
        {data.profileData.display_name}
      </p>
      <p>{data.profileData.username} &bull; I exist</p>
      <a
        class="flex flex-row items-center justify-center w-fit px-1 mt-0.5 border-2 border-double border-shiroko-2 rounded-lg drop-shadow-md drop-shadow-shiroko-5"
        href={PUBLIC_GUILD_INVITE}
        target="_blank"
      >
        <img
          class="w-3.5 h-3.5 mr-0.5"
          src={data.profileData.badge}
          alt="guild tag"
        />
        <p class="text-xs font-extrabold">{data.profileData.guild_tag}</p>
      </a>

      <p class="font-bold mt-5">Current Time:</p>
      <p class="mb-5">{data.profileData.date}</p>
      <Activities activityBG={data.profileData.palette[2]} />
      <div class="flex flex-col gap-2 mb-4">
        <p class="font-bold">Connections</p>
        <Connections />
      </div>
      <div class="flex flex-row gap-2">
        <button
          style="background-color: {data.profileData.palette[2]};"
          class="grow p-2 items-center-safe rounded-xl text-md cursor-pointer"
          onclick={() => changeVisibility()}>More &raquo;</button
        >
      </div>
    </div>
  </div>
</div>
