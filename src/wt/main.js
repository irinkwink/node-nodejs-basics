import { Worker } from 'worker_threads';
import * as os from 'os';

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workers = [];
    const results = [];

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(new URL('./worker.js', import.meta.url));
        workers.push(worker);
        worker.postMessage(10 + i);

        worker.on('message', (result) => {
            results.push(result);

            if (results.length === numCores) {
                const sortedResults = results
                    .sort((a, b) => a.id - b.id)
                    .map((item) => ({ status: item.status, data: item.data }));
                console.log('Results:', sortedResults);
                workers.forEach(worker => worker.terminate());
            }
        });

        worker.on('error', (error) => {
            results.push({id: 10 + i, status: 'error', data: null });
        });
    }
};

await performCalculations();