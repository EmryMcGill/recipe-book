<script>
    import ReceipeCard from '../../../../components/receipe-card.svelte';
    import NewRecipeCardBtn from '../../../../components/new-recipe-card-btn.svelte';
	import pen from '../../../../../static/pen.svg'
	import penDark from '../../../../../static/pen-dark.svg'
	import x from '../../../../../static/x.svg'
    import { shared } from '../../../../shared.svelte';

	let { data } = $props();
    let recipes = $state(data.recipes);
  
    // function to create a new recipe
    const createRecipe = async () => {
        console.log('load up create recipe form')
        shared.isCreateRecipe = true;
        shared.activeCategory = data.categoryId;
    }
</script>
  
<div class='left-container'>
    <h1>Recipes</h1>
    <div class='category-container'>
        {#each recipes as recipe}
            <ReceipeCard 
            title={recipe.title} 
            id={recipe.id} 
             />
        {/each}

		<NewRecipeCardBtn createRecipe={createRecipe} />
    </div>
</div>
      
  
  <style>
      .left-container {
        resize: horizontal;
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow-y: auto;
          scrollbar-width: none;
          padding: 1rem;
          height: 100%;
      }
  
      .category-container {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          flex: 1;
          flex-wrap: wrap;
          align-content: flex-start;
      }
  </style>
