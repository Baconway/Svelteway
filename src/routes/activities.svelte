<script>
  let activities = $state(null);

  $effect(async (params) => {
    const response = await fetch(
      "https://api.lanyard.rest/v1/users/714482641134551071"
    );

    const data = await response.json();
    activities = data.data.activities;
  });
</script>

<div class="absolute bottom-0 right-0">
  <div class="flex flex-row gap-1">
    <img alt="activity" src="/salt.png" />
    <!--{#each activities as activity}
            
        {/each}-->
  </div>
</div>
