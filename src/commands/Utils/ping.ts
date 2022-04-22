import { ApplyOptions } from '@sapphire/decorators';
import type { MessageCommand } from '@sapphire/framework';
import { Message, MessageEmbed, type ColorResolvable } from 'discord.js';
import ms from 'ms';
import { wait } from '#utils/times/functions';
import { NextCommand } from '#lib/extensions/NextCommand';

@ApplyOptions<MessageCommand.Options>({
	description: 'Show the WS and API Data',
	aliases: ['pong']
})
export class UtilCommands extends NextCommand {
	public override async messageRun(msg: Message) {
		const pingEmbed = new MessageEmbed() //
			.addFields(
				{
					name: 'WebSocket',
					value: `${Math.round(this.container.client.ws.ping)} ms`
				},
				{
					name: 'API Response',
					value: `${Math.round(Date.now() - msg.createdTimestamp)} ms`
				}
			)
			.setColor(msg.author.accentColor as ColorResolvable)
			.setFooter({
				text: `Requested By: ${msg.author.tag}`,
				iconURL: msg.author.displayAvatarURL()
			});
		await msg.reply({ content: 'Pinging...' }).then(async (msg2) => {
			await wait(ms('15m'));
			if (msg2.editable) {
				await msg2.edit({ content: 'Received the data from the server!', embeds: [pingEmbed] });
			} else {
				this.container.logger.warn("Can't edit the current message.");
			}
		});
	}
}
