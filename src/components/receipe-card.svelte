<script>
    import { on } from "svelte/events";
    import { tick } from "svelte";
    import x from '../../static/x.svg'

    let { title, id } = $props();
    let card = $state();

    const handleCardClick = () => {
        
    }
</script>

<button bind:this={card} onclick={handleCardClick} class='category-card'>
    <h3>{title}</h3>
</button>


<style>
    .category-card {
        display: flex;
        position: relative;
        background-color: var(--primary-tint);
        width: 10rem;
        height: 10rem;
        border-radius: 5px;
        padding: 0;
        align-items: end;
        gap: 0.5rem;
        transition: all 0.1s ease-in-out;
        border: 2px solid var(--primary-tint);
    }

    .category-card:hover {
        background-color: var(--primary-tint-dark);
    }

    h3 {
        color: var(--secondary);
        margin: 0;
        font-weight: bold;
        text-align: start;
        padding: 0 0 1rem 1rem;
    }
</style>