<script>
    import { createEventDispatcher } from 'svelte';

    export let checked = false;

    const dispatch = createEventDispatcher();
    let data = "";

    const setPassword = () => {
        dispatch('setPassword', {data});
    }

    const changeFileEncryptionSetting = () => {
        dispatch('encryptionChange', {checked});
    }
</script>

<div class="content">
    <h2>Set password</h2>
    <input type="password" bind:value={data}>
    <div class="margin-top">
        <div>
        <label for="checkbox">Enable Encryption:</label>
        <input id="checkbox" type="checkbox" bind:checked={checked} on:change={changeFileEncryptionSetting}>
        </div>
        <button on:click={setPassword}>Set</button>
    </div>
</div>

<style>
    .content {
        background-color: #ccc;
        padding: 20px;
        color: black;
    }

    .margin-top {
        margin-top: 10px;
    }

    button {
        margin-top: 10px;
    }
</style>