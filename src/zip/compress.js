import Zlib from 'zlib';
import * as fs from 'fs';

const compress = async () => {
    // Write your code here 
    const fileSource = './files/fileToCompress.txt';
    const fileTarget = './files/archive.gz';
    const readStream = fs.createReadStream(fileSource);
    const writeStream = fs.createWriteStream(fileTarget);
    const zip = Zlib.createGzip();
    readStream.pipe(zip).pipe(writeStream);
};

await compress();