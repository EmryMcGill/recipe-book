<script>
    import '../app.css';
	let { children } = $props();
    import Navbar from "../components/navbar-pub.svelte";
</script>


<Navbar/>
{@render children()}
