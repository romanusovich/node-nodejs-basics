import * as fs from 'fs';
import { stdout, stdin } from 'process';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    // Write your code here 
    stdout.write('Write something\nPress "ctrl + c" to leave\n');
    const filePath = path.join(__dirname, '/files/fileToWrite.txt');
    const writeStream = fs.createWriteStream(filePath);
    stdin.on('data', (data) => writeStream.write(data));
};

await write();