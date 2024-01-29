import { spawn } from 'child_process';
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scriptPath = resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [scriptPath, ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
        process.exit();
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 2, 'someArgument3', 'Argument4']);
