<script>
  import { createEventDispatcher } from 'svelte';
  import Circle from "./circle.svelte";
  import Dot from "./dot.svelte";
  import Arm from "./arm.svelte";
  import { COLORS } from "../constants/colors";

  let hover = false;
  const dispatch = createEventDispatcher();

  export let character;
  export let charNumber;
  export let lineNumber;
</script>

<div
  class="character"
  on:click={() => dispatch('charClick', {text: `Open modal.\nLine: ${lineNumber}\nChar: ${charNumber}`, line: lineNumber, char: charNumber})}
  on:keydown={() => {}}
  on:mouseenter={() => hover = true}
  on:mouseleave={() => hover = false}
  style:background={hover ? COLORS.backgroundHover : COLORS.background}
>
  {#if character[0]}
    <Circle hover={hover}/>
  {/if}
  {#if character[13]}
    <Dot />
  {/if}

  <!-- upper arm -->
  {#if character[1]}
    <Arm arm="upper-arm" character={character} />
  {/if}
  <!-- left arm -->
  {#if character[4]}
    <Arm arm="left-arm" character={character} />
  {/if}
  <!-- bottom arm -->
  {#if character[7]}
    <Arm arm="bottom-arm" character={character} />
  {/if}
  <!-- right arm -->
  {#if character[10]}
    <Arm arm="right-arm" character={character} />
  {/if}
</div>

<style>
  .character {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 5px;
  }
</style>
