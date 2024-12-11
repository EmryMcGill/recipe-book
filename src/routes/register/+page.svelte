<script>
    // imports
    import { validateRegister } from '$lib/validation';
    
    // get the action form data
    /** @type {import('./$types').ActionData} */
    export let form;


    const handleSubmit = (e) => {
        e.preventDefault();
        
        // validate inputs
        const { email, password, confirmPassword } = e.target;
        const res = validateRegister(email.value, password.value, confirmPassword.value);
        if (res?.error) {
            form = res;
            return;
        }

        // inputs are valid, submit the form
        e.target.submit();
    };


</script>


<div class='container login'>
    <h2>Register</h2>
    <div class='container input-container'>
        <form method="POST" on:submit={handleSubmit}>
            <p>Email</p>
            <input required type="email" name="email" id="email" placeholder="example@email.com">
    
            <p>Password</p>
            <input required type="password" name="password" id="password" placeholder="password">
    
            <p>Confirm Password</p>
            <input required type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password">

            {#if form?.error}<p class='error'>{form.error}</p>{/if}

            <button type="submit">Register</button>
        </form>
    </div>
    <p class='register-msg'>Already have an account? <a href="/login">Login here</a></p>
</div>


<style>
    .login {
        background: none;
        align-items: start;  
    }

    .login h2 {
        margin-left: 1rem;
    }

    .login .register-msg {
        margin-top: 1rem;
        margin-left: 1rem;
    }
</style>
