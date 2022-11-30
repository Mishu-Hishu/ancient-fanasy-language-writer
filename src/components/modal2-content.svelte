<script>
  import { createEventDispatcher } from "svelte";
  import ModalChar from "./modal-parts/modal-character.svelte";

  export let character;

  const dispatch = createEventDispatcher();
  const parts = [
    "middle",
    "top",
    "left",
    "bottom",
    "right",
    "top-edge",
    "top-middle",
    "left-edge",
    "left-middle",
    "bottom-edge",
    "bottom-middle",
    "right-edge",
    "right-middle",
  ];
  let selected = 0;

  const styleCharPiece = (dataPiece, uiPiece) => {
    return dataPiece === uiPiece ? "pink" : "";
  };

  const togglePiece = (pieceIndex, uiPiece) => {
    if (character[pieceIndex] !== uiPiece) {
      character[pieceIndex] = uiPiece;
    } else {
      character[pieceIndex] = 0;
    }
    dispatch("updateui");
  };

  const changeSelect = (evData) => {
    selected = evData.button;
  }
</script>

<main class="modal-content">
  <ModalChar character={[1,1,6,6,1,6,6,1,6,6,1,6,6,1]} on:select={(e) => {changeSelect(e.detail)}} />
  <ModalChar character={character} on:select={(e) => {changeSelect(e.detail)}} onTop={true} color={"red"}/>

  <div class="toggle-buttons">
    {#if parts[selected] === "middle"}
      <button on:click={() => togglePiece(0,1)}>Circle</button>
      <button on:click={() => togglePiece(13,1)}>Dot</button>
    {:else if parts[selected] === "top"}
      <button on:click={() => togglePiece(1,1)}>Line</button>
      <button on:click={() => changeSelect({button:5})}>Edge</button>
      <button on:click={() => changeSelect({button:6})}>Middle</button>
    {:else if parts[selected] === "left"}
      <button on:click={() => togglePiece(4,1)}>Line</button>
      <button on:click={() => changeSelect({button:7})}>Edge</button>
      <button on:click={() => changeSelect({button:8})}>Middle</button>
    {:else if parts[selected] === "bottom"}
      <button on:click={() => togglePiece(7,1)}>Line</button>
      <button on:click={() => changeSelect({button:9})}>Edge</button>
      <button on:click={() => changeSelect({button:10})}>Middle</button>
    {:else if parts[selected] === "right"}
      <button on:click={() => togglePiece(10,1)}>Line</button>
      <button on:click={() => changeSelect({button:11})}>Edge</button>
      <button on:click={() => changeSelect({button:12})}>Middle</button>
    {:else if parts[selected] === "top-edge"}
      <button on:click={() => togglePiece(2,1)}>left</button>
      <button on:click={() => togglePiece(2,2)}>mid</button>
      <button on:click={() => togglePiece(2,3)}>right</button>
      <br>
      <button on:click={() => togglePiece(2,4)}>Alt left</button>
      <button on:click={() => togglePiece(2,6)}>Alt mid</button>
      <button on:click={() => togglePiece(2,5)}>Alt right</button>
    {:else if parts[selected] === "top-middle"}
      <button on:click={() => togglePiece(3,1)}>left</button>
      <button on:click={() => togglePiece(3,2)}>mid</button>
      <button on:click={() => togglePiece(3,3)}>right</button>
      <br>
      <button on:click={() => togglePiece(3,4)}>Alt left</button>
      <button on:click={() => togglePiece(3,6)}>Alt mid</button>
      <button on:click={() => togglePiece(3,5)}>Alt right</button>
    {:else if parts[selected] === "left-edge"}
      <button on:click={() => togglePiece(5,3)}>up</button>
      <button on:click={() => togglePiece(5,2)}>mid</button>
      <button on:click={() => togglePiece(5,1)}>down</button>
      <br>
      <button on:click={() => togglePiece(5,5)}>Alt up</button>
      <button on:click={() => togglePiece(5,6)}>Alt mid</button>
      <button on:click={() => togglePiece(5,4)}>Alt down</button>
    {:else if parts[selected] === "left-middle"}
      <button on:click={() => togglePiece(6,3)}>up</button>
      <button on:click={() => togglePiece(6,2)}>mid</button>
      <button on:click={() => togglePiece(6,1)}>down</button>
      <br>
      <button on:click={() => togglePiece(6,5)}>Alt up</button>
      <button on:click={() => togglePiece(6,6)}>Alt mid</button>
      <button on:click={() => togglePiece(6,4)}>Alt down</button>
    {:else if parts[selected] === "bottom-edge"}
      <button on:click={() => togglePiece(8,3)}>left</button>
      <button on:click={() => togglePiece(8,2)}>mid</button>
      <button on:click={() => togglePiece(8,1)}>right</button>
      <br>
      <button on:click={() => togglePiece(8,5)}>Alt left</button>
      <button on:click={() => togglePiece(8,6)}>Alt mid</button>
      <button on:click={() => togglePiece(8,4)}>Alt right</button>
    {:else if parts[selected] === "bottom-middle"}
      <button on:click={() => togglePiece(9,3)}>left</button>
      <button on:click={() => togglePiece(9,2)}>mid</button>
      <button on:click={() => togglePiece(9,1)}>right</button>
      <br>
      <button on:click={() => togglePiece(9,5)}>Alt left</button>
      <button on:click={() => togglePiece(9,6)}>Alt mid</button>
      <button on:click={() => togglePiece(9,4)}>Alt right</button>
    {:else if parts[selected] === "right-edge"}
      <button on:click={() => togglePiece(11,1)}>up</button>
      <button on:click={() => togglePiece(11,2)}>mid</button>
      <button on:click={() => togglePiece(11,3)}>down</button>
      <br>
      <button on:click={() => togglePiece(11,4)}>Alt up</button>
      <button on:click={() => togglePiece(11,6)}>Alt mid</button>
      <button on:click={() => togglePiece(11,5)}>Alt down</button>
    {:else if parts[selected] === "right-middle"}
      <button on:click={() => togglePiece(12,1)}>up</button>
      <button on:click={() => togglePiece(12,2)}>mid</button>
      <button on:click={() => togglePiece(12,3)}>down</button>
      <br>
      <button on:click={() => togglePiece(12,4)}>Alt up</button>
      <button on:click={() => togglePiece(12,6)}>Alt mid</button>
      <button on:click={() => togglePiece(12,5)}>Alt down</button>
    {/if}
  </div>

  <div>
    <button>Delete</button>
  </div>
</main>

<style>
  :root {
    --bgColor: #ccc;
  }

  .modal-content {
    background: var(--bgColor);
    padding: 5px;
    position: relative;
  }

  .toggle-buttons {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 0;
    margin: 10px 0;
  }
</style>
