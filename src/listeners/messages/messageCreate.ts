import { Listener, Events } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class MessageListener extends Listener {
	public run(msg: Message) {
		if (msg.author.bot) return;

		if (msg.channel.type === 'DM') return;

		if (msg.webhookId) return;

		this.container.client.emit(Events.PreMessageParsed, msg);
	}
}
