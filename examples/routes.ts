import {
    Router
} from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/hello', context => {
    context.response.body = 'Hello User from OAK Router';
    context.response.status = 200;
});

router.get('/hello/:id', context => {
    const {id} = context.params;
    context.response.body = {id, msg: 'Success'};
    context.response.status = 200;
});

router.get('/obj', context => {
    context.response.body = {id: 1, name: 'MyR&D'};
    context.response.status = 200;

});

router.post('/obj', async context => {
    const {value} = await context.request.body();

    context.response.status = 200;
    context.response.body = value;
});

router.use((context: any) => {
    context.response.body = {code: 404, error: 'Page Not Found'};
    context.response.status = 404;

});
//console.log(router.routes());

export default router;