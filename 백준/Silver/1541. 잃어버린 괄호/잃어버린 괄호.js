const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const parts = line.split('-');
    let result = parts[0].split('+').reduce((sum, num) => sum + Number(num), 0);

    for (let i = 1; i < parts.length; i++) {
        const sum = parts[i].split('+').reduce((sum, num) => sum + Number(num), 0);
        result -= sum;
    }

    console.log(result);
    rl.close();
})