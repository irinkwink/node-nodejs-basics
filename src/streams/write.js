import * as fs from 'fs';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = resolve(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = fs.createWriteStream(filePath);

    process.stdin.pipe(writeStream);
};

await write();