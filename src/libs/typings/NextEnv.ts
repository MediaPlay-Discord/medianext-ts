export type BooleanString = 'true' | 'false';
export type IntegerString = `${bigint}`;
export type FloatString = `${number}`;

export type NextEnvAny = keyof NextEnv;
export type NextEnvString = {
	[K in NextEnvAny]: NextEnv[K] extends BooleanString | IntegerString ? never : K;
}[NextEnvAny];
export type NextEnvBoolean = {
	[K in NextEnvAny]: NextEnv[K] extends BooleanString ? K : never;
}[NextEnvAny];
export type NextEnvInteger = {
	[K in NextEnvAny]: NextEnv[K] extends IntegerString ? K : never;
}[NextEnvAny];

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

	// Database
	MONGODB: string;
}
