<script>
  export let position; // edge|center
  export let type; // left|mid|right|altleft|altmid|altright
</script>

<main class={`${position}-probe`}>
  {#if type === "left"}
    <div class="probe-left-container">
      <div class="probe-left" />
    </div>
  {:else if type === "mid"}
    <div class="probe-mid-container">
      <div class="probe-mid" />
    </div>
  {:else if type === "right"}
    <div class="probe-right-container">
      <div class="probe-right" />
    </div>
  {:else if type === "altleft"}
    <div class="probe-left-container">
      <div class="probe-left" />
    </div>
    <div class="altprobe-left-container">
      <div class="altprobe-left" />
    </div>
  {:else if type === "altmid"}
    <div>
      <div class="probe-left-container">
        <div class="probe-left" />
      </div>
      <div class="altprobe-left-container">
        <div class="altprobe-left" />
      </div>
      <div class="probe-right-container">
        <div class="probe-right" />
      </div>
      <div class="altprobe-right-container">
        <div class="altprobe-right" />
      </div>
    </div>
  {:else if type === "altright"}
    <div class="probe-right-container">
      <div class="probe-right" />
    </div>
    <div class="altprobe-right-container">
      <div class="altprobe-right" />
    </div>
  {/if}
</main>

<style>
  /* UPPER LEFT PROBE */
  .probe-left-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .probe-left {
    margin-top: 5%;
    margin-right: 10%;
    width: 15%;
    height: 5%;
    background: black;
  }
  /* ======== */

  /* UPPER MIDDLE PROBE */
  .probe-mid-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .probe-mid {
    margin-top: 5%;
    width: 15%;
    height: 5%;
    background: black;
  }
  /* ======== */

  /* UPPER RIGHT PROBE */
  .probe-right-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .probe-right {
    margin-top: 5%;
    margin-left: 10%;
    width: 15%;
    height: 5%;
    background: black;
  }
  /* ======== */

  /* UPPER LEFT ALTERNATIVE PROBE */
  .altprobe-left-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .altprobe-left {
    margin-right: 20%;
    /* margin-top: -2%; */
    width: 5%;
    height: 15%;
    background: black;
  }
  /* ======== */

  /* UPPER RIGHT ALTERNATIVE PROBE */
  .altprobe-right-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .altprobe-right {
    margin-left: 20%;
    width: 5%;
    height: 15%;
    background: black;
  }
  /* ========= */

  .center-probe {
    width: 100%;
    height: 100%;
    translate: 0 17%;
  }
</style>
