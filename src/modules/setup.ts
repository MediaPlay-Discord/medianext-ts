// import 'reflect-metadata';
import * as colorette from 'colorette';
import { config } from 'dotenv-flow';

config({
	silent: true,
	default_node_env: 'production'
});

colorette.createColors({ useColor: true });
