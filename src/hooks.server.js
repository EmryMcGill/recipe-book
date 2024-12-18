import { connectToPb, authenticateUser } from '$lib/db';

// run on every request (for authentication)
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // make a connection to pb
    event.locals.pb = connectToPb();

    // authenticate user
    authenticateUser(event);

    // run the action and create response
    const response = await resolve(event);

    // re-set the cookie to the locals authstore value
    // TODO: secure for production
    response.headers.set('set-cookie', `${event.locals.pb.authStore.exportToCookie().split('; ')[0]}; ${event.locals.pb.authStore.exportToCookie().split('; ')[2]}; Path=/; SameSite=Strict; httpOnly;`);

    // return the response to the client
    return response;
}