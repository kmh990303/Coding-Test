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
    const numList = [];

    for (let i = 1; i <= n; i++) {
        numList.push(input[i].split(' ').map(Number));
    }

    // 끝나는 시간 기준으로 정렬 => 끝나는 시간이 같을 때, 시작 시간 기준 정렬
    numList.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });

    let standard = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        if (numList[i][0] >= standard) {
            standard = numList[i][1];
            result++;
        }
    }

    console.log(result);
})
