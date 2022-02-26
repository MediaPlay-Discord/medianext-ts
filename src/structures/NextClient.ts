import { SapphireClient } from '@sapphire/framework';
import { clientOptions } from '../configs/clientOptions';

export class NextClient extends SapphireClient {
	public constructor() {
		super(clientOptions);
	}
}
