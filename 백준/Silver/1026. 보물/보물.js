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

    const aList = input[1].split(' ').map(Number);
    const bList = input[2].split(' ').map(Number);

    aList.sort((a, b) => a - b);
    bList.sort((a, b) => b - a);

    let result = 0;

    for (let i = 0; i < n; i++) {
        result += aList[i] * bList[i];
    }

    console.log(result);
})
