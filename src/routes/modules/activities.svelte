<script>
  import { fade, scale, slide } from "svelte/transition";
  import { PUBLIC_USERID } from "$env/static/public";
  import { interpretImageLinks, cleanUpActivities } from "$lib/utilities";
  import { onMount } from "svelte";

  let activities = $state();
  let iterator = $state(0);

  onMount(async () => {
    const response = await fetch(
      `https://api.lanyard.rest/v1/users/${PUBLIC_USERID}`,
    );

    const data = await response.json();
    activities = cleanUpActivities(data.data.activities);
  });

  let data = $props();
</script>

{#snippet ActivityBox()}
  <div
    transition:slide
    style="background-color: {data.activityBG};"
    class="relative flex flex-col gap-2 z-20 px-3 py-4 rounded-lg shadow-activityCard select-none animate-pulse"
    onanimationiteration={() => {
      iterator++;
      if (iterator > activities.length - 1) iterator = 0;
    }}
  >
    <div class="flex flex-row justify-between items-center">
      <p class="text-[12px]">Playing</p>
    </div>

    <div class="flex flex-row gap-2">
      <div class="relative shrink-0">
        {#if activities[iterator].assets}
          <img
            class="relative w-15 h-15 rounded-lg object-contain"
            src={interpretImageLinks(
              activities[iterator].application_id,
              activities[iterator].assets.large_image,
            )}
            alt="big img"
            title={activities[iterator].assets.large_text}
          />
          {#if activities[iterator].assets.small_image}
            <img
              style="background-color: {data.activityBG}; border-color: {data.activityBG}; "
              class="absolute -bottom-1 -right-1 w-6 h-6 z-20 rounded-full object-cover"
              src={interpretImageLinks(
                activities[iterator].application_id,
                activities[iterator].assets.small_image,
              )}
              alt="small img"
              title={activities[iterator].assets.small_text}
            />{/if}
        {:else}
          <img
            class="relative w-15 h-15 rounded-lg object-contain"
            src="/salt2.png"
            alt="big img"
            title="Playing something"
          />{/if}
      </div>

      <div class="flex flex-col text-sm truncate">
        <p class="text-[16px]">{activities[iterator].name}</p>
        <p class="truncate" title={activities[iterator].details}>
          {activities[iterator].details}
        </p>
        <p class="truncate">{activities[iterator].state}</p>
      </div>
    </div>
  </div>
{/snippet}

{#if activities}
  <div class="flex flex-col rounded-lg gap-2 my-2">
    {@render ActivityBox()}
  </div>
{/if}
