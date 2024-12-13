<script>
    import { goto } from '$app/navigation';
    import { redirect } from '@sveltejs/kit';
    import { user } from '../shared.svelte'; 

    // handle logout
    const handleLogout = async () => {
        // call the logout api
        const res = await fetch('/api/logout');
        if (res.ok) {
            // redirect to the landing page
            goto('/');
        }}
</script>

<div class="navbar">
    <div class="nav-left nav-container">
    </div>

    <div class="nav-center nav-container">
        <a href="/" class='title'>Recipe Book</a>
    </div>

    {#if user.user}
        <div class="nav-right nav-container">
            <a class='nav-link' href="/app">App</a>
            <button class='nav-link' onclick={handleLogout}>Logout</button>
        </div>
    {:else}
    <div class="nav-right nav-container">
        <a class='nav-link' href="/login">Login</a>
        <a class='nav-link' href="/register">Register</a>
    </div>
    {/if}
</div>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.5rem;
        border-bottom: 2px solid var(--primary-tint);
    }

    .navbar .title {
        font-size: 1.5rem;
    }

    .navbar .nav-container {
        display: flex;
    }

    .navbar .nav-right {
        flex: 1;
        justify-content: flex-end;
        gap: 0.5rem;   
    }

    .navbar .nav-center {
        flex: 1;
        justify-content: center;
    }

    .navbar .nav-left {
        flex: 1;
        justify-content: flex-start;
    }

    .navbar a {
        text-decoration: none;
    }

    .navbar .nav-link {
        text-decoration: none;
        background-color: var(--primary-tint);
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1rem;
        color: var(--secondary);
    }

    .navbar .nav-link:hover {
        cursor: pointer;
        background-color: var(--accent);
        color: var(--primary);
        transition: 0.01s ease-in;
    }

</style>