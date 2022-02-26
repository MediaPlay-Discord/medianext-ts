/* eslint-disable no-return-await*/
import * as path from 'path';
import * as util from 'util';
import { glob } from 'glob';

const globPromise = util.promisify(glob);

async function importFiles(filePath: string) {
	return await import(filePath);
}

async function loadHandlers(paths: string) {
	return await globPromise(path.join(__dirname, paths));
}

export { importFiles, loadHandlers };
