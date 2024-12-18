// called on page load
export async function load({ locals,  fetch, params }) {
	const recipes = await fetch(`/api/recipes/${params.slug}`);

	// return user object to hook who will return it to the client
	return {
		user: locals.pb.authStore.model,
		recipes: await recipes.json(),
		categoryId: params.slug
	};
}