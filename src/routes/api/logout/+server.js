
export const GET = async ({ locals }) => {
    // clear the auth store, so the hook clears the cookie
    locals.pb.authStore.clear();
    return new Response();
}