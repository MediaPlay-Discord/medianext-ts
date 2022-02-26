export function convertMS(ms: number) {
	const days = Math.floor(ms / 86400000);
	ms %= 86400000;
	const hours = Math.floor(ms / 3600000);
	ms %= 3600000;
	const minutes = Math.floor(ms / 60000);
	ms %= 60000;
	const seconds = Math.floor(ms / 1000);
	ms %= 1000;

	return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}
