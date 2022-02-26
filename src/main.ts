import './modules/setup';
import { startServer } from './modules/webServer';
import { NextClient } from './structures/NextClient';

export const client = new NextClient();

const init = () => {
	startServer();

	client.logger.info('Logging in...');
	client.login(`${process.env.D_TOKEN}`).catch((err) => client.logger.error(err));
	client.logger.info('Logged to the client.');
};

init();
