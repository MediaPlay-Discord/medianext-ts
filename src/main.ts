import '#libs/setup';
import { NextClient } from '#lib/extensions/NextClient';

const client = new NextClient();

const start = async () => {
	client.logger.info('Logging in...');
	await client.login();
	client.logger.info('Logged into discord gateway.');
};

void start();
