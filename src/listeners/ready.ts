import { ApplyOptions } from '@sapphire/decorators';
import { Listener } from '@sapphire/framework';

@ApplyOptions<Listener.Options>({
	once: true
})
export class ClientListener extends Listener {
	public override run() {
		this.container.logger.info(
			`User: ${this.container.client.user?.username}\nDiscriminator: ${this.container.client.user?.discriminator}\nID: ${this.container.client.user?.id}`
		);
	}
}
