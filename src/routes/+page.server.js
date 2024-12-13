import { redirect } from '@sveltejs/kit';

export const load = async ({ locals}) => {
    // validate user
    if (locals.user) {
        throw redirect(303, '/app');
    }
    return {user: null};
}