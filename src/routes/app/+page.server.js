
// called on page load
export async function load({ locals,  fetch, params }) {
	const categories = await fetch('/api/categories');

	// return user object to hook who will return it to the client
	return {
		user: locals.pb.authStore.model,
		categories: await categories.json()
	};
}