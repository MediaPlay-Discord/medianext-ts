import Redis from 'ioredis';
import { envParseString, envParseNumber, envParseInteger } from '@skyra/env-utilities';

export const enum RedisKey {
	Channel = 'logChannel',
	Stats = 'logStats'
}

export class RedisCacheClient extends Redis {
	public constructor() {
		super({
			db: envParseNumber('REDIS_DB'),
			host: envParseString('REDIS_HOST'),
			port: envParseInteger('REDIS_PORT')
		});
	}
}
