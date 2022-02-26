import { hyperlink } from '@discordjs/builders';
import { ApplyOptions } from '@sapphire/decorators';
import { Command, type CommandOptions, RegisterBehavior, ChatInputCommand } from '@sapphire/framework';
import { ColorResolvable, MessageEmbed, type GuildMember } from 'discord.js';
import ms from 'ms';
import { wait } from '../../../modules/times';

@ApplyOptions<CommandOptions>({
	name: 'avatar',
	description: 'Show member avatars',
	fullCategory: ['Pictures'],
	chatInputCommand: {
		register: true
	}
})
export class PicturesCommands extends Command {
	public override async chatInputRun(...[interaction]: Parameters<ChatInputCommand['chatInputRun']>) {
		await interaction.deferReply({
			ephemeral: true
		});
		await wait(ms('4m'));
		const avatarEmbed = new MessageEmbed();
		let members = interaction.options.getMember('user', true) as GuildMember;

		if (!members) members = interaction.member as GuildMember;

		avatarEmbed //
			.setTitle(`User: ${members.user.username}`)
			.setDescription(`${hyperlink('Default Avatar', members.user.defaultAvatarURL)}\n${hyperlink('Current', members.user.displayAvatarURL())}`)
			.setImage(`${members.user.displayAvatarURL() ? !members.user.displayAvatarURL() : members.user.defaultAvatarURL}`)
			.setColor(members.user.accentColor as ColorResolvable)
			.setFooter({
				text: `Requested By: ${members.user.tag}`,
				iconURL: members.user.displayAvatarURL()
			});

		await interaction.editReply({ embeds: [avatarEmbed] });
	}

	public override registerApplicationCommands(...[registry]: Parameters<ChatInputCommand['registerApplicationCommands']>) {
		registry.registerChatInputCommand(
			(builder) =>
				builder //
					.setName(this.name)
					.setDescription(this.description)
					.addUserOption((option) =>
						option //
							.setName('user')
							.setDescription('User Tag')
					),
			{
				registerCommandIfMissing: true,
				behaviorWhenNotIdentical: RegisterBehavior.Overwrite
			}
		);
	}
}
