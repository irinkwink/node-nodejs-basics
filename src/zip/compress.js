import * as fs from 'fs';
import * as zlib from 'zlib';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = resolve(__dirname, 'files', 'fileToCompress.txt');
const archiveFilePath = resolve(__dirname, 'files', 'archive.gz');


const compress = async () => {
    const readStream = fs.createReadStream(filePath);
    const gzipStream = zlib.createGzip();
    const writeStream = fs.createWriteStream(archiveFilePath);

    readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();