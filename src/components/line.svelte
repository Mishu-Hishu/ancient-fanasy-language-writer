<script>
  import { createEventDispatcher } from 'svelte';
  import Character from "./character.svelte";
  export let lineNumber;
  export let characters = [
    [1, 1,6,6, 1,6,6, 1,6,6, 1,6,6, 1],
    [1, 1,6,6, 1,6,6, 1,6,6, 1,6,6, 1],
    [1, 1,6,6, 1,6,6, 1,6,6, 1,6,6, 1],
  ];

  const dispatch = createEventDispatcher();
</script>

<main>
  {#each characters as char, i}
    <Character character={char} lineNumber={lineNumber} charNumber={i} on:charClick />
  {/each}
  <button on:click={() => dispatch("addChar",{lineNumber})}>+</button>
</main>

<style>
  main { 
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
</style>
