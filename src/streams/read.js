import * as fs from 'fs';
import { stdout } from 'process';

const read = async () => {
    // Write your code here 
    const filePath = './files/fileToRead.txt';
    const readStream = fs.createReadStream(filePath);
    readStream.on('data', (data) => stdout.write(data));
};

await read();