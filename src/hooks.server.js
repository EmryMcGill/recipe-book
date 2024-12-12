import PocketBase from 'pocketbase'

// run on every request (for authentication)
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // create a connection to the database
    event.locals.pb = new PocketBase('http://127.0.0.1:8090')

    // load the current user from cookie if there is one
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    // create a shortcut for the user var
    event.locals.user = event.locals.pb.authStore.model;

    // run the action and create response
    const response = await resolve(event);

    // set the cookie to the locals authstore value
    // TODO: secure for production
    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie(),
        { secure: false });

    // return the response to the client
    return response;
}