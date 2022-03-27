import { Listener } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class MessageListener extends Listener {
	public run(msg: Message) {
		if (msg.author.bot) return;

		if (msg.channel.type === 'DM') return;

		if (msg.webhookId !== null) return;

		this.container.client.emit('userMessage');
	}
}
