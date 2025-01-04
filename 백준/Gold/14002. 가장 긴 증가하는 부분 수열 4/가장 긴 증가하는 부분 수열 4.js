const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => { // 백준 14002번
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);
    const arr = input[1].split(' ').map(Number);
    const dp = Array(n).fill(1);
    const prev = Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
    }

    const maxLen = Math.max(...dp);
    let index = dp.indexOf(maxLen);

    const result = [];

    while (index !== -1) {
        result.push(arr[index]);
        index = prev[index];
    }

    console.log(maxLen);
    console.log(result.reverse().join(' '));
})