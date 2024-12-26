const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);
    const numberList = input[1].split(' ').map(Number);

    let left = 0;
    let right = 0;
    let numSet = new Set();
    let result = 0;

    while (right < n) {
        if (numSet.has(numberList[right])) { // 중복 수가 나오거나 혹은 배열에 마지막 도달한 경우
            numSet.delete(numberList[left]);
            left++;
        } else { // 중복 아닌 수
            numSet.add(numberList[right]);
            result += (right - left + 1);
            right++;
        }
    }

    console.log(result);
})