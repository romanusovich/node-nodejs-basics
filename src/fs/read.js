import * as fs from 'fs';

const read = async () => {
    // Write your code here 
    const filePath = './src/fs/files/fileToRead.txt';
    fs.readFile(filePath, (err, data) => {
        if (err && err.code === 'ENOENT') throw Error('FS operation failed');
        else if (err) throw err;
        console.log(data.toString());
    });
};

await read();