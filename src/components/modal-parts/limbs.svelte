<script>
  export let arm;
  export let dataValue;
  export let myValue;

  $: color = myValue === dataValue ? "red" : "black";
</script>

<main style:--bgColor={color}>
  {#if arm === "top" || arm === "bottomarm"}
    <div class={`container ${arm}`}>
      <div class="limb" />
    </div>
  {:else}
    <div class={`container ${arm}`}>
      <div class="limb" />
    </div>
  {/if}
</main>

<style>
  .container {
    position: relative;
    width: 30px;
    height: 50px;
  }

  .limb {
    margin: auto;
    width: 5px;
    height: 100%;
    background: var(--bgColor);
  }

  .leftarm {
    rotate: -90deg;
  }

  .bottomarm {
    rotate: 180deg;
  }

  .rightarm {
    rotate: 90deg;
  }
</style>
