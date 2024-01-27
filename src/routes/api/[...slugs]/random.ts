import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function getRandomHandler({ query: { min, max, json } }) {
    // const min = Number(query.get('min') ?? '0');
    // const max = Number(query.get('max') ?? '1');
    // const jsonParam = query.get('json') ?? 'false' === 'true';

    // const min = Number(url.searchParams.get('min') ?? '0');
    // const max = Number(url.searchParams.get('max') ?? '1');
    // const jsonParam = url.searchParams.get('json') ?? 'false' === 'true';
    min = Number(min ?? '0');
    max = Number(max ?? '1');
    const jsonParam = json ?? 'false' === 'true';

    const d = max - min;

    if (isNaN(d) || d < 0) {
        error(
            400,
            'min and max must be numbers, and min must be less than max'
        );
    }

    const random = min + Math.random() * d;

    if (jsonParam) {
        return { random };
    } else return String(random);
}
