const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    const numList = input[1].split(' ').map(Number);

    let left = 0;
    let right = 0;
    let partSum = 0;
    let result = 0;

    while (right <= n) {
        if (partSum < m) {
            partSum += numList[right];
            right++;
        } else {
            if (partSum === m) result++;
            partSum -= numList[left];
            left++;
        }
    }

    console.log(result);
})