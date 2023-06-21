import * as fs from 'fs';
import { createHash } from 'crypto';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    // Write your code here
    const filePath = path.join(__dirname, '/files/fileToCalculateHashFor.txt');
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        console.log(createHash('sha256').update(data.toString()).digest('hex'));
    });
};

await calculateHash();