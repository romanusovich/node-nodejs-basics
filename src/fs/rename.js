import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    // Write your code here 
    const oldPath = path.join(__dirname, '/files/wrongFilename.txt');
    const newPath = path.join(__dirname, '/files/properFilename.md');
    fs.access(newPath, (err) => {
        if (!err) throw Error('FS operation failed'); 
        else if (err && err.code === 'ENOENT') {
            fs.rename(oldPath, newPath, (err) => {
                if (err && err.code === 'ENOENT') throw Error('FS operation failed');
                else if (err) throw err;
            });
        } else throw err;
    });
};

await rename();