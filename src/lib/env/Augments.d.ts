import type { NextEnv } from '#env/types';
import type { RedisCacheClient } from '#lib/structures/RedisCacheClient';

declare module '@skyra/env-utilities' {
	interface Env extends NextEnv {}
}

declare module '@sapphire/time-utilities' {
	const enum Time {
		Week = 1000 * 60 * 60 * 24 * 7
	}
}

declare module '@sapphire/pieces' {
	interface Container {
		redisDb: RedisCacheClient;
	}
}
