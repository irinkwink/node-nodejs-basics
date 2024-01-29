import * as fs from 'fs';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        fs.accessSync(filePath);
        const content = fs.readFileSync(filePath, {encoding: 'utf-8'});
        console.log(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();