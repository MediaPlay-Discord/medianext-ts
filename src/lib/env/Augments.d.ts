import type { NextEnv } from '#env/NextEnv';
import type { RedisCacheClient } from '#lib/structures/RedisCacheClient';

declare module '@skyra/env-utilities' {
	interface Env extends NextEnv {}
}

declare module '@sapphire/pieces' {
	interface Container {
		redisDb: RedisCacheClient;
	}
}
