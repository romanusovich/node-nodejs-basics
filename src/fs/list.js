import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
    // Write your code here 
    const dirPath = path.join(__dirname, '/files');
    fs.readdir(dirPath, (err, files) => {
        if (err && err.code === 'ENOENT') throw Error('FS operation failed');
        else if (err) throw err;
        console.log(files);
    })
};

await list();