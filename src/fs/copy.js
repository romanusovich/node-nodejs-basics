import * as fs from 'fs';

const copy = async () => {
    // Write your code here 
    const source = './src/fs/files';
    const destination = './src/fs/files_copy';
    fs.cp(source, destination, { recursive: true, force: false, errorOnExist: true }, (err) => {
        if (err &&
            (err.code === 'ENOENT' ||
                err.code === 'ERR_FS_CP_EEXIST')) throw Error('FS operation failed');
        else if (err) throw err;
    });
};

await copy();
