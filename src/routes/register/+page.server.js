import { fail } from '@sveltejs/kit';
import { pb } from '$lib/db';
import { validateRegister } from '$lib/validation';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	// action to register the user
	default: async ({ request }) => {
		// get the form data
        const formData = await request.formData();

		// get the form fields
        const email = formData.get('email');
        const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');

		// validate the inputs
		const res = validateRegister(email, password, confirmPassword);
		if (res?.error) {
			return fail(400, res);
		}

		// attempt to register user
		try {
			const user = await pb.collection('users').create({
				email: email, 
				password: password, 
				passwordConfirm: confirmPassword
			});
			
		}
		catch (err) {
			return fail(400, { error: 'Failed to create user.' });
		}
	}
};