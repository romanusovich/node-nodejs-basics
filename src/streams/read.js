import * as fs from 'fs';
import { stdout } from 'process';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, '/files/fileToRead.txt');
    const readStream = fs.createReadStream(filePath);
    readStream.on('data', (data) => stdout.write(data));
};

await read();