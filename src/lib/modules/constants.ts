import { URL } from 'node:url';

export const rootDir = new URL('../../../', import.meta.url);
export const srcDir = new URL('src/', rootDir);

export const enum Emoji {
	Success = ':white_check_mark:',
	Warn = ':warning:',
	Error = ':x:',
	Exclam = ':exclamation:',
	NoEntry = ':no_entry_sign:'
}
