const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const numList = input.slice(1).map(Number);
    const maxN = Math.max(...numList);
    const dp = new Array(maxN).fill(0);

    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i < maxN; i++) {
        dp[i] = dp[i - 3] + dp[i - 2];
    }

    const result = [];

    for (let elem of numList) {
        result.push(dp[elem - 1]);
    }

    console.log(result.join('\n'));
})