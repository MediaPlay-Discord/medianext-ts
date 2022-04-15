import { envParseArray } from '@skyra/env-utilities';

export function getGuildIds() {
	return envParseArray('GUILD_ID', []) as string[];
}
