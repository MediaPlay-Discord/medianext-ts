import type { IntegerString, NumberString, ArrayString } from '@skyra/env-utilities';

export interface NextEnv extends DefaultEnv {
	// Discord API
	APP_ID: string;
	APP_SECRET: string;
	PUBLIC_KEY: string;
	DISCORD_TOKEN: string;

	// Bot Specific
	VERSION: NumberString;
	PREFIX: string;
	REGEX_PREFIX: string;
	GUILD_ID: ArrayString;

	// Database
	MONGODB: string;
	REDIS_PORT: IntegerString;
	REDIS_HOST: string;
	REDIS_DB: NumberString;
}

export interface DefaultEnv {
	// WebServer
	ADDRESS: string;
	PORT: IntegerString;
}
