
<div class="navbar">
    <div class="nav-left nav-container">
    </div>

    <div class="nav-center nav-container">
        <button class='title sbtn'>Recipe Book</button>
    </div>

    <div class="nav-right nav-container">
        <button>Login</button>
        <button>Register</button>
    </div>
</div>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.5rem;
        border-bottom: 1px solid var(--secondary);
    }

    .navbar .title {
        font-size: 1.5rem;
        font-weight: bold;
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

</style>