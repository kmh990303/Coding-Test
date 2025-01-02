const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);
    const elements = [];
    const result = [];
    const prefixSum = Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
    }

    for (let i = 2; i < 2 + m; i++) {
        const [n1, n2] = input[i].split(' ').map(Number);
        const partSum = prefixSum[n2] - prefixSum[n1 - 1];
        result.push(partSum);
    }

    console.log(result.join('\n'));
})