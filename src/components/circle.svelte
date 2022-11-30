<script>
  import { COLORS } from "../constants/colors";
  
  export let hover;
</script>

<main class="circle-container">
  <div class="outer-circle">
    <div
      class="inner-circle"
      style:background={hover ? COLORS.backgroundHover : COLORS.background}
    />
  </div>
</main>

<style>
  /* CIRCLE */
  .circle-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outer-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 30%;
    background: black;
    border-radius: 50%;
  }

  .inner-circle {
    width: 60%;
    height: 60%;
    border-radius: 50%;
  }
  /* ======= */
</style>
