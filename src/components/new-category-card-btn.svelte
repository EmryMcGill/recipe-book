<script>
    import { tick } from 'svelte';
    import plus from '../../static/plus.svg';

    let isInput = $state(false);
    let input = $state();
    let card = $state();
    let { createCategory, isEdit } = $props();

    const handleClick = async () => {
        if (isInput) {
            isInput = false;
            card.style.zIndex = 1;
            handleSubmit();
        }
        else {
            isInput = !isInput;
            await tick();
            input.focus();
            card.style.zIndex = 3;
        }
    }

    const handleSubmit = async (e) => {
        // validate title
        if (input.value.length === 0) {
            isInput = false;
            card.style.zIndex = 1;
            return;
        }
        await createCategory(input.value);
        isInput = false;
        card.style.zIndex = 1;

    }
</script>

{#if isInput}
<div class='block' onclick={handleSubmit}></div>
{/if}

<button bind:this={card} class={isInput ? 'active category-card' : 'category-card'} onclick={handleClick}>
    {#if isInput}
        <form onsubmit={handleSubmit}>
            <input bind:this={input} placeholder="title" type="text" onclick={(e) => e.stopPropagation()}>
        </form>
    {:else}
        <img src={plus} alt="plus">
    {/if}
</button>

<style>
    .category-card {
        display: flex;
        background: none;
        width: 100%;
        border-radius: 10px;
        border: 4px dashed var(--primary-tint);
        padding: 1rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: all .1s ease-in-out;
    }

    .active {
        align-items: end;
    }

    .category-card:hover {
        background-color: var(--primary-tint);
    }

    .active:hover {
        background: none;
        cursor: default;
    }

    img {
        width: 1.2rem;
        margin: 0;
        transition: .2s transform ease-in-out;
    }

    .category-card:hover img {
        transform: rotate(90deg);
    }

    input {
        margin: 0;
        padding: 0;
        width: 100%;
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