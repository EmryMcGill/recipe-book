import { redirect } from '@sveltejs/kit';

// called on page load
export function load({ locals }) {
	// validate user
	if (!locals.user) {
		throw redirect(303, '/');
	}

	// return user object to hook who will return it to the client
	return {
		user: locals.user
	};
}