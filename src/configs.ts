import { BucketScope, LogLevel } from '@sapphire/framework';
import { envParseNumber, envParseString } from '@skyra/env-utilities';
import { ClientOptions, Options } from 'discord.js';

export const clientOptions: ClientOptions = {
	intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS', 'GUILD_EMOJIS_AND_STICKERS'],
	partials: ['CHANNEL'],
	presence: {
		status: 'idle',
		activities: [
			{
				name: `On Version: v${envParseNumber('VERSION', 1)}`,
				type: 'WATCHING'
			}
		]
	},
	shards: 'auto',
	logger: {
		level: LogLevel.Debug
	},
	defaultPrefix: envParseString('PREFIX'),
	defaultCooldown: {
		scope: BucketScope.Channel
	},
	sweepers: {
		messages: {
			interval: 1,
			lifetime: 3600
		}
	},
	makeCache: Options.cacheWithLimits({
		MessageManager: -1
	}),
	loadMessageCommandListeners: true
};
