import { writeFile } from 'fs';

const create = async () => {
    // Write your code here 
    writeFile('./files/fresh.txt', 'I am fresh and young', { flag: 'wx' }, (err) => { 
        if (err && err.code === 'EEXIST') throw Error('FS operation failed');
        else if (err) throw err;
    });
};

await create();