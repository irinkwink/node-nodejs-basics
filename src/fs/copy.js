import * as fs from 'fs';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const originalFolderPath = resolve(__dirname, 'files');
const copyFolderPath = resolve(__dirname, 'files_copy');

const copy = async () => {
    try {
        fs.accessSync(originalFolderPath);
        try {
            fs.accessSync(copyFolderPath);
        } catch (err) {
            fs.cpSync(originalFolderPath, copyFolderPath, { recursive: true })
            return;
        }
        throw new Error('FS operation failed');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
