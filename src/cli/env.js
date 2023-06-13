import process from 'process';

const parseEnv = () => {
    // Write your code here 
    for (const [key, value] of Object.entries(process.env)) {
        console.log(`RSS_${key}=${value};`);
    }
};

parseEnv();