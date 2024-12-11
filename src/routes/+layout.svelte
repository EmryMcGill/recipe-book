<script>
    import '../app.css';
	let { children } = $props();
    import Navbar from "../components/navbar-pub.svelte";
</script>


<Navbar/>
<div class="content">
    {@render children()}
</div>

<style>
    .content {
        display: flex;
        flex: 1;
    }
</style>
