import { ApplyOptions } from '@sapphire/decorators';
import { Listener, type ListenerOptions } from '@sapphire/framework';
import type { Client } from 'discord.js';

@ApplyOptions<ListenerOptions>({
	event: 'ready',
	once: true
})
export class ClientListener extends Listener {
	public override run(client: Client) {
		this.container.logger.info(`User: ${client.user?.username}\nDiscriminator: ${client.user?.discriminator}\nID: ${client.user?.id}`);
	}
}
