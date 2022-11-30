<script>
  import Limb from "./limb.svelte";
  import Probe from "./probe.svelte";

  export let arm = "upper-arm";
  export let character;

  const errorMessage = "arm.svlete index to probe mapping error";
  const mapIndexToProbes = [
    errorMessage,
    "left",
    "mid",
    "right",
    "altleft",
    "altright",
    "altmid",
  ];
</script>

<main class={arm}>
  <!-- limb -->
  <Limb />

  <!-- probes based on arm -->
  {#if arm === "upper-arm"}
    <!-- up edge -->
    {#if character[2]}
      <Probe position="edge" type={mapIndexToProbes[character[2]]} />
    {/if}
    <!-- up center -->
    {#if character[3]}
      <Probe position="center" type={mapIndexToProbes[character[3]]} />
    {/if}
  {:else if arm === "left-arm"}
    <!-- left edge -->
    {#if character[5]}
      <Probe position="edge" type={mapIndexToProbes[character[5]]} />
    {/if}
    <!-- left center -->
    {#if character[6]}
      <Probe position="center" type={mapIndexToProbes[character[6]]} />
    {/if}
  {:else if arm === "bottom-arm"}
    <!-- bottom edge -->
    {#if character[8]}
      <Probe position="edge" type={mapIndexToProbes[character[8]]} />
    {/if}
    <!-- bottom center -->
    {#if character[9]}
      <Probe position="center" type={mapIndexToProbes[character[9]]} />
    {/if}
  {:else if arm === "right-arm"}
    <!-- right edge -->
    {#if character[11]}
      <Probe position="edge" type={mapIndexToProbes[character[11]]} />
    {/if}
    <!-- right center -->
    {#if character[12]}
      <Probe position="center" type={mapIndexToProbes[character[12]]} />
    {/if}
  {/if}

  <!-- center probe -->
  <!-- <Probe position="center" type="altmid" /> -->
</main>

<style>
  /* UPPER ARM */
  .upper-arm {
    position: absolute;
    width: 100%;
    height: 100%;
    /*transform: rotate(0deg);*/
  }

  .left-arm {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .bottom-arm {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
  }

  .right-arm {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
  }
</style>
