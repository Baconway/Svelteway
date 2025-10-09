<script lang="js">
  let c = $state(null);

  $effect(async (params) => {
    const response = await fetch(
      "https://api.lanyard.rest/v1/users/714482641134551071"
    );

    const data = await response.json();
    c = data.data.discord_status;
  });
</script>

{#if !c}
  <div
    class="rounded-4xl border-black not-dark:border-amber-50 border-10 w-16 h-16 absolute -bottom-5 -right-7 bg-gray-700"
  ></div>
{:else if c == "dnd"}
  <div
    class="rounded-4xl border-black not-dark:border-amber-50 border-10 w-16 h-16 absolute -bottom-5 -right-7 bg-red-600"
  ></div>
{:else if c == "online"}
  <div
    class="rounded-4xl border-black not-dark:border-amber-50 border-10 w-16 h-16 absolute -bottom-5 -right-7 bg-green-500"
  ></div>
{:else if c == "offline"}
  <div
    class="rounded-4xl border-black not-dark:border-amber-50 border-10 w-16 h-16 absolute -bottom-5 -right-7 bg-gray-700"
  ></div>
{/if}
