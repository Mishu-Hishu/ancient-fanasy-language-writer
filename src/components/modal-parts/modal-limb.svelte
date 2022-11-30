<script>
  export let color;
</script>

<main class="limb-container">
  <div class="limb" style:background-color={color} />
</main>

<style>
  /* UPPER LIMB */
  .limb-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .limb {
    width: 8%;
    height: 84%;
    background: black;
  }
  /* ======== */
</style>
