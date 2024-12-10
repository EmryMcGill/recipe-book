
<div class="navbar">
    <div class="nav-left nav-container">
    </div>

    <div class="nav-center nav-container">
        <button class='title btn-sutle'>Recipe Book</button>
    </div>

    <div class="nav-right nav-container">
        <button class='btn-sutle'>Login</button>
        <button class='btn-sutle'>Register</button>
    </div>
</div>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: aliceblue;
        padding: 0.5rem;
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