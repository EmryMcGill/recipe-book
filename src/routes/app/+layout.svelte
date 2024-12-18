<script>
    import { shared } from '../../shared.svelte'
    import NewRecipeForm from '../../components/new-recipe-form.svelte';
    let { data, children } = $props();
  
    shared.user = data.user;

    // function to create a new recipe
    const createRecipe = async (data) => {
      try {
        await fetch('/api/recipes', {
          method: 'POST',
          body: JSON.stringify({ ...data, categoryId: shared.activeCategory })
        });

        // refresh recipes
        shared.isCreateRecipe = false;
      } 
      catch (err) {
        console.log(err);
      }
    }
  </script>
  
  {#if shared.isCreateRecipe}
  <div class='block'>
  </div>
  {/if}

  <div class='main-container'>
        
        {@render children()}
        
        <div class={shared.isCreateRecipe ? 'active right-container' : 'right-container'}>
          {#if shared.isCreateRecipe}
          <NewRecipeForm createRecipe={createRecipe} />
          {/if}
        </div>
  </div>
  
  <style>
      .main-container {
          display: flex;
          width: 100%;
          height: calc(100vh - 4rem);
      }
  
      .right-container {
          flex: 1;
          z-index: 1;
          background-color: var(--primary);
          border-left: 2px solid var(--primary-tint-dark);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          scrollbar-width: none;
          padding: 1rem;
          height: 100%;
      }

      .active {
        z-index: 3;
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