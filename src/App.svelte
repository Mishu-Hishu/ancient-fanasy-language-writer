<script>
  import Line from "./components/line.svelte";
  // import ModalContent from "./components/modal-content.svelte";
  import ModalContent from "./components/modal2-content.svelte";
  import DataModal from "./components/read-data-modal.svelte";
  import PasswordModal from "./components/passwordModal.svelte";
  import { EmptyLine, demoFile, newCharacter, EmptyDocument } from "./constants/structures";
  import { extraUI } from "./stores/stores";
  import { encDecRypto } from "./lib/encription";

  let currentDoc = 0;
  let modalOpen = false;
  let dataModalOpen = false;
  let passwordModal = false;
  let selectedCharacter = null;
  let currentLine;
  let currentChar;
  let password;
  let enableFileEncryption = false;

  let file = demoFile;

  const openCharModal = (detail) => {
    modalOpen = true;
    selectedCharacter =
      file.documents[currentDoc].lines[detail.line].characters[detail.char];
    currentLine = detail.line;
    currentChar = detail.char;
  };

  const openDataModal = () => {
    dataModalOpen = true;
  };

  const openPasswordModal = () => {
    passwordModal = true;
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
    //close modals
    modalOpen = false;
    dataModalOpen = false;
    passwordModal = false;

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

  const copyData = async () => {
    if(enableFileEncryption) {
      const fileContent = JSON.stringify(file);
      const encryptedData = await encDecRypto(password,fileContent,'encrypt');
      navigator.clipboard.writeText(encryptedData);
      console.log('data copied!');

    } else {
      const fileContent = JSON.stringify(file);
      navigator.clipboard.writeText(fileContent);
      console.log('data copied!');
    }
  }

  const setFileData = async (incomingData, addmode) => {
    if(enableFileEncryption) {
      const decryptedData = await encDecRypto(password,incomingData,'decrypt');
      const data = JSON.parse(decryptedData);
      if(addmode) {
        file.documents = [...file.documents, ...data.documents];
      } else {
        file = data;
      }
    } else {
      const data = JSON.parse(incomingData);
      if(addmode) {
        file.documents = [...file.documents, ...data.documents];
      } else {
        file = data;
      }
    }
    closeModal();
    $extraUI = false;
  }

  const setPassword = (pw) => {
    if(!pw) console.warn('No password entered!');
    password = pw;
    closeModal();
  }
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
      <button  class="doc-btn-l" on:click={() => addDoc()}>New Document</button>
      <button class="doc-btn-r" on:click={removeDoc}>Delete Document</button>
    </div>
    <div class="data-btns">
      <button class="btn" on:click={copyData}>Copy data</button>
      <button class="btn" on:click={openDataModal}>Read data</button>
      <button class="btn" on:click={openPasswordModal}>Set file password</button>
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

  {#if dataModalOpen}
    <div class="modal" on:click|self={closeModal} on:keydown={() => {}}>
      <DataModal
        on:loadData={(e) => setFileData(e.detail.data, e.detail.addmode)}
      />
    </div>
  {/if}

  {#if passwordModal}
    <div class="modal" on:click|self={closeModal} on:keydown={() => {}}>
      <PasswordModal
        checked={enableFileEncryption}
        on:setPassword={(e) => setPassword(e.detail.data)}
        on:encryptionChange={(e) => enableFileEncryption = e.detail.checked}
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

  .doc-btn-l {
    margin-right: 0 4px;
  }

  .doc-btn-r {
    margin-left: 0 4px;
  }

  .data-btns {
    margin-top: 10px;
  }
</style>
