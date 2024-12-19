
// called on page load
export async function load({ locals,  fetch, params }) {
	if (!locals.pb.authStore.isValid) {
			// user is not logged in, redirect to landing page
			throw redirect(303, '/');
	}

	const categories = await fetch('/api/categories');

	// return user object to hook who will return it to the client
	return {
		user: locals.pb.authStore.model,
		categories: await categories.json()
	};
}