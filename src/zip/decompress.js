import Zlib from 'zlib';
import * as fs from 'fs';

const decompress = async () => {
    // Write your code here 
    const fileSource = './files/archive.gz';
    const fileTarget = './files/fileToCompress.txt';
    const readStream = fs.createReadStream(fileSource);
    const writeStream = fs.createWriteStream(fileTarget);
    const unzip = Zlib.createUnzip();
    readStream.pipe(unzip).pipe(writeStream);
};

await decompress();