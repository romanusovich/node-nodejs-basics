import * as fs from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    // Write your code here
    const filePath = './files/fileToCalculateHashFor.txt';
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        console.log(createHash('sha256').update(data.toString()).digest('hex'));
    });
};

await calculateHash();