import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    // Write your code here 
    const source = path.join(__dirname, '/files');
    const destination = path.join(__dirname, '/files_copy');
    fs.cp(source, destination, { recursive: true, force: false, errorOnExist: true }, (err) => {
        if (err &&
            (err.code === 'ENOENT' ||
                err.code === 'ERR_FS_CP_EEXIST')) throw Error('FS operation failed');
        else if (err) throw err;
    });
};

await copy();
