import { fail, redirect } from '@sveltejs/kit';
import { pb } from '$lib/db';
import { validateRegister } from '$lib/validation';

export const load = async ({ locals}) => {
	if (locals.pb.authStore.isValid) {
		// user is logged in, redirect to app
		throw redirect(303, '/app');
	}
	else {
		// user is not logged in, return user = null
		return {user: null};
	}
}

export const actions = {
	// action to register the user
	default: async ({ request, locals }) => {
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

		// attempt to login the user
		try {
			const user = await pb.collection('users').authWithPassword(email, password);
		}
		catch (err) {
			return fail(400, { error: 'Failed to log in user.' });
		}

		// redirect to the home page
		throw redirect(303, '/app');
	}
};