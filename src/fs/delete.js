import * as fs from 'fs';

const remove = async () => {
    // Write your code here 
    const removePath = './files/fileToRemove.txt';
    fs.unlink(removePath, (err) => {
        if (err && err.code === 'ENOENT') throw Error('FS operation failed');
        else if (err) throw err;
    });
};

await remove();