<script>
    import { shared } from '../shared.svelte'
    // get load data
    let { data } = $props();

    shared.user = data.user;
</script>

<h1>landing</h1>