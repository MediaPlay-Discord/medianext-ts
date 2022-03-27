import type { NextEnv } from './NextEnv';

declare global {
	namespace NodeJS {
		interface ProcessEnv extends NextEnv {}
	}
}
