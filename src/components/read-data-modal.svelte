<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let data = "";

    const loadData = () => {
        dispatch('loadData', {data});
    }
</script>

<div class="content">
    <h2>Paste data</h2>
    <textarea bind:value={data} name="" id="" cols="30" rows="10"></textarea>
    <div>
        <button on:click={loadData}>Load data</button>
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
</style>