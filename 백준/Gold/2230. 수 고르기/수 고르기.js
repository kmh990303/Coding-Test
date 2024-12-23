const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];
const numberList = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);

    for (let i = 1; i <= n; i++) {
        numberList.push(Number(input[i]));
    }

    let minD = 2000000000;
    let left = 0;
    let right = 1;

    numberList.sort((a, b) => a - b); // 정렬

    while (right < n) {
        const diff = numberList[right] - numberList[left];

        if (diff >= m) {
            minD = Math.min(minD, diff);
            left++;
        } else {
            right++;
        }
    }

    console.log(minD);
})