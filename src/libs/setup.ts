process.env.NODE_ENV ??= 'development';

import * as colorette from 'colorette';
import * as util from 'util';
import { config } from 'dotenv-cra';

util.inspect.defaultOptions.depth = 1;

config({
	encoding: 'utf8'
});

colorette.createColors({ useColor: true });
