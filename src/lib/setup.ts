process.env.NODE_ENV ??= 'development';

import * as colorette from 'colorette';
import { inspect } from 'node:util';
import { URL } from 'node:url';
import { setup } from '@skyra/env-utilities';

inspect.defaultOptions.depth = 1;

setup(new URL('../../.env', import.meta.url));

colorette.createColors({ useColor: true });
