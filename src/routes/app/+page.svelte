<script>
    import { shared } from '../../shared.svelte'
    import CategoriesList from '../../components/categories-list.svelte';
    import RecipesList from '../../components/recipes-list.svelte';

    let { data } = $props();    
    shared.user = data.user;

</script>

<div class='main-container'>
    <div class='left-container'>
        {#if shared.activeCategory !== null}
        <RecipesList />
        {:else}
        <CategoriesList />
        {/if}
    </div>
    <div class='right-container'>
    </div>
</div>
  
  <style>
      .main-container {
          display: flex;
          width: 100%;
          height: calc(100vh - 4rem);
      }

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