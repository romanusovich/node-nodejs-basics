import { writeFile } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    // Write your code here 
    writeFile(path.join(__dirname, '/files/fresh.txt'), 'I am fresh and young', { flag: 'wx' }, (err) => { 
        if (err && err.code === 'EEXIST') throw Error('FS operation failed');
        else if (err) throw err;
    });
};

await create();