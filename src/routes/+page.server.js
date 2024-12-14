import { redirect } from '@sveltejs/kit';

export const load = async ({ locals}) => {
    if (locals.pb.authStore.isValid) {
        // user logged in, redirect to app
        throw redirect(303, '/app');
    }
    // user not logged in, return user = null
    return {user: null};
}