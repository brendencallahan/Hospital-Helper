<script>
    export let src;
    export let alt;
    export let cardText;
</script>

<div>
    {#if (src || alt)}
    <img {src} {alt}/>
    {/if}
    <p>{cardText}</p>
</div>