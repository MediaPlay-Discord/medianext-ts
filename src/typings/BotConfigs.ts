export interface Bots {
	clients: {
		prefix?: string;
		appId: string;
	};
	configs: {
		owners: string[];
		guilds: string;
	};
}
