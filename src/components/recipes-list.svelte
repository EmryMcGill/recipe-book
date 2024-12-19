<script>
    import { onMount } from 'svelte';
    import ReceipeCard from './receipe-card.svelte';
    import NewRecipeCardBtn from './new-recipe-card-btn.svelte';
	import pen from '../../static/pen.svg'
	import penDark from '../../static/pen-dark.svg'
	import x from '../../static/x.svg'
    import { shared } from '../shared.svelte';

    let recipes = $state();

    const getRecipes = async () => {
        console.log('rep')
        try {
            const res = await fetch(`/api/recipes/${shared.activeCategory}`);
            recipes = await res.json();
        }
        catch (err) {
            console.log('err', err);
        }
    }
  
    const createRecipe = () => {

    }

    onMount(() => {
        getRecipes();
    });
</script>
  
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
      
  
  <style>
      .category-container {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          flex: 1;
          flex-wrap: wrap;
          align-content: flex-start;
      }
  </style>
