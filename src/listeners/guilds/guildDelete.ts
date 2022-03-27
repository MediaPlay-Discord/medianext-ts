import { Listener } from '@sapphire/framework';
import type { Guild } from 'discord.js';

export class GuildListeners extends Listener {
	public run(guild: Guild) {
		this.container.logger.info(`Guild: ${guild.name}\nID: ${guild.id} | Removed`);
	}
}
