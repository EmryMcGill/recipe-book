import Pocketbase from 'pocketbase';

// initialize Pocketbase so we can use it across the app
export const connectToPb = () => {
    return new Pocketbase('http://127.0.0.1:8090');
}


// function to check if a user is logged in (a valid cookie exists)
export const authenticateUser = async (event) => {
    // try to load the user from the cookie
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    try {
        if (event.locals.pb.authStore.isValid) {
            // the user is valid, refresh the authstore to get a new token (so the users token never expires)
            await event.locals.pb.collection('users').authRefresh();
        }
    }
    catch (err) {
        // user is not valid, clear the authstore
        event.locals.pb.authStore.clear();
    }
}