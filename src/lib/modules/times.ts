import { promisify } from 'node:util';
export const wait = promisify(setTimeout);

export function convertMS(ms: number) {
	const days = Math.floor(ms / 86400);
	ms %= 86400;
	const hours = Math.floor(ms / 3600);
	ms %= 3600;
	const minutes = Math.floor(ms / 60);
	const seconds = Math.floor(ms % 60);

	return `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
}
