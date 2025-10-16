<script>
  import { fade, scale } from "svelte/transition";
  import { interpretImageLinks, cleanUpActivities } from "../utilities";

  let activities = $state(null);
  let visible = $state(true);

  $effect(async (params) => {
    const response = await fetch(
      "https://api.lanyard.rest/v1/users/714482641134551071"
    );

    const data = await response.json();
    activities = cleanUpActivities(data.data.activities);
    console.log(activities);
  });
</script>

<!--overlaps with avatar, might wanna make it collapse if height isnt a certain amount-->
<div class="absolute bottom-0 flex flex-col justify-center items-start">
  <button
    class="relative top-0 left-0 border-t-2 border-l-2 border-r-2 text-white rounded-t-4xl not-dark:border-black"
    onclick={() => {
      visible = !visible;
    }}
    ><img class="h-6 dark:invert" alt="collapse" src="/menu-swap.svg" /></button
  >
  <div class="w-[100vw] mb-1 border-1 border-black dark:border-white"></div>

  {#if visible}
    <div class="flex flex-row duration-100 gap-3.5" transition:fade>
      {#each activities as activity}
        <div
          class="flex flex-row gap-4 w-xl p-1.5 rounded-sm border-2 border-indigo-700 dark:border-salt-blue text-black dark:text-amber-50 bg-gray-300 dark:bg-gray-800"
        >
          <div class=" relative">
            <img
              class="w-[75px] rounded-md"
              alt="activity"
              src={interpretImageLinks(
                activity.application_id,
                activity.assets.large_image
              )}
              title={activity.assets.large_text
                ? `${activity.assets.large_text}`
                : ""}
            />
            {#if activity.assets.small_image}
              <img
                class="absolute bottom-0 -right-3 w-[30px] rounded-3xl"
                alt="small asset"
                src={interpretImageLinks(
                  activity.application_id,
                  activity.assets.small_image
                )}
                title={activity.assets.small_text
                  ? `${activity.assets.small_text}`
                  : ""}
              />
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
  {/if}
</div>
