<script>
  import { createEventDispatcher } from 'svelte';
  import Probe from './modal-parts/probes.svelte';
  import Limb from './modal-parts/limbs.svelte';

  export let character;

  const dispatch = createEventDispatcher();

  const styleCharPiece = (dataPiece,uiPiece) => {
    return dataPiece === uiPiece? "pink": "";
  }

  const togglePiece = (pieceIndex, uiPiece) => {
    if(character[pieceIndex] !== uiPiece) {
      character[pieceIndex] = uiPiece;
    } else {
      character[pieceIndex] = 0;
    }
    dispatch('updateui');
  }
</script>

<main class="modal-content">
  <div>
    <button>Delete</button>
  </div>
  <div class="grid-container">
    <!-- upper edge alt probe -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(2,4)} on:keydown={() => {}}>
        <!-- alt probe left -->
        <Probe type="altleft" arm="top" dataValue={character[2]} myValue={4}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(2,6)} on:keydown={() => {}}>
        <!-- alt probe mid -->
        <Probe type="altmid" arm="top" dataValue={character[2]} myValue={6}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(2,5)} on:keydown={() => {}}>
        <!-- alt probe right -->
        <Probe type="altright" arm="top" dataValue={character[2]} myValue={5}/>
      </div>
      <div class="cell"></div>
    </div>

    <!-- upper edge probe -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(2,1)} on:keydown={() => {}}>
        <Probe type="left" arm="top" dataValue={character[2]} myValue={1}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(2,2)} on:keydown={() => {}}>
        <Probe type="mid" arm="top" dataValue={character[2]} myValue={2}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(2,3)} on:keydown={() => {}}>
        <Probe type="right" arm="top" dataValue={character[2]} myValue={3}/>
      </div>
      <div class="cell"></div>
    </div>

    <!-- upper limb -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(1,1)} on:keydown={() => {}}>
      <Limb arm="top" dataValue={character[1]} myValue={1}/>
      </div>
      <div class="cell"></div>
    </div>

    <!-- upper mid alt probe -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(3,4)} on:keydown={() => {}}>
        <Probe type="altleft" arm="top" dataValue={character[3]} myValue={4}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(3,6)} on:keydown={() => {}}>
        <Probe type="altmid" arm="top" dataValue={character[3]} myValue={6}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(3,5)} on:keydown={() => {}}>
        <Probe type="altright" arm="top" dataValue={character[3]} myValue={5}/>
      </div>
      <div class="cell"></div>
    </div>

    <!-- upper mid probe -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(3,1)} on:keydown={() => {}}>
        <Probe type="mid" arm="top" dataValue={character[3]} myValue={1}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(3,2)} on:keydown={() => {}}>
        <Probe type="mid" arm="top" dataValue={character[3]} myValue={2}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(3,3)} on:keydown={() => {}}>
        <Probe type="mid" arm="top" dataValue={character[3]} myValue={3}/>
      </div>
      <div class="cell"></div>
    </div>

    <!-- above circle row -->
    <div class="row">
      <!-- left -->
      <div class={`cell`} on:click={() => togglePiece(5,5)} on:keydown={() => {}}>
        <Probe type="altright" arm="leftarm" dataValue={character[5]} myValue={5}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(5,3)} on:keydown={() => {}}>
        <Probe type="right" arm="leftarm" dataValue={character[5]} myValue={3}/>
      </div>
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(6,5)} on:keydown={() => {}}>
        <Probe type="altright" arm="leftarm" dataValue={character[6]} myValue={5}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(6,3)} on:keydown={() => {}}>
        <Probe type="right" arm="leftarm" dataValue={character[6]} myValue={3}/>
      </div>

      <!-- divider -->
      <div class="cell"></div>

      <!-- right -->
      <div class={`cell`} on:click={() => togglePiece(12,1)} on:keydown={() => {}}>
        <Probe type="left" arm="rightarm" dataValue={character[12]} myValue={1}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(12,4)} on:keydown={() => {}}>
        <Probe type="altleft" arm="rightarm" dataValue={character[12]} myValue={4}/>
      </div>
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(11,1)} on:keydown={() => {}}>
        <Probe type="left" arm="rightarm" dataValue={character[11]} myValue={1}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(11,4)} on:keydown={() => {}}>
        <Probe type="altleft" arm="rightarm" dataValue={character[11]} myValue={4}/>
      </div>
    </div>

    <div class="row">
      <!-- left limb mid & probes -->
      <div class={`cell`} on:click={() => togglePiece(5,6)} on:keydown={() => {}}>
        <Probe type="altmid" arm="leftarm" dataValue={character[5]} myValue={6}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(5,2)} on:keydown={() => {}}>
        <Probe type="mid" arm="leftarm" dataValue={character[5]} myValue={2}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(4,1)} on:keydown={() => {}}>
        <Limb arm="leftarm" dataValue={character[4]} myValue={1}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(6,6)} on:keydown={() => {}}>
        <Probe type="altmid" arm="leftarm" dataValue={character[6]} myValue={6}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(6,2)} on:keydown={() => {}}>
        <Probe type="mid" arm="leftarm" dataValue={character[6]} myValue={2}/>
      </div>

      <!-- circle -->
      <div class={`circle ${character[0] === 1? 'pink': ''}`} on:click|self={() => togglePiece(0,1)} on:keydown={() => {}}>
        <div class="inner-circle">
          <div class={`dot ${character[13] === 1? 'pink': ''}`} on:click={() => togglePiece(13,1)}></div>
        </div>
      </div>

      <!-- right limb mid & probes -->
      <div class={`cell`} on:click={() => togglePiece(12,2)} on:keydown={() => {}}>
        <Probe type="mid" arm="rightarm" dataValue={character[12]} myValue={2}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(12,6)} on:keydown={() => {}}>
        <Probe type="altmid" arm="rightarm" dataValue={character[12]} myValue={6}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(10,1)} on:keydown={() => {}}>
        <Limb arm="rightarm" dataValue={character[10]} myValue={1}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(11,2)} on:keydown={() => {}}>
        <Probe type="mid" arm="rightarm" dataValue={character[11]} myValue={2}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(11,6)} on:keydown={() => {}}>
        <Probe type="altmid" arm="rightarm" dataValue={character[11]} myValue={6}/>
      </div>
    </div>

    <!-- below circle row -->
    <div class="row">
      <!-- left -->
      <div class={`cell`} on:click={() => togglePiece(5,4)} on:keydown={() => {}}>
        <Probe type="altleft" arm="leftarm" dataValue={character[5]} myValue={4}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(5,1)} on:keydown={() => {}}>
        <Probe type="left" arm="leftarm" dataValue={character[5]} myValue={1}/>
      </div>
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(6,4)} on:keydown={() => {}}>
        <Probe type="altleft" arm="leftarm" dataValue={character[6]} myValue={4}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(6,1)} on:keydown={() => {}}>
        <Probe type="left" arm="leftarm" dataValue={character[6]} myValue={1}/>
      </div>

      <!-- divider -->
      <div class="cell"></div>

      <!-- right -->
      <div class={`cell`} on:click={() => togglePiece(12,3)} on:keydown={() => {}}>
        <Probe type="right" arm="rightarm" dataValue={character[12]} myValue={3}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(12,5)} on:keydown={() => {}}>
        <Probe type="altright" arm="rightarm" dataValue={character[12]} myValue={5}/>
      </div>
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(11,3)} on:keydown={() => {}}>
        <Probe type="right" arm="rightarm" dataValue={character[11]} myValue={3}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(11,5)} on:keydown={() => {}}>
        <Probe type="altright" arm="rightarm" dataValue={character[11]} myValue={5}/>
      </div>
    </div>

    <!-- bottom mid probe -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(9,3)} on:keydown={() => {}}>
        <Probe type="right" arm="bottomarm" dataValue={character[9]} myValue={3}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(9,2)} on:keydown={() => {}}>
        <Probe type="mid" arm="bottomarm" dataValue={character[9]} myValue={2}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(9,1)} on:keydown={() => {}}>
        <Probe type="left" arm="bottomarm" dataValue={character[9]} myValue={1}/>
      </div>
      <div class="cell"></div>
    </div>

    <!-- bottom mid alt probe -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(9,5)} on:keydown={() => {}}>
        <Probe type="altright" arm="bottomarm" dataValue={character[9]} myValue={5}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(9,6)} on:keydown={() => {}}>
        <Probe type="altmid" arm="bottomarm" dataValue={character[9]} myValue={6}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(9,4)} on:keydown={() => {}}>
        <Probe type="altleft" arm="bottomarm" dataValue={character[9]} myValue={4}/>
      </div>
      <div class="cell"></div>
    </div>

    <!-- bottom limb -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(7,1)} on:keydown={() => {}}>
        <Limb arm="bottomarm" dataValue={character[7]} myValue={1}/>
      </div>
      <div class="cell"></div>
    </div>

    <!-- bottom edge probe -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(8,3)} on:keydown={() => {}}>
        <Probe type="right" arm="bottomarm" dataValue={character[8]} myValue={3}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(8,2)} on:keydown={() => {}}>
        <Probe type="mid" arm="bottomarm" dataValue={character[8]} myValue={2}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(8,1)} on:keydown={() => {}}>
        <Probe type="left" arm="bottomarm" dataValue={character[8]} myValue={1}/>
      </div>
      <div class="cell"></div>
    </div>

    <!-- bottom edge alt probe -->
    <div class="row">
      <div class="cell"></div>
      <div class={`cell`} on:click={() => togglePiece(8,5)} on:keydown={() => {}}>
        <Probe type="altright" arm="bottomarm" dataValue={character[8]} myValue={5}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(8,6)} on:keydown={() => {}}>
        <Probe type="altmid" arm="bottomarm" dataValue={character[8]} myValue={6}/>
      </div>
      <div class={`cell`} on:click={() => togglePiece(8,4)} on:keydown={() => {}}>
        <Probe type="altleft" arm="bottomarm" dataValue={character[8]} myValue={4}/>
      </div>
      <div class="cell"></div>
    </div>
  </div>
</main>

<style>
  :root {
    --bgColor: #aaa;
  }

  .modal-content {
    background: var(--bgColor);
    padding: 10px 20px;
    /* height: 70%; */
    background: #aaa;
  }

  .grid-container {
    display: grid;
    grid-template-rows: repeat(11, 1fr);
    gap: 1px;
    /* background: yellow; */
    height: 100%;
  }

  .circle {
    background: black;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-circle {
    background: var(--bgColor);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot {
    background: black;
    border-radius: 50%;
    width: 7px;
    height: 7px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cell {
    position: relative;
    /* background: red; */
  }

  .pink {
    background: red;
  }

  .top-edge-alt-left-1{
    /* position: absolute; */
    margin-top: 15px;
    background: black;
    width: 80px;
    height: 10px;
  }

  .top-edge-alt-left-2{
    position: absolute;
    top: 0;
    background: black;
    width: 10px;
    height: 39px;
  }
</style>
