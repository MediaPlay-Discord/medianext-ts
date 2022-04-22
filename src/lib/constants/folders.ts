// CJS
// import { join } from 'node:path';

// export const root = join(__dirname, '..', '..', '..');
// export const source = join(root, 'src');

// ESM
import { URL } from 'node:url';

export const root = new URL('../../../', import.meta.url);
export const source = new URL('src/', root);
