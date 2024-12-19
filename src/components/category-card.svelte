<script>
    import { on } from "svelte/events";
    import { tick } from "svelte";
    import x from '../../static/x.svg'

    let { title, id, updateCategory, deleteCategory, openCategory } = $props();
    let isChange = $state(false);
    let input = $state();
    let card = $state();

    const handleCardClick = () => {
        openCategory(id);
    }    

    const handleTextClick = async (e) => {
        e.stopPropagation();
        isChange = true;

        await tick();
        input.select();
        card.style.zIndex = 3;
     }

    const handleSubmit = async (e) => {
        // validate title
        if (input.value.length === 0) {
            isChange = false;
            card.style.zIndex = 1;
            return;
        }
        await updateCategory(input.value, id);
        isChange = false;
        card.style.zIndex = 1;
    }
</script>

{#if isChange}
<div class='block' onclick={handleSubmit}></div>
{/if}

<button bind:this={card} onclick={handleCardClick} class={isChange ? ' active category-card' : 'category-card'}>

    {#if isChange}
        <form onsubmit={handleSubmit}>
            <input bind:this={input} value={title} type="text" onclick={(e) => e.stopPropagation()}>
        </form>
    {:else}
        <h3 onclick={(e) => handleTextClick(e)}>{title}</h3>
    {/if}
</button>


<style>
    .category-card {
        display: flex;
        position: relative;
        background-color: var(--primary-tint);
        width: 100%;
        border-radius: 5px;
        padding: 0;
        align-items: center;
        padding: 1rem;
        gap: 0.5rem;
        transition: all 0.1s ease-in-out;
        border: 2px solid var(--primary-tint);
    }

    .category-card:hover {
        background-color: var(--primary-tint-dark);
    }

    .active {
        background: none;
    }

    .active:hover {
        background: none;
        cursor: default;
    }

    h3 {
        color: var(--secondary);
        margin: 0;
        font-weight: bold;
        text-align: start;
    }

    h3:hover {
        cursor:text;
    }

    input {
        margin: 0;
        padding: 0;
        background: none;
        border-radius: 0;
        color: var(--secondary);
        font-weight: bold;
        font-size: 1.2rem;
    }

    input:focus {
        outline: none;
    }

    .block {
        position: absolute; 
        z-index: 2;
        opacity: 0.5; 
        filter: alpha(opacity = 50); 
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0; 
        width: 100%; 
        height: 100%; 
        background-color: Black; 
        color: White;
    }
</style>