import { cacheLife } from 'next/cache';
import { client } from './client';

/**
 * Cached Sanity data-fetching functions.
 * Each query uses Next.js caching to optimize server-side rendering.
 */
export async function cachedFetch(query: string) {
    'use cache';
    cacheLife('hours');

    return client.fetch(query);
}