import { json } from "@sveltejs/kit";

export const GET = async ({ locals, params }) => {
    // fetch the users categories from the database
    const recipes = await locals.pb.collection('recipes').getFullList({
        filter: `category="${params.slug}"`
    });
    return json(recipes);
}