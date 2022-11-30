<script>
  export let color;
</script>

<main class="dot-container">
  <div class="dot" style:background-color={color} />
</main>

<style>
  /* DOT */
  .dot-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dot {
    width: 20%;
    height: 20%;
    background: black;
    border-radius: 50%;
  }
  /* ======== */
</style>
