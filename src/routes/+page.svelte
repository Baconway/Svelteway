<script lang='js'>
  /**@type {import('./$types').PageProps}*/ //type checking for base js
  let { data } = $props()
</script>

<img class="border-10 border-indigo-600 border-dashed" alt="avatar img" src={data.avatar}>

<style lang='postcss'>
  @reference 'tailwindcss';

</style>