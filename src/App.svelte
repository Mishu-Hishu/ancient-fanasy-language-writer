<script>
  import Line from "./components/line.svelte";
  // import ModalContent from "./components/modal-content.svelte";
  import ModalContent from "./components/modal2-content.svelte";
  import { EmptyLine, demoFile, newCharacter } from "./constants/structures";

  let currentDoc = 0;
  let modalOpen = false;
  let selectedCharacter = null;

  let file = demoFile;

  const openCharModal = (detail) => {
    modalOpen = true;
    selectedCharacter = file.documents[currentDoc].lines[detail.line].characters[detail.char];
  }

  const addLine = () => {
    const newLine = new EmptyLine();
    console.log(newLine);
    file.documents[currentDoc].lines.push(newLine);
    file = file;
  }

  const addCharacter = ({lineNumber}) => {
    const newChar = newCharacter();
    file.documents[currentDoc].lines[lineNumber].characters.push(newChar);
    file = file;
  }
</script>

<main>
  {#each file.documents[currentDoc].lines as line, i}
    <Line 
      characters={line.characters}
      lineNumber={i} 
      on:charClick={({detail}) => openCharModal(detail)}
      on:addChar={({detail}) => addCharacter(detail)}
    />
  {/each}
  <div>
    <button on:click={addLine}>Add Line</button>
  </div>
  <div class="buttons-wrapper">
    <div>
      <button on:click={() => {
        if(currentDoc > 0) currentDoc--;
      }}>Previous</button>
    </div>
    <div>
      <button on:click={() => {
        if(currentDoc < file.documents.length-1) currentDoc++;
      }}>Next</button>
    </div>
  </div>

  {#if modalOpen}
    <div 
      class="modal"
      on:click|self={() => {modalOpen = false; selectedCharacter = null; console.log('clicked')}}
      on:keydown={() => {}}
      >
      <ModalContent character={selectedCharacter} on:updateui={() => file = file} />
    </div>
  {/if}
</main>

<style>
  .buttons-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #0005;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
