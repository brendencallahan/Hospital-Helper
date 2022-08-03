<script>
    import { set_style } from "svelte/internal";
    let invertedColors;
</script>

<button on:click="{() => invertedColors = !invertedColors}" class='btn'>
    <div class:invertedColors class='btn-container'>
        <img src='../graphics/main/Laydown.svg' alt='someone laying down in bed'/>
        <p>Lay down</p>
    </div>
</button>

<style>
    .btn {
        background-color: white;
        border: none;
        order: 1;
    }

    .btn-container {
        margin-bottom: -50px;
        background-color: white;
        transition: background-color 1s ease-in-out;
        animation-direction: alternate-reverse;
    }

    img {
        height: 150px;
        width: 150px;
        margin-bottom: -50px;
    }

    p {
        font-size: 3rem;
    }

    .invertedColors img, .invertedColors p {
        filter: invert(.9);
    }

    .invertedColors {
        background-color: black;
    }

</style>