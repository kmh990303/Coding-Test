const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);
    const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
    const dp = Array(n).fill(0);
    dp[0] = arr[0];

    for (let i = 1; i < n; i++) {
        dp[i] = arr[i] + dp[i - 1];
    }

    console.log(dp.reduce((a, b) => a + b));
})