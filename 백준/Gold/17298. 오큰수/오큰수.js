const readline = require('readline'); //17298번 해결 다시!
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);
    const numbers = input[1].split(' ').map(Number);

    const result = Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            const index = stack.pop();
            result[index] = numbers[i];
        }
        stack.push(i);
    }

    console.log(result.join(' '));
})