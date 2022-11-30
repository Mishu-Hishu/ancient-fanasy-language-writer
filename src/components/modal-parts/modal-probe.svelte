<script>
  export let position; // edge|center
  export let type; // left|mid|right|altleft|altmid|altright
  export let color = "";
</script>

<main>
  {#if type === "left"}
    <div class="probe-left-container">
      <div class={`probe-left ${color} ${position}`} />
    </div>
  {:else if type === "mid"}
    <div class="probe-mid-container">
      <div class={`probe-mid ${color} ${position}`} />
    </div>
  {:else if type === "right"}
    <div class="probe-right-container">
      <div class={`probe-right ${color} ${position}`} />
    </div>
  {:else if type === "altleft"}
    <div class="probe-left-container">
      <div class={`probe-left ${color} ${position}`} />
    </div>
    <div class="altprobe-left-container">
      <div class={`altprobe-left ${color} alt-${position}`} />
    </div>
  {:else if type === "altmid"}
    <div>
      <div class="probe-left-container">
        <div class={`probe-left ${color} ${position}`} />
      </div>
      <div class="altprobe-left-container">
        <div class={`altprobe-left ${color} alt-${position}`} />
      </div>
      <div class="probe-right-container">
        <div class={`probe-right ${color} ${position}`} />
      </div>
      <div class="altprobe-right-container">
        <div class={`altprobe-right ${color} alt-${position}`} />
      </div>
    </div>
  {:else if type === "altright"}
    <div class="probe-right-container">
      <div class={`probe-right ${color} ${position}`} />
    </div>
    <div class="altprobe-right-container">
      <div class={`altprobe-right ${color} alt-${position}`} />
    </div>
  {/if}
</main>

<style>
  /* UPPER LEFT PROBE */
  .probe-left-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .probe-left {
    margin-top: 15%;
    margin-right: 25%;
    width: 30%;
    height: 8%;
    background: black;
  }
  /* ======== */

  /* UPPER MIDDLE PROBE */
  .probe-mid-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .probe-mid {
    margin-top: 15%;
    width: 40%;
    height: 8%;
    background: black;
  }
  /* ======== */

  /* UPPER RIGHT PROBE */
  .probe-right-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .probe-right {
    margin-top: 15%;
    margin-left: 25%;
    width: 30%;
    height: 8%;
    background: black;
  }
  /* ======== */

  /* UPPER LEFT ALTERNATIVE PROBE */
  .altprobe-left-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .altprobe-left {
    margin-right: 50%;
    margin-top: 5%;
    width: 8%;
    height: 30%;
    background: black;
  }
  /* ======== */

  /* UPPER RIGHT ALTERNATIVE PROBE */
  .altprobe-right-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .altprobe-right {
    margin-left: 50%;
    margin-top: 5%;
    width: 8%;
    height: 30%;
    background: black;
  }
  /* ========= */

  .center {
    margin-top: 50%;
  }

  .alt-center {
    margin-top: 40%
  }

  .red {
    background-color: red;
  }
</style>
