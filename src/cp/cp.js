import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    spawn('node', args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['./files/script.js' ,'someArgument1', 'someArgument2', 'someArgument3']);
