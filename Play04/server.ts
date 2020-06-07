import { serve } from 'https://deno.land/std/http/server.ts';

const server = serve({port: 4046});

console.log('Server is running on port number 4046');

for await (const req of server) {
    console.log('New Request received');
    req.respond({body: 'Hello Client'});
}