import * as fs from 'fs';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderPath = resolve(__dirname, 'files');

const list = async () => {
    try {
        fs.accessSync(folderPath);
        const files = fs.readdirSync(folderPath);
        files.forEach(file => console.log(file));
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();