import { BucketScope, LogLevel } from '@sapphire/framework';
import { type ClientOptions, Options } from 'discord.js';
import { clientConfigs } from './configs';

export const clientOptions: ClientOptions = {
	intents: clientConfigs.clients.intents,
	partials: clientConfigs.clients.partials,
	presence: {
		status: 'idle',
		activities: [
			{
				name: `On Version: ${clientConfigs.configs.version}`,
				type: 'WATCHING',
				url: 'https://youtu.be/dQw4w9WgXcQ'
			}
		]
	},
	shards: 'auto',
	logger: {
		level: LogLevel.Debug
	},
	defaultPrefix: clientConfigs.clients.prefix,
	defaultCooldown: {
		scope: BucketScope.Channel
	},
	makeCache: Options.cacheWithLimits({
		GuildMemberManager: 0
	})
};
