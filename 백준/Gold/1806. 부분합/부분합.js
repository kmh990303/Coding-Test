const readline = require('readline'); // 백준 1806번
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, s] = input[0].split(' ').map(Number);

    const numberList = input[1].split(' ').map(Number)

    let left = 0, right = 0;
    let partSum = 0;
    let minLength = Infinity;

    while (right < n) {
        partSum += numberList[right];
        right++;

        while (partSum >= s) {
            minLength = Math.min(minLength, right - left);
            partSum -= numberList[left];
            left++;
        }
    }

    console.log(minLength === Infinity ? 0 : minLength);
})