<script>
    import Laydown from './home/Laydown.svelte'
    import Situp from './home/Situp.svelte'
</script>

<div class='wrapper'>
    <Situp/>
    <Laydown/>
</div>

<style>
    .wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
    }
</style>