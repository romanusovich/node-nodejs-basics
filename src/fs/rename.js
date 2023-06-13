import * as fs from 'fs';

const rename = async () => {
    // Write your code here 
    const oldPath = './src/fs/files/wrongFilename.txt';
    const newPath = './src/fs/files/properFilename.md';
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