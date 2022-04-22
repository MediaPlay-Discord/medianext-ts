import type { TimerOptions } from 'node:timers';
import { setTimeout, setImmediate, setInterval } from 'node:timers/promises';

export function wait<K = any[]>(ms?: number, values?: K, options?: TimerOptions) {
	return setTimeout(ms, values, options);
}

export function loop<K = any[]>(ms?: number, values?: K, options?: TimerOptions) {
	return setInterval(ms, values, options);
}

export function immediate<K = any[]>(values?: K, options?: TimerOptions) {
	return setImmediate(values, options);
}
