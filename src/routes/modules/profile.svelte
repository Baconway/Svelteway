<script>
  import { fade, scale } from "svelte/transition";

  import dayJS from "dayjs";
  import utc from "dayjs/plugin/utc";
  import timezone from "dayjs/plugin/timezone";
  import advanedFormat from "dayjs/plugin/advancedFormat";

  import { PUBLIC_USERID, PUBLIC_GUILD_INVITE } from "$env/static/public";

  import Connections from "$modules/connections.svelte";
  import Activities from "$modules/activities.svelte";
  import {
    changeVisibility,
    getVisibility,
    setDescription,
    getDescription,
  } from "$modules/state.svelte.js";

  import {
    defaultStatusColors,
    default_timezone,
    default_format,
    template_banner,
  } from "$lib/jsons/defaults.json";
  import { shouldTextBeBlack } from "$lib/utilities";

  // extend module https://day.js.org/docs/en/plugin/plugin
  dayJS.extend(utc);
  dayJS.extend(timezone);
  dayJS.extend(advanedFormat);

  const GetDate = dayJS();

  let data = $props();
  let currentTime = $state(GetDate.tz(default_timezone).format(default_format));
  let currentStatus = $state("offline");

  setInterval(async () => {
    currentTime = dayJS().tz(default_timezone).format(default_format);
    let statusChange = await fetch(
      `https://api.lanyard.rest/v1/users/${PUBLIC_USERID}`,
    );
    statusChange = await statusChange.json();

    if (!statusChange.success) return;
    currentStatus = statusChange.data.discord_status;
  }, 60000);

  $effect(async () => {
    let randomizer = await fetch("/randomizer");
    randomizer = await randomizer.json();
    setDescription(randomizer);
  });
</script>

<div
  style="background-image: linear-gradient({getDescription()
    .palette[0]}, {getDescription().palette[1]});"
  class="flex flex-col max-w-85 bg-linear-to-br rounded-md p-1"
>
  <div class="relative select-none">
    <img
      class="relative w-85 h-30 object-cover object-bottom rounded-t-sm {getDescription()
        .name
        ? 'animate-none'
        : 'animate-pulse'}"
      draggable="false"
      src={getDescription().name
        ? `/_banners/${getDescription().name}`
        : template_banner}
      alt="banner"
    />

    <img
      style="border-color: {defaultStatusColors[data.profileData.status]};"
      class="absolute w-32 z-10 left-2 top-1/2 border-4 rounded-full"
      src={data.profileData.avatar}
      alt="pfp"
      draggable="false"
    />
  </div>

  <div class="bg-shiroko-1 border-salt-1 pb-6 rounded-b-sm font-[Google_Sans]">
    <div class="px-2.5 mt-18 text-white text-sm">
      <p class="font-[Shippori_Mincho] text-xl">
        {data.profileData.display_name}
      </p>
      <p>{data.profileData.username} &bull; I exist</p>
      {#if data.profileData.badge !== undefined}
        {console.log(data.profileData.badge)}
        <a
          class="flex flex-row items-center justify-center w-fit px-1 mt-0.5 mb-5 border-2 border-double border-shiroko-2 rounded-lg drop-shadow-md drop-shadow-shiroko-5"
          href={PUBLIC_GUILD_INVITE}
          target="_blank"
        >
          <img
            class="w-3.5 h-3.5 mr-0.5"
            src={data.profileData.badge}
            alt="guild tag"
          />
          <p class="text-xs font-extrabold">{data.profileData.guild_tag}</p>
        </a>{/if}

      <p class="font-bold mt-0.5">Current Time:</p>
      <p class="mb-5">{currentTime}</p>
      <Activities activityBG={getDescription().palette[2]} />
      <div class="flex flex-col gap-2 mb-4">
        <p class="font-bold">Connections</p>
        <Connections steam={data.steamData} />
      </div>
      <div class="flex flex-row gap-2">
        <button
          style="background-color: {getDescription()
            .palette[2]}; color: {shouldTextBeBlack(getDescription().palette[2])
            ? 'black'
            : 'white'}"
          class="grow p-2 items-center-safe rounded-xl text-md cursor-pointer"
          onclick={() => changeVisibility()}>More &raquo;</button
        >
      </div>
    </div>
  </div>
</div>
