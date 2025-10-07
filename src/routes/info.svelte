<script>
  import { links } from "../paths.json";
</script>

<div class="flex flex-row items-center justify-center gap-4 w-[64%] mt-1">
  <a href={links[0].url}
    ><img
      class="w-10 h-10 dark:invert"
      alt="img 1"
      src={links[0].path}
      title={links[0].title}
    /></a
  >

  <a href={links[1].url}
    ><img
      class="w-10 h-10 not-dark:invert"
      alt="img 2"
      src={links[1].path}
      title={links[1].title}
    /></a
  >

  <a href={links[2].url}
    ><img
      class="w-10 h-10 dark:invert"
      alt="img 1"
      src={links[2].path}
      title={links[2].title}
    /></a
  >

  <a href={links[3].url}
    ><img
      class="w-10 h-10 dark:invert"
      alt="img 3"
      src={links[3].path}
      title={links[3].title}
    /></a
  >
</div>
