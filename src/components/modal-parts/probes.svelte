<script>
  export let type = "left";
  export let arm = "top";
  export let dataValue;
  export let myValue;

  $: color = myValue === dataValue ? "red" : "black";
  console.log(color);
</script>

<main style:--bgColor={color}>
  {#if type === "altleft"}
    <!-- left alt -->
    <div class={`container ${arm}`}>
      <div class="left" />
      <div class="mid" />
    </div>
  {:else if type === "altmid"}
    <!-- mid alt -->
    <div class={`container ${arm}`}>
      <div class="left" />
      <div class="mid" />
      <div class="right" />
    </div>
  {:else if type === "altright"}
    <!-- right alt -->
    <div class={`container ${arm}`}>
      <div class="mid" />
      <div class="right" />
    </div>
  {:else if type === "left"}
    <!-- left -->
    <div class={`container ${arm}`}>
      <div class="mid" />
    </div>
  {:else if type === "mid"}
    <!-- mid -->
    <div class={`container ${arm}`}>
      <div class="mid" />
    </div>
  {:else if type === "right"}
    <!-- right -->
    <div class={`container ${arm}`}>
      <div class="mid" />
    </div>
  {/if}
</main>

<style>
  .container {
    position: relative;
    width: 30px;
    height: 20px;
  }

  .left {
    position: absolute;
    width: 5px;
    height: 20px;
    background: var(--bgColor);
  }

  .mid {
    position: absolute;
    width: 100%;
    height: 5px;
    background: var(--bgColor);
    top: 35%;
  }

  .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 20px;
    background: var(--bgColor);
  }

  .top {
    /*  */
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
