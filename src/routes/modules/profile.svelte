<script>
  import { PUBLIC_USERID, PUBLIC_GUILD_INVITE } from "$env/static/public";

  import Connections from "$modules/connections.svelte";
  import { defaultStatusColors } from "$lib/jsons/defaults.json";
  import { changeVisibility, getVisibility } from "$modules/state.svelte.js";

  /*const StatusSocket = new WebSocket("wss://api.lanyard.rest/socket");
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
  });*/

  let data = $props();
</script>

<div
  style="background-image: linear-gradient({data.profileData.palette[0]}, {data
    .profileData.palette[1]});"
  class=" self-start flex flex-col bg-linear-to-br rounded-md p-1 duration-300"
  transition:slide={{ axis: "x" }}
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
          class="w-[14px] h-[14px] mr-0.5"
          src={data.profileData.badge}
          alt="guild tag"
        />
        <p class="text-xs font-extrabold">{data.profileData.guild_tag}</p>
      </a>

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
