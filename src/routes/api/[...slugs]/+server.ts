// src/routes/api/[...slugs]/+server.ts
import { Elysia, t } from 'elysia';
import type { RequestHandler } from './$types';
import { getRandomHandler } from './random';

const app = new Elysia({ prefix: '/api' })
    .get('/', () => 'hi')
    .get('/random', getRandomHandler)
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String(),
        }),
    });

export const GET: RequestHandler = ({ request }) => app.handle(request);
export const POST: RequestHandler = ({ request }) => app.handle(request);
