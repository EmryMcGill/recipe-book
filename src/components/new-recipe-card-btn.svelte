<script>
    import { tick } from 'svelte';
    import plus from '../../static/plus.svg';

    let card = $state();
    let { createRecipe } = $props();

    // function called when create recipe btn pressed
    const handleClick = async () => {
        // call the create recipe function
        await createRecipe();
    }   
</script>

<button bind:this={card} class='category-card' onclick={handleClick}>
    <img src={plus} alt="plus">
</button>

<style>
    .category-card {
        display: flex;
        background: none;
        width: 10rem;
        height: 10rem;
        border-radius: 10px;
        border: 4px dashed var(--primary-tint);
        padding: 1rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: all .1s ease-in-out;
    }

    .category-card:hover {
        background-color: var(--primary-tint);
    }

    img {
        width: 1.2rem;
        margin: 0;
        transition: .2s transform ease-in-out;
    }

    .category-card:hover img {
        transform: rotate(90deg);
    }
</style>