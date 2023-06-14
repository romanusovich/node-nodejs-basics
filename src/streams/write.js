import * as fs from 'fs';
import { stdout, stdin } from 'process';

const write = async () => {
    // Write your code here 
    stdout.write('Write something\nPress "ctrl + c" to leave\n');
    const filePath = './files/fileToWrite.txt';
    const writeStream = fs.createWriteStream(filePath);
    stdin.on('data', (data) => writeStream.write(data));
};

await write();