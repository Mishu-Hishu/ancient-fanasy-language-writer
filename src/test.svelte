<script>
  const fillerCells = [1, 20, 66, 85];
</script>

<main>
  <div class="grid">
    {#each Array(85) as _, i}
      {#if fillerCells.includes(i+1)}
        <div class={`cell item${i + 1}`} />
      {:else}
        <div class={`cell item${i + 1}`}>{i + 1}</div>
      {/if}
    {/each}
  </div>
</main>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(15, auto);
    gap: 1px;
    justify-content: space-evenly;
    background-color: green;
  }

  .cell {
    background: #333;
    color: #aaa;
    width: 40px;
    height: 40px;
  }

  .item1 {
    grid-row: 1 / span 6;
    grid-column: 1 / 7;
  }

  .item20 {
    grid-column: 10 / span 6;
    grid-row: 1 / span 6;
  }

  .item66 {
    grid-column: 1 / 7;
    grid-row: 10 / span 6;
  }

  .item85 {
    grid-column: 10 / span 6;
    grid-row: 10 / span 6;
  }
</style>
