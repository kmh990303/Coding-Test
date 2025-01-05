const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let arr = input[0].trim().split('');
    const aCnt = arr.filter((val) => val === 'a').length;
    arr = arr.concat(arr.slice(0, aCnt - 1));
    
    let result = Infinity;

    for (let i = 0; i < arr.length - (aCnt - 1); i++) {
        result = Math.min(result, arr.slice(i, i + aCnt).filter(val => val === 'b').length);
    }

    console.log(result);
})