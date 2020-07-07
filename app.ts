import { Application } from "https://deno.land/x/oak/mod.ts";

import router from './routes.ts';

const app = new Application();

app.use(async (ctx, next) => {
    ctx.response.headers.set('Access-Control-Allow-Origin', '*');
    ctx.response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    ctx.response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    await next();
});

app.use(router.routes());

await app.listen({ port: 8080 });