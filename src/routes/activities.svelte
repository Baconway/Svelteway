<script>
  import { slide } from "svelte/transition";
  import { interpretImageLinks } from "./utilities";

  let activities = $state(null);
  let visible = $state(true);

  $effect(async (params) => {
    const response = await fetch(
      "https://api.lanyard.rest/v1/users/714482641134551071"
    );

    const data = await response.json();
    activities = data.data.activities;
  });
</script>

<!--overlaps with avatar, might wanna make it collapse if height isnt a certain amount-->
<div
  class="absolute bottom-0 right-[33%] flex flex-col justify-center items-start"
>
  <button
    class="relative top-0 left-0 border-t-2 border-l-2 border-r-2 text-white rounded-t-4xl"
    onclick={() => {
      visible = !visible;
    }}
    ><img
      class="h-6 dark:invert {visible ? 'rotate-0' : 'rotate-180'}"
      alt="collapse"
      src="/menu-swap.svg"
    /></button
  >
  <div class="w-xl mb-1 border-1 border-black dark:border-white"></div>

  {#if visible}
    <div class="flex flex-col duration-100 gap-3.5" transition:slide>
      {#each activities as activity}
        <div class="flex flex-row gap-4 w-xl border-1 border-blue-600">
          <div class=" relative">
            <img
              class="w-[75px] rounded-md"
              alt="activity"
              src={interpretImageLinks(
                activity.application_id,
                activity.assets.large_image
              )}
            />
            {#if activity.assets.small_image}
              <img
                class="absolute bottom-0 -right-3 w-[30px] rounded-3xl"
                alt="small asset"
                src={interpretImageLinks(
                  activity.application_id,
                  activity.assets.small_image
                )}
              />
            {/if}
          </div>

          <div class="flex flex-col w-[86%] justify-center">
            <p
              class="text-xl font-bold text-black dark:text-amber-50 truncate"
              title={activity.name}
            >
              {activity.name}
            </p>

            <p
              class="text-sm text-black dark:text-amber-50 truncate"
              title={activity.details}
            >
              {activity.details}
            </p>

            <p
              class="text-sm text-black dark:text-amber-50 truncate"
              title={activity.state}
            >
              {activity.state}
            </p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
