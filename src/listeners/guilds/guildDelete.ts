import { ApplyOptions } from '@sapphire/decorators';
import { Listener, type ListenerOptions } from '@sapphire/framework';
import type { Guild } from 'discord.js';

@ApplyOptions<ListenerOptions>({
	event: 'guildDelete'
})
export class GuildListeners extends Listener {
	public override run(guild: Guild) {
		this.container.logger.info(`Guild: ${guild.name}\nID: ${guild.id} | Removed`);
	}
}
