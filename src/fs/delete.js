import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    // Write your code here 
    const removePath = path.join(__dirname, '/files/fileToRemove.txt');
    fs.unlink(removePath, (err) => {
        if (err && err.code === 'ENOENT') throw Error('FS operation failed');
        else if (err) throw err;
    });
};

await remove();