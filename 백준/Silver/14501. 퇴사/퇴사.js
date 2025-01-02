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
    const arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(input[i].split(' ').map(Number));
    }

    const dp = Array(n + 1).fill(0);
    
    for (let i = n - 1; i >= 0; i--) {
        const [takeDays, amount] = arr[i];

        if (i + takeDays <= n) {
            dp[i] = Math.max(dp[i + 1], amount + dp[i + takeDays]);
        } else {
            dp[i] = dp[i + 1];
        }
    }

    console.log(dp[0]);
})