import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { botConfig } from '../configs/configs';
import { commands } from '../main';
import { Events } from '../structures/Events';

const rest = new REST({ version: '9' }).setToken(`${process.env.D_TOKEN}`);

export = new Events({
	name: 'ready',
	once: true,
	exec: async (client) => {
		console.info(`Logged in as User: ${client.user.username}\nTag: ${client.user.discriminator}\nID: ${client.user.id}`);

		try {
			console.info('Refreshing Application Commands...');
			await rest.put(Routes.applicationCommands(botConfig.clients.appId), {
				body: commands
			});
			console.info('Application Commands Refreshed Successfully.');
		} catch (err) {
			console.error(`Application Commands Refreshed With Errors.\n${err}`);
		}
	}
});
