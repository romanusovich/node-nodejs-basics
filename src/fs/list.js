import * as fs from 'fs';

const list = async () => {
    // Write your code here 
    const dirPath = './files';
    fs.readdir(dirPath, (err, files) => {
        if (err && err.code === 'ENOENT') throw Error('FS operation failed');
        else if (err) throw err;
        console.log(files);
    })
};

await list();