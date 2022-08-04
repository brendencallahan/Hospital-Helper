<script>
    export let src;
    export let alt;
    export let cardText;
    export let pageLink = null;
</script>

{#if !pageLink}
<button>
    <div>
    {#if (src || alt)}
    <img {src} {alt}/>
    {/if}
    <p>{cardText}</p>
    </div>
</button>
{:else}
<a href={pageLink}>
    <button>
        <div>
            {#if (src || alt)}
            <img {src} {alt}/>
            {/if}
            <p>{cardText}</p>
        </div>
    </button>
</a>

{/if}
        
        <style>
    button {
        font-size: 3rem;
        width: 33vw;
        height: 33vw;
        margin: auto;
    }
</style>