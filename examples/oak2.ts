import { 
    Application
} from 'https://deno.land/x/oak/mod.ts';

import router from './routes.ts';

const app = new Application();

app.use(router.routes());

console.log('Server is listening at 4500 port');

await app.listen({
    port: 4500
});
