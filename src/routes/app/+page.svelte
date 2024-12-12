<script>
	import { user } from '../../shared.svelte';
	let { data } = $props();

	// set the global user state
	user.user = data.user;
</script>

<h2>app</h2>
<p>{data.user}</p>