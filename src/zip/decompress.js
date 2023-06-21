import Zlib from 'zlib';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    // Write your code here 
    const fileSource = path.join(__dirname, '/files/archive.gz');
    const fileTarget = path.join(__dirname, '/files/fileToCompress.txt');
    const readStream = fs.createReadStream(fileSource);
    const writeStream = fs.createWriteStream(fileTarget);
    const unzip = Zlib.createUnzip();
    readStream.pipe(unzip).pipe(writeStream);
};

await decompress();