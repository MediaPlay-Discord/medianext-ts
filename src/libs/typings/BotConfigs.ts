import type { IntentsString, PartialTypes } from 'discord.js';

export interface Bots {
	clients: {
		prefix?: string;
		appId: string;
		intents: IntentsString[];
		partials: PartialTypes[];
	};
	configs: {
		owners: string[];
		guilds: string;
		version: string;
	};
}
