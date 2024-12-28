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
    const dp = Array(n + 1).fill(Infinity);
    dp[n] = 0;

    for (let i = n; i >= 1; i--) {
        if (i % 3 === 0 && (i / 3) >= 0) {
            dp[Math.floor(i / 3)] = Math.min(dp[Math.floor(i / 3)], dp[i] + 1);
        }
        if (i % 2 === 0 && (i / 2) >= 0) {
            dp[Math.floor(i / 2)] = Math.min(dp[Math.floor(i / 2)], dp[i] + 1);
        }
        dp[i - 1] = Math.min(dp[i - 1], dp[i] + 1);
    }

    console.log(dp[1]);
})