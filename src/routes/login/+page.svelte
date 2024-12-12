<script>
    // imports
    import { validateLogin } from '$lib/validation';

    // variables
    let { data, form } = $props();
    let isLoading = $state(false);

    // functions

    const handleSubmit = (e) => {
        e.preventDefault();
        isLoading = true;

        // validate inputs
        const { email, password } = e.target;
        const res = validateLogin(email.value, password.value);
        if (res?.error) {
            form = res;
            return;
        }

        // inputs are valid, submit the form
        e.target.submit();
    }
</script>


<div class='container login'>
    <h2>Login</h2>
    <div class='container input-container'>
        <form method="POST" onsubmit={handleSubmit}>
            <p>Email</p>
            <input required type="email" name="email" id="email" placeholder="example@email.com">

            <p>Password</p>
            <input required type="password" name="password" id="password" placeholder="password">
    
            {#if form?.error}<p class='error'>{form.error}</p>{/if}

            <button type="submit">Login</button>
            {#if isLoading}<p>Loading...</p>{/if}
        </form>
    </div>
    <p class='register-msg'>Don't have an account? <a href="/register">Sign up here</a></p>
</div>


<style>
    .login {
        background: none;
        align-items: start;  
    }

    h2 {
        margin-left: 1rem;
    }

    .register-msg {
        margin-top: 1rem;
        margin-left: 1rem;
    }
</style>
