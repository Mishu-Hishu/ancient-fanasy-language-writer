<script>
  import { createEventDispatcher } from "svelte";
  import Circle from "./modal-circle.svelte";
  import Arm from "./modal-arm.svelte";
  import { COLORS } from "../../constants/colors";
  
  export let character;
  export let onTop = false;
  export let color = "black";

  const dispatch = createEventDispatcher();
  const resized = Math.floor(window.innerWidth * 0.7);
  const maxSize = 300;
  const fullChar = [1, 1, 6, 6, 1, 6, 6, 1, 6, 6, 1, 6, 6, 1];
  let current = "mid"

  $: size = Math.min(resized, maxSize);

  const selectPart = (data) => {
    console.log(current);
    current = data.part;
    console.log(current);
    dispatch('select',data);
  }
</script>

<div
  class={`character ${onTop? "ontop": ""}`}
  style:--size={size + "px"}
>
  <!-- 1 -->
  <div class="item">1</div>

  <!-- 2 -->
  <div class={`item`} class:selected={current === "top"} on:click={() => selectPart({button: 1, part: "top"})} on:keydown={()=>{}}>
    <!-- upper arm -->
    {#if character[1]}
      <Arm arm="upper-arm" {character} {color} />
    {/if}
  </div>

  <!-- 3 -->
  <div class="item">3</div>

  <!-- 4 -->
  <div class={`item`} on:click={() => dispatch('select',{button: 2})} on:keydown={()=>{}}>
    <!-- left arm -->
    {#if character[4]}
      <Arm arm="left-arm" {character} {color} />
    {/if}
  </div>

  <!-- 5 -->
  <div class={`item`}  on:click={() => dispatch('select',{button: 0})} on:keydown={()=>{}}>
    {#if character[0]}
      <Circle dot={character[13]} {color}/>
    {/if}
  </div>

  <!-- 6 -->
  <div class={`item`} on:click={() => dispatch('select',{button: 4})} on:keydown={()=>{}}>
    <!-- right arm -->
    {#if character[10]}
      <Arm arm="right-arm" {character} {color} />
    {/if}
  </div>

  <!-- 7 -->
  <div class="item">7</div>

  <!-- 8 -->
  <div class={`item`} on:click={() => dispatch('select',{button: 3})} on:keydown={()=>{}}>
    <!-- bottom arm -->
    {#if character[7]}
      <Arm arm="bottom-arm" {character} {color} />
    {/if}
  </div>

  <!-- 9 -->
  <div class="item">9</div>
</div>

<style>
  .character {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1px;
    width: var(--size);
    height: var(--size);
    margin: auto;
    margin-bottom: 5px;
    justify-content: space-between;
    align-content: space-between;
  }

  .item {
    position: relative;
    width: 74px;
    height:74px;
    background-color: blue;
  }

  .selected {
    background-color: yellow;
  }

  .ontop {
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    /* margin: 0 auto; ->might be required on chrome<- */
  }

  .ontop .item {
    background: transparent;
  }
</style>
