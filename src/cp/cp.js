import { spawn } from 'child_process';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    // Write your code here
    spawn('node', args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [path.join(__dirname, '/files/script.js'), 'someArgument1', 'someArgument2', 'someArgument3']);
