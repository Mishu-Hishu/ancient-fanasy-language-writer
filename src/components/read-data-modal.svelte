<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let data = "";

    const loadDataReplace = () => {
        dispatch('loadData', {data});
    }

    const loadDataAdd = () => {
        dispatch('loadData', {data, addmode: true});
    }
</script>

<div class="content">
    <h2>Paste data</h2>
    <textarea bind:value={data} name="" id="" cols="30" rows="10"></textarea>
    <div class="actions">
        <div>
            <h3>Load Data</h3>
        </div>
        <div class="buttons">
            <button on:click={loadDataReplace}>Rplace</button>
            <button on:click={loadDataAdd}>Add</button>
        </div>
    </div>
</div>

<style>
    .content {
        background-color: #aaa;
        padding: 20px;
        color: black;
    }

    textarea {
        background: white;
        resize: none;
        color: black;
    }

    h3 {
        position: relative;
        translate: 0 -14px;
        background: #aaaaaa;
        display: inline-block;
        margin: 0 auto;
        padding: 0 5px;
    }

    .actions {
        margin-top: 20px;
        border: 1px solid black;
        padding: 0 10px 10px;
        border-radius: 8px;
    }

    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 35px;
    }
</style>