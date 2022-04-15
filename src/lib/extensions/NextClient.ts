import { ApplicationCommandRegistries, container, RegisterBehavior, SapphireClient } from '@sapphire/framework';
import { clientOptions } from '#root/configs';
import { RedisCacheClient } from '#lib/structures/RedisCacheClient';

export class NextClient extends SapphireClient {
	public constructor() {
		super(clientOptions);

		container.redisDb = new RedisCacheClient();
		ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.Overwrite);
	}
}
