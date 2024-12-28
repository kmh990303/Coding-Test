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
    const A = input[1].split(' ').map(Number);
    const [B, C] = input[2].split(' ').map(Number);

    let count = 0;

    for (let i = 0; i < n; i++) {
        A[i] = Math.max(0, A[i] - B);
        count += 1;

        count += Math.ceil(A[i] / C);
    }

    console.log(count);
})