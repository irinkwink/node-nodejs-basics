import * as fs from 'fs';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const oldPath = resolve(__dirname, 'files', 'wrongFilename.txt');
const newPath = resolve(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        fs.accessSync(oldPath);
        try {
            fs.accessSync(newPath);
        } catch (err) {
            fs.renameSync(oldPath, newPath)
            return;
        }
        throw new Error('FS operation failed');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();