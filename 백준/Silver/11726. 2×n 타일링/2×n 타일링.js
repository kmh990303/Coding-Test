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
    const MODULO = 10007;
    const dp = Array(n + 1).fill(0);
    dp[1] = 1;
    if (n >= 2) dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MODULO;
    }

    console.log(dp[n]);
})