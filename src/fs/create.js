import * as fs from 'fs';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = resolve(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        fs.accessSync(filePath);
    } catch (err) {
        fs.writeFileSync(filePath, 'I am fresh and young');
        return;
    }
    throw new Error('FS operation failed');
};

await create();