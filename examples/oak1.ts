import { 
    Application,
    Router 
} from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();

router.get('/hello', context => {
    context.response.body = 'Hello User from OAK Router';
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

app.use(router.routes());

app.use((context) => {
    context.response.body = 'Hello Deno from OAK';
    context.response.status = 200;

});

console.log('Server is listening at 4500 port');

await app.listen({
    port: 4500
});
