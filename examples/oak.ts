import { 
    Application 
} from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use((context) => {
    context.response.body = 'Hello Deno from OAK';
});

console.log('Server is listening at 4500 port');

await app.listen({
    port: 4500
});
