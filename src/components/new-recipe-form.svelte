
<script>
    import MultiInput from './multi-input.svelte';
    
    let { createRecipe } = $props();
    let title = $state('');
    let desc = $state('');
    let ingredients = $state([{placeholder: '3/4 cup salt', id: Math.random()}]);
    let instructions = $state([{placeholder: 'step 1', id: Math.random()}]);


    // function to add another ingredient input
    const handleAddInpBtn = (which) => {
        if (which === 'ing') {
            ingredients.push({placeholder: `3/4 cup salt`, id: Math.random()});
        }
        else {
            instructions.push({placeholder: `step ${instructions.length+1}`, id: Math.random()});
        }
    }

    // function to delete an ingredient
    const deleteInp = (id, which) => {
        if (which === 'ing') {
            ingredients = ingredients.filter((ing) => ing.id !== id);
        }
        else {
            instructions = instructions.filter((ins) => ins.id !== id);
        }
    }

    // handle form submittion
    const handleSubmit = async (e) => {

        let data = {
            title: title.value,
            desc: desc.value,
            ingredients: [],
            instructions: []
        };

        // get the ingredients list
        document.getElementsByName('ing').forEach((el) => {
            data.ingredients.push(el.value);
        });

        // get the instructions list
        document.getElementsByName('ins').forEach((el) => {
            data.instructions.push(el.value);
        });

        console.log(data)
        await createRecipe(data);
        //e.target.reset();
    }
</script>

<form onsubmit={handleSubmit}>
    <p>Title</p>
    <input required bind:this={title} type="text" placeholder="title">

    <p>Description</p>
    <textarea bind:this={desc} name="desc" id="desc" placeholder="optional description..."></textarea>

    <p>Ingredients</p>
    {#each ingredients as ing}
    <MultiInput name='ing' id={ing.id} placeholder={ing.placeholder} deleteInp={deleteInp} />
    {/each}
    <button type="button" onclick={() => handleAddInpBtn('ing')} class='add-ing-btn'>+ Add ingredient</button>

    <p>Instructions</p>
    {#each instructions as ins}
    <MultiInput name='ins' id={ins.id} placeholder={ins.placeholder} deleteInp={deleteInp} />
    {/each}
    <button type="button" onclick={() => handleAddInpBtn('ins')} class='add-ing-btn'>+ Add instruction</button>

    <button class='sub-btn'>Create Recipe</button>
</form>

<style>
    input {
        width: 50%;
    }

    input, textarea {
        margin-bottom: 2rem;
    }

    input:focus, textarea:focus {
        outline: 2px solid var(--primary-tint);
    }

    .add-ing-btn {
        width: fit-content;
        margin: 0;
        margin-bottom: 2rem;
        padding: 0.5rem;
    }

    .add-ing-btn:hover {
        background-color: var(--primary-tint);
        color: var(--secondary);
    }

    .sub-btn {
        margin: 0;
        background-color: var(--primary-tint);
    }

    .sub-btn:hover {
        background-color: var(--accent);
    }
</style>