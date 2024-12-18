import { json } from "@sveltejs/kit";

export const GET = async ({ locals }) => {
    // fetch the users categories from the database
    const categories = await locals.pb.collection('categories').getFullList();
    return json(categories);
}

export const POST = async ({ locals, request }) => {
    // get the title from the request
    let {title} = await request.json();
    let user = locals.pb.authStore.model.id;

    // create a new category record
    const record = await locals.pb.collection('categories').create({title: title, user: user});

    return json(record);
}

export const PUT = async ({ locals, request }) => {
    // get the title from the request
    let {title, categoryId} = await request.json();

    // update the categories title
    const record = await locals.pb.collection('categories').update(categoryId, {title: title});

    return json(record);
}

export const DELETE = async ({ locals, request }) => {
    // get the title from the request
    let { categoryId} = await request.json();

    // update the categories title
    await locals.pb.collection('categories').delete(categoryId);

    return new Response({status: 200});
}