<script>
    import '../app.css';
    import Navbar from "../components/navbar-pub.svelte";

    let { children } = $props();
</script>


<Navbar />
<div class="content">
    {@render children()}
</div>

<style>
    .content {
        display: flex;
        flex: 1;
    }
</style>
