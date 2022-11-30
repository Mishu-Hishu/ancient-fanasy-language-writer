<script>
  import Limb from "./modal-limb.svelte";
  import Probe from "./modal-probe.svelte";

  export let arm = "upper-arm";
  export let character;
  export let color;

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
  <Limb {color}/>

  <!-- probes based on arm -->
  {#if arm === "upper-arm"}
    <!-- up edge -->
    {#if character[2]}
      <Probe position="edge" type={mapIndexToProbes[character[2]]} {color} />
    {/if}
    <!-- up center -->
    {#if character[3]}
      <Probe position="center" type={mapIndexToProbes[character[3]]} {color} />
    {/if}
  {:else if arm === "left-arm"}
    <!-- left edge -->
    {#if character[5]}
      <Probe position="edge" type={mapIndexToProbes[character[5]]} {color} />
    {/if}
    <!-- left center -->
    {#if character[6]}
      <Probe position="center" type={mapIndexToProbes[character[6]]} {color} />
    {/if}
  {:else if arm === "bottom-arm"}
    <!-- bottom edge -->
    {#if character[8]}
      <Probe position="edge" type={mapIndexToProbes[character[8]]} {color} />
    {/if}
    <!-- bottom center -->
    {#if character[9]}
      <Probe position="center" type={mapIndexToProbes[character[9]]} {color} />
    {/if}
  {:else if arm === "right-arm"}
    <!-- right edge -->
    {#if character[11]}
      <Probe position="edge" type={mapIndexToProbes[character[11]]} {color} />
    {/if}
    <!-- right center -->
    {#if character[12]}
      <Probe position="center" type={mapIndexToProbes[character[12]]} {color} />
    {/if}
  {/if}
</main>

<style>
  /* UPPER ARM */
  .upper-arm {
    width: 100%;
    height: 100%;
    /*transform: rotate(0deg);*/
  }

  .left-arm {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .bottom-arm {
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
  }

  .right-arm {
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
  }
</style>
