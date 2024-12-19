<script>
    import { onMount } from 'svelte';
    import CategoryCard from './category-card.svelte';
    import NewCategoryCardBtn from './new-category-card-btn.svelte';
	import pen from '../../static/pen.svg'
	import penDark from '../../static/pen-dark.svg'
	import x from '../../static/x.svg'
    import { shared } from '../shared.svelte'

    let categories = $state();
    let isEditHover = $state(false);
	let isEdit = $state(false);

    const getCategories = async () => {
        try {
            const res = await fetch('/api/categories');
            categories = await res.json();
        }
        catch (err) {
            console.log('err', err);
        }
    }

    const createCategory = async (title) => {
        try {
            const res = await fetch('/api/categories', {
                method: 'POST',
                body: JSON.stringify({title: title})
            });

            // refresh categories
            getCategories();
        }
        catch (err) {
            console.log('err', err);
        }
    }

    const updateCategory = async (title, categoryId) => {
        try {
            const res = await fetch('/api/categories', {
                method: 'PUT',
                body: JSON.stringify({title: title, categoryId: categoryId})
            });

            // refresh categories
            getCategories();
        }
        catch (err) {
            console.log('err', err);
        }
    }

    const deleteCategory = async (categoryId) => {
        try {
            const res = await fetch('/api/categories', {
                method: 'DELETE',
                body: JSON.stringify({categoryId: categoryId})
            });

            // refresh categories
            getCategories();
        }
        catch (err) {
            console.log('err', err);
        }
    }

    const openCategory = async (categoryId) => {
        shared.activeCategory = categoryId;
    }

    onMount(() => {
        getCategories();
    })
    
</script>

<h1>Categories</h1>
<div class='category-container'>
    {#if categories === undefined}
    <p>loading...</p>
    {:else}
    {#each categories as category}
        <div class='edit-container'>
            <CategoryCard 
            title={category.title} 
            id={category.id} 
            updateCategory={updateCategory} 
            deleteCategory={deleteCategory}
            openCategory={openCategory} />
            
            {#if isEdit}
            <button class='icon-btn' onclick={() => deleteCategory(category.id)}>
                <img src={x} alt="delete">
            </button>
            {/if}
        </div>
    {/each}
    {/if}

    <div class='edit-container'>
        <NewCategoryCardBtn createCategory={createCategory} />
        <button onclick={() => isEdit = !isEdit} onmouseenter={() => isEditHover = !isEditHover} onmouseleave={() => isEditHover = !isEditHover} class='icon-btn'>
            {#if isEditHover}
            <img  src={penDark} alt="edit">
            {:else}
            <img src={pen} alt="edit">
            {/if}
        </button>
    </div>
</div>

<style>
    .category-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        flex: 1;
        flex-wrap: wrap;
        align-content: flex-start;
    }

    .edit-container {
      display: flex;
      width: 100%;
      gap: 1rem;
      align-items: center;
    }

    img {
      height: 1.2rem;
    }

    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      border: 3px solid var(--primary-tint);
  }

  .icon-btn:hover {
      border: 3px solid var(--accent);
  }
</style>
