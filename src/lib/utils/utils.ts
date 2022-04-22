import { roundNumber } from '@sapphire/utilities';

export function getPing(ms: number) {
	const now = Date.now();
	const nowSeconds = roundNumber(now / 1000);
	return roundNumber(nowSeconds - ms, 2);
}
