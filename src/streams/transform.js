import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const transform = async () => {
    // Write your code here 
    stdout.write('Write something\nPress "ctrl + c" to leave\n');
    const reverseString = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join('') + '\n');
        },
    })
    stdin.pipe(reverseString).pipe(stdout);
};

await transform();