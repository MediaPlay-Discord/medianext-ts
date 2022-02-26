// The First Ping Command (I guess...)
import { ApplyOptions } from '@sapphire/decorators';
import { Command, type CommandOptions } from '@sapphire/framework';
import { type Message, MessageEmbed, ColorResolvable } from 'discord.js';
import ms from 'ms';
import { wait } from '../../../modules/times';

@ApplyOptions<CommandOptions>({
	name: 'ping',
	description: 'Show the WS and API Data',
	aliases: ['pong'],
	enabled: true,
	fullCategory: ['Utils']
})
export class UtilCommands extends Command {
	public override async messageRun(msg: Message) {
		const pingEmbed = new MessageEmbed() //
			.addFields(
				{
					name: 'WebSocket',
					value: `${this.container.client.ws.ping.toFixed(1)} ms`
				},
				{
					name: 'API Response',
					value: `${(Date.now() - msg.createdTimestamp).toFixed(1)} ms`
				}
			)
			.setColor(msg.author.accentColor as ColorResolvable)
			.setFooter({
				text: `Requested By: ${msg.author.tag}`,
				iconURL: msg.author.displayAvatarURL({ dynamic: true })
			});
		await msg.reply({ content: 'Pinging...' }).then(async (msg2) => {
			await wait(ms('15m'));
			if (msg2.editable) {
				await msg2.edit({ content: 'Received the data from the server!', embeds: [pingEmbed] });
			} else {
				this.container.logger.warn("That message can't get edited.");
			}
		});
	}
}
