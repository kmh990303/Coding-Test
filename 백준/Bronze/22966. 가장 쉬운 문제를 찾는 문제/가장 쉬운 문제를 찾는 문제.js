const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // const n = Number(input[0]);
    const problems = input.slice(1).map((elem) => elem.split(' '));

    problems.sort((a, b) => Number(a[1]) - Number(b[1]));
    console.log(problems[0][0]);
})