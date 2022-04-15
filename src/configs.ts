import { BucketScope } from '@sapphire/framework';
import { envParseNumber, envParseString } from '@skyra/env-utilities';
import { ClientOptions, Options } from 'discord.js';
import { NextLogger } from './lib/extensions/loggers/NextLogger';

export const clientOptions: ClientOptions = {
	intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS', 'GUILD_EMOJIS_AND_STICKERS'],
	partials: ['CHANNEL'],
	presence: {
		status: 'idle',
		activities: [
			{
				name: `On Version: v${envParseNumber('VERSION', 1)}`,
				type: 'WATCHING',
				url: 'https://youtu.be/dQw4w9WgXcQ'
			}
		]
	},
	shards: 'auto',
	logger: {
		instance: new NextLogger()
	},
	defaultPrefix: envParseString('PREFIX', 'm?'),
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
	})
};
