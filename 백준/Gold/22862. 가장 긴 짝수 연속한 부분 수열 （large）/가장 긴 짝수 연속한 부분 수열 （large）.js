const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, k] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);
    let left = 0;
    let right = 0;
    let oddCount = 0;
    let maxLength = 0;

    while (right < n) {
        if (arr[right] % 2 === 1) {
            oddCount += 1;
        }

        while (oddCount > k) {
            if (arr[left] % 2 === 1) {
                oddCount--;
            }
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1 - oddCount);
        right++;
    }

    console.log(maxLength);
})