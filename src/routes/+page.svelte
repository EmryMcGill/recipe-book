<script>
    import { user } from '../shared.svelte';

    // get load data
    let { data } = $props();

    // set the global user state
    user.user = data.user;
</script>

<h1>landing</h1>