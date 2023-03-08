<script>
  import Line from "./components/line.svelte";
  // import ModalContent from "./components/modal-content.svelte";
  import ModalContent from "./components/modal2-content.svelte";
  import { EmptyLine, demoFile, newCharacter, EmptyDocument } from "./constants/structures";
  import { extraUI } from "./stores/stores";

  let currentDoc = 0;
  let modalOpen = false;
  let selectedCharacter = null;
  let currentLine;
  let currentChar;

  let file = demoFile;

  const openCharModal = (detail) => {
    modalOpen = true;
    selectedCharacter =
      file.documents[currentDoc].lines[detail.line].characters[detail.char];
    currentLine = detail.line;
    currentChar = detail.char;
  };

  const addDoc = (jump = true) => {
    const newDoc = new EmptyDocument();
    const index = file.documents.push(newDoc) -1;
    file = file;
    if(jump)
      currentDoc = index;
  };

  const removeDoc = () => {
    const index = currentDoc;
    if(file.documents.length > 1) {
      if(currentDoc > 0) 
        currentDoc--;
      file.documents.splice(index,1);
    } else {
      addDoc(false);
      file.documents.splice(index,1);
    }
    file = file;
  };

  const addLine = () => {
    const newLine = new EmptyLine();
    file.documents[currentDoc].lines.push(newLine);
    file = file;
  };

  const removeLine = ({lineNumber}) => {
    file.documents[currentDoc].lines.splice(lineNumber, 1);
    file = file;
  };

  const addCharacter = ({ lineNumber }) => {
    const newChar = newCharacter();
    file.documents[currentDoc].lines[lineNumber].characters.push(newChar);
    file = file;
  };

  const closeModal = () => {
    //close modal
    modalOpen = false;

    //reset meta data
    currentLine = null;
    currentChar = null;
    selectedCharacter = null;
  };

  const removeCharacter = () => {
    //update file
    file.documents[currentDoc].lines[currentLine].characters.splice(currentChar,1);
    file = file;

    closeModal();
  };
</script>

<main>
  <div>
    <button on:click={() => $extraUI = !$extraUI}>Extra UI</button>
  </div>
  {#each file.documents[currentDoc].lines as line, i (line)}
    <Line
      characters={line.characters}
      lineNumber={i}
      on:charClick={({ detail }) => openCharModal(detail)}
      on:addChar={({ detail }) => addCharacter(detail)}
      on:deleteLine={({ detail }) => removeLine(detail)}
    />
  {/each}
  <div>
    <button on:click={addLine}>Add Line</button>
  </div>
  <div class="buttons-wrapper">
    <div>
      <button
        on:click={() => {
          if (currentDoc > 0) currentDoc--;
        }}>Previous</button
      >
    </div>
    <div>
      <button
        on:click={() => {
          if (currentDoc < file.documents.length - 1) currentDoc++;
        }}>Next</button
      >
    </div>
  </div>
  {#if $extraUI}
    <div class="buttons-wrapper">
      <button on:click={() => addDoc()}>New Document</button>
      <button on:click={removeDoc}>Delete Document</button>
    </div>
  {/if}

  <div class="page-count">
    {currentDoc+1 + "/" + file.documents.length}
  </div>

  {#if modalOpen}
    <div class="modal" on:click|self={closeModal} on:keydown={() => {}}>
      <ModalContent
        character={selectedCharacter}
        on:updateui={() => (file = file)}
        on:deleteCharacter={removeCharacter}
      />
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

  .page-count {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
  }
</style>
