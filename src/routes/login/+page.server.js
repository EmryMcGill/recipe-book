import { fail } from '@sveltejs/kit';
import { pb } from '$lib/db';
import { validateLogin } from '$lib/validation';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	// action to log the user in
	default: async ({ request }) => {
		// get the form data
        const formData = await request.formData();

		// get the form fields
        const email = formData.get('email');
        const password = formData.get('password');

		// validate the inputs
		const res = validateLogin(email, password);
		if (res?.error) {
			return fail(400, res);
		}

		// attempt to login the user
		try {
			const user = await pb.collection('users').authWithPassword(email, password);
			
		}
		catch (err) {
			return fail(400, { error: 'invalid login from pb' });
		}
	}
};