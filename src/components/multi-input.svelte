<script>
        import x from '../../static/x.svg';

        let { id, placeholder, deleteInp, name } = $props();

        const handleDeleteBtn = () => {
            deleteInp(id, name);
        }
</script>

<div class='ing-container'>
    <input class='ing-input' name={name} type="text" id={id} placeholder={placeholder}>
    <button type="button" onclick={handleDeleteBtn} class='icon-btn'><img src={x} alt="delete"></button>
</div>

<style>
    .ing-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .ing-input {
        margin: 0;
        width: 100%;
    }

    .icon-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        margin: 0;
        padding: 0;
    }

    .icon-btn:hover {
        background-color: var(--primary-tint);
    }

    img {
        height: 2rem;
    }
</style>