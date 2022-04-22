process.env.NODE_ENV ??= 'development';

import '#lib/server';
import * as colorette from 'colorette';
import { inspect } from 'node:util';
import { setup } from '@skyra/env-utilities';

process.env.NODE_ENV ??= 'development';

inspect.defaultOptions.depth = 1;

setup();

colorette.createColors({ useColor: true });
