const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const t = Number(input[0]);
    const testCases = input.slice(1).map(Number);

    const maxN = Math.max(...testCases); // 가장 큰 n값
    const sieve = Array(maxN + 1).fill(true);
    sieve[0] = sieve[1] = false;

    // 에라토스테네스의 체
    for (let i = 2; i <= Math.sqrt(maxN); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= maxN; j += i) {
                sieve[j] = false;
            }
        }
    }

    const results = [];

    // 각 테스트 케이스에 대해 골드바흐 파티션 계산
    for (let n of testCases) {
        let count = 0;
        for (let i = 2; i <= n / 2; i++) {
            if (sieve[i] && sieve[n - i]) {
                count++;
            }
        }
        results.push(count);
    }

    console.log(results.join('\n'));
});
