import process from 'process';

const parseEnv = () => {
    // Write your code here 
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) process.stdout.write(`${key}=${value}; `);
    }
};

parseEnv();