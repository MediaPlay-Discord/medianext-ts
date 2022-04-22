import { URL } from 'node:url';
import { rm } from 'node:fs/promises';

export const root = new URL('../', import.meta.url);
export const build = new URL('build/', root);

await rm(build, { recursive: true });
