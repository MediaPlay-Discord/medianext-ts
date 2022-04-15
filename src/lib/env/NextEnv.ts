import type { IntegerString, BooleanString, NumberString } from '@skyra/env-utilities';

export interface NextEnv {
	// Development
	NODE_ENV: 'test' | 'production' | 'development';
	DOTENV_DEBUG_ENABLED: BooleanString;

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
	GUILD_ID: string;

	// Database
	MONGODB: string;
	REDIS_PORT: IntegerString;
	REDIS_HOST: string;
	REDIS_DB: NumberString;
}
