<script>
  import { PUBLIC_USERID } from "$env/static/public";

  import Connections from "$modules/connections.svelte";
  import { defaultStatusColors } from "$lib/defaults/defaults.json";
  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";

  let status = $state("gray");

  const StatusSocket = new WebSocket("wss://api.lanyard.rest/socket");
  StatusSocket.addEventListener("message", (event) => {
    const socketResponse = JSON.parse(event.data);

    if (socketResponse.op === 1) {
      StatusSocket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_ids: [PUBLIC_USERID],
          },
        }),
      );

      return;
    }

    if (socketResponse.op === 0) {
      try {
        status =
          defaultStatusColors[socketResponse.d[PUBLIC_USERID].discord_status];
      } catch (TypeError) {
        status = defaultStatusColors[socketResponse.d.discord_status];
      }

      return;
    }
  });

  let data = $props();
</script>

<div
  style="background-image: linear-gradient({data.profileData.palette[0]}, {data
    .profileData.palette[1]});"
  class="flex flex-col bg-linear-to-br rounded-md p-1 duration-300"
  transition:slide={{ axis: "x" }}
>
  <div class="relative">
    <img
      class="relative w-[340px] h-[120px] object-cover object-bottom rounded-t-sm"
      src={data.profileData.banner}
      alt="banner"
    />

    <img
      style="border-color: {status};"
      class="absolute w-[128px] z-10 left-2 top-1/2 border-4 rounded-full"
      src={data.profileData.avatar}
      alt="pfp"
    />
  </div>

  <div class="bg-shiroko-1 border-salt-1 pb-6 rounded-b-sm font-[Google_Sans]">
    <div class="px-2.5 mt-[72px] text-white text-sm">
      <p class="font-[Shippori_Mincho] text-xl">
        {data.profileData.display_name}
      </p>
      <p>{data.profileData.username} &bull; I exist</p>
      <div
        class="flex flex-row items-center justify-center w-fit px-1 border-2 border-double border-shiroko-2 rounded-lg"
      >
        <img
          class="w-[14px] h-[14px] mr-0.5"
          src={data.profileData.badge}
          alt="guild tag"
        />
        <p class="text-xs font-extrabold">{data.profileData.guild_tag}</p>
      </div>

      <p class="font-bold mt-5">Current Time:</p>
      <p class="mb-5">{data.profileData.date}</p>
      <div class="flex flex-col gap-2 mb-4">
        <p class="font-bold">Connections</p>
        <Connections />
      </div>
      <div class="flex flex-row gap-2">
        <button
          style="background-color: {data.profileData.palette[2]};"
          class="grow-1 p-2 items-center-safe rounded-xl text-md cursor-pointer"
          onclick={() => changeVisibility()}>More &raquo;</button
        >
      </div>
    </div>
  </div>
</div>
