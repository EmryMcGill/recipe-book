import { json } from "@sveltejs/kit";

export const POST = async ({ locals, request }) => {
    // get the title from the request
    let { title, desc, ingredients, instructions, categoryId } = await request.json();
    let user = locals.pb.authStore.model.id;

    console.log(title, desc, ingredients, instructions, categoryId)

    // create a new category record
    const record = await locals.pb.collection('recipes').create({
        title: title, 
        description: desc,
        ingredients: ingredients,
        instructions: instructions,
        user: user,
        category: categoryId
    });

    return json(record);
}