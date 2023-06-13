import process from 'process';

const parseArgs = () => {
    // Write your code here 
    const args = Object.entries(process.argv).slice(2);
    for (let i = 0; i < args.length; i += 2) {
        console.log(`${args[i][1].slice(2)} is ${args[i + 1][1]},`);
    }
};

parseArgs();