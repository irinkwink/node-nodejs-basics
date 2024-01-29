import * as fs from 'fs';
import * as zlib from 'zlib';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = resolve(__dirname, 'files', 'fileToCompress.txt');
const archiveFilePath = resolve(__dirname, 'files', 'archive.gz');

const decompress = async () => {
    try {
        fs.accessSync(archiveFilePath);
        const readStream = fs.createReadStream(archiveFilePath);
        const gunzipStream = zlib.createGunzip();
        const writeStream = fs.createWriteStream(filePath);
    
        readStream.pipe(gunzipStream).pipe(writeStream);
    } catch (err) {
        throw new Error(`Can not find 'archive.gz' file. Create it by 'npm run zip:compress'`);
    }
};

await decompress();