import * as fs from 'fs';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = resolve(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        fs.rmSync(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();