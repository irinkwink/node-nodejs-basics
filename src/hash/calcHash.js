import * as fs from 'fs';
import * as crypto from 'crypto';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');

    const readStream = fs.createReadStream(filePath);

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        const hexHash = hash.digest('hex');
        console.log(hexHash);
    });
};

await calculateHash();