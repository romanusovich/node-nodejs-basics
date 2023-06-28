import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, '/files/fileToRead.txt');
    fs.readFile(filePath, (err, data) => {
        if (err && err.code === 'ENOENT') throw Error('FS operation failed');
        else if (err) throw err;
        console.log(data.toString());
    });
};

await read();