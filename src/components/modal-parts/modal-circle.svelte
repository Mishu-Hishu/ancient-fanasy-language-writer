<script>
  import Dot from "./modal-dot.svelte";

  export let dot;
  export let color;
</script>

<main class="circle-container">
  <div class="circle" style:border-color={color}>
    {#if dot}
      <Dot {color} />
    {/if}
  </div>
</main>

<style>
  /* CIRCLE */
  .circle-container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .circle {
    width: 60%;
    height: 60%;
    border: 6px solid black;
    border-radius: 50%;
  }
</style>
