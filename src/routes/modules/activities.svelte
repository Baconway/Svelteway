<script>
  import { fade, scale } from "svelte/transition";
  import { interpretImageLinks, cleanUpActivities } from "../utilities";

  let activities = $state(null);

  $effect(async (params) => {
    const response = await fetch(
      "https://api.lanyard.rest/v1/users/714482641134551071"
    );

    const data = await response.json();
    activities = cleanUpActivities(data.data.activities);
  });
</script>

{#snippet activityBoxImage(imgSize, activity)}
  <img
    class={imgSize == "large"
      ? "w-[75px] rounded-md"
      : "absolute -bottom-0.5 -right-3 w-[30px] rounded-3xl"}
    alt="activity"
    src={interpretImageLinks(
      activity.application_id,
      activity.assets[imgSize.concat("_image")]
    )}
    title={activity.assets[imgSize.concat("_text")]
      ? `${activity.assets[imgSize.concat("_text")]}`
      : ""}
  />
{/snippet}

<div
  class="flex flex-row duration-100 gap-3.5
  not-md:flex-col"
  transition:scale
>
  {#each activities as activity}
    <div
      class="flex flex-row gap-4 w-lg p-1.5 rounded-sm border-2 border-indigo-700 dark:border-salt-blue text-black dark:text-amber-50 bg-gray-300 dark:bg-gray-800 ml-0.5"
    >
      <div class="relative">
        {@render activityBoxImage("large", activity)}
        {#if activity.assets.small_image}
          {@render activityBoxImage("small", activity)}
        {/if}
      </div>

      <div class="flex flex-col w-[86%] justify-center">
        <p class="text-xl font-bold truncate" title={activity.name}>
          {activity.name}
        </p>

        <p class="text-sm truncate" title={activity.details}>
          {activity.details}
        </p>

        <p class="text-sm truncate" title={activity.state}>
          {activity.state}
        </p>
      </div>
    </div>
  {/each}
</div>
