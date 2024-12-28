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

    const houseList = [];

    for (let i = 1; i <= n; i++) {
        houseList.push(input[i].split(' ').map(Number));
    }

    const dp = Array.from({ length: n }, () => [0, 0, 0]);

    dp[0][0] = houseList[0][0];
    dp[0][1] = houseList[0][1];
    dp[0][2] = houseList[0][2]; // 초기값 설정

    for (let i = 1; i < n; i++) {
        dp[i][0] = houseList[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
        dp[i][1] = houseList[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
        dp[i][2] = houseList[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
    }

    const result = Math.min(...dp[n - 1]);
    console.log(result);
})