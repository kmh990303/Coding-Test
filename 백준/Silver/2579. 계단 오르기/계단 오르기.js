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
    const numberList = input.slice(1).map(Number);

    if (n === 1) {
        console.log(numberList[0]);
        return;
    }

    const dp = new Array(n).fill(0);

    // 초기값 설정
    dp[0] = numberList[0];
    dp[1] = numberList[0] + numberList[1];
    dp[2] = Math.max(numberList[0] + numberList[2], numberList[1] + numberList[2]);

    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(
            dp[i - 2] + numberList[i], // 두 칸 전에서 오는 경우
            dp[i - 3] + numberList[i - 1] + numberList[i] // 한 칸 전에서 오는 경우
        );
    }

    console.log(dp[n - 1]);
});
