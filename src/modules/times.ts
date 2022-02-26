/* eslint-disable one-var */
/* eslint-disable no-var */
import * as util from 'util';
export const wait = util.promisify(setTimeout);

export function convertMS(ms: number) {
	var days, hours, minutes, seconds;

	days = Math.floor(ms / 86400000);
	ms %= 86400000;
	hours = Math.floor(ms / 3600000);
	ms %= 3600000;
	minutes = Math.floor(ms / 60000);
	ms %= 60000;
	seconds = Math.floor(ms / 1000);
	ms %= 1000;

	return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}
