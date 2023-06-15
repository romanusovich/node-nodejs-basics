import { Worker } from 'worker_threads';
import * as os from 'os';

const performCalculations = async () => {
    // Write your code here
    const CPUs = os.cpus().length;
    const result = [];
    for (let i = 0; i < CPUs; i++) {
        const worker = new Worker('./worker.js', {
            workerData: {
                value: i + 10,
            },
        });
        worker.on('message', (event) => { if (event !== null) result.push({ status: 'resolved', data: event }); });
        worker.on('error', (err) => { if (err) result.push({ status: 'error', data: null }); });
        worker.on('exit', () => { if (result.length === CPUs) console.log(result); });
    }
};

await performCalculations();