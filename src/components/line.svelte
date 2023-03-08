<script>
  import { createEventDispatcher } from 'svelte';
  import Character from "./character.svelte";
  import { extraUI } from '../stores/stores';

  export let lineNumber;
  export let characters = [
    [1, 1,6,6, 1,6,6, 1,6,6, 1,6,6, 1],
    [1, 1,6,6, 1,6,6, 1,6,6, 1,6,6, 1],
    [1, 1,6,6, 1,6,6, 1,6,6, 1,6,6, 1],
  ];

  const dispatch = createEventDispatcher();
</script>

<div class="main">
  <div class="row">
    {#each characters as char, i (char)}
      <Character character={char} lineNumber={lineNumber} charNumber={i} on:charClick />
    {/each}
    <div class="button">
      <button on:click={() => dispatch("addChar",{lineNumber})}>+</button>
    </div>
  </div>
  {#if $extraUI}
  <button class="delete-line" on:click={() => dispatch('deleteLine', {lineNumber})}>
    Delete Line
    <img src="images/arrow-up.svg" width="17" height="17" alt="">
  </button>
  {/if}
</div>

<style>
  .main {
    margin: 10px 0;
  }

  .row { 
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 20vw;
    margin: 0 min(5px, 1vw) 3px;
    max-width: 100px;
    max-height: 100px;
  }

  .delete-line {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 5px;
    width: 100%;
    background-color: rgb(250, 121, 121);
  }
</style>
