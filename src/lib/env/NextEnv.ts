import type { IntegerString, BooleanString, NumberString, ArrayString } from '@skyra/env-utilities';

export interface NextEnv {
	// Discord API
	APP_ID: string;
	APP_SECRET: string;
	PUBLIC_KEY: string;
	DISCORD_TOKEN: string;

	// Web Server
	ADDRESS: string;
	PORT: IntegerString;

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
