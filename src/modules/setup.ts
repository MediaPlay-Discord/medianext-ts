import 'reflect-metadata';
import * as colorette from 'colorette';
import * as util from 'util';
import { config } from 'dotenv-flow';

util.inspect.defaultOptions.depth = 1;

config({
	silent: true,
	default_node_env: 'production'
});

colorette.createColors({ useColor: true });
