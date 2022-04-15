import { Command, Piece } from '@sapphire/framework';
import { Permissions } from 'discord.js';
import { PermissionFlagsBits } from 'discord-api-types/v10';

export abstract class NextCommand extends Command {
	public constructor(context: Piece.Context, options: Piece.Options) {
		const resolvedPerms = new Permissions(PermissionFlagsBits.EmbedLinks);
		super(context, {
			...options,
			requiredClientPermissions: resolvedPerms
		});
	}
}
