const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const t = Number(input[0]);
    const result = [];

    for (let i = 0; i < t; i++) {
        const n = Number(input[3 * i + 1]);
        const stickers = [];
        const dp = Array.from({ length: 2 }, () => Array(n).fill(0));

        stickers.push(input[3 * i + 2].split(' ').map(Number));
        stickers.push(input[3 * i + 3].split(' ').map(Number));

        dp[0][0] = stickers[0][0];
        dp[1][0] = stickers[1][0];

        if (n > 1) {
            dp[0][1] = stickers[0][1] + dp[1][0];
            dp[1][1] = stickers[1][1] + dp[0][0];
        }

        for (let j = 2; j < n; j++) {
            dp[0][j] = stickers[0][j] + Math.max(dp[1][j - 1], dp[1][j - 2]);
            dp[1][j] = stickers[1][j] + Math.max(dp[0][j - 1], dp[0][j - 2]);
        }

        result.push(Math.max(dp[0][n - 1], dp[1][n - 1]));
    }

    console.log(result.join('\n'));
})