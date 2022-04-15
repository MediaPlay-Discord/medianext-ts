import { Logger, LogLevel } from '@sapphire/framework';

export class NextLogger extends Logger {
	public constructor() {
		switch (process.env.NODE_ENV) {
			case 'production':
				super(LogLevel.Info);
				break;
			default:
				super(LogLevel.Debug);
		}
	}
}
