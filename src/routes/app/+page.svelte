<script>
    import CategoryCard from '../../components/category-card.svelte';
    import NewCategoryCardBtn from '../../components/new-category-card-btn.svelte';
	import pen from '../../../static/pen.svg'
	import penDark from '../../../static/pen-dark.svg'
	import x from '../../../static/x.svg'

	let { data } = $props();
    let categories = $state(data.categories);
	let isEditHover = $state(false);
	let isEdit = $state(false);
  
    // function to fetch all categories
    const getCategories = async () => {
      try {
          let res = await fetch('/api/categories');
          categories = await res.json();
      }
      catch (err) {
          console.log(err);
      }
    }
  
    // function to create a new category
    const createCategory = async (title) => {
  
      // atempt to create category
      try {
          await fetch('/api/categories', {
              method: 'POST',
              body: JSON.stringify({ title }),
          });
  
          // refresh categories
          await getCategories();
      }
      catch (err) {
          console.log(err);
      }
    }
  
    // function to update title of category
  const updateCategory = async (title, categoryId) => {
      try {
          await fetch('/api/categories', {
              method: 'PUT',
              body: JSON.stringify({ title, categoryId }),
          });
  
          // refresh categories
          await getCategories();
      }
      catch (err) {
          console.log(err);
      }
  }
  
    // function to delete a category
  const deleteCategory = async (categoryId) => {
      try {
          await fetch('/api/categories', {
              method: 'DELETE',
              body: JSON.stringify({ categoryId }),
          });
  
          // refresh categories
          await getCategories();
      }
      catch (err) {
          console.log(err);
      }
  }
</script>
  
<div class='left-container'>
    <h1>Categories</h1>
    <div class='category-container'>
        {#each categories as category}
			<div class='edit-container'>
				<CategoryCard 
				title={category.title} 
				id={category.id} 
				updateCategory={updateCategory} 
				deleteCategory={deleteCategory} />
				
				{#if isEdit}
				<button class='icon-btn'>
					<img src={x} alt="delete">
				</button>
				{/if}
			</div>
        {/each}

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
</div>
      
  
  <style>
      .left-container {
          display: flex;
          flex-direction: column;
          width: 50%;
          max-width: 80%;
          min-width: 20%;
          overflow-y: auto;
          scrollbar-width: none;
          padding: 1rem;
          height: 100%;
          resize: horizontal;
      }
  
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
