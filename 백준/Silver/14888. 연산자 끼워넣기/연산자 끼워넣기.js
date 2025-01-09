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
    const arr = input[1].split(' ').map(Number);
    const calArr = input[2].split(' ').map(Number);
    let maxVal = Number.MIN_SAFE_INTEGER
    let minVal = Number.MAX_SAFE_INTEGER

    const calculator = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => parseInt(a / b),
    ];

    const dfs = (count, result) => {
        if (count === n - 1) {
            maxVal = Math.max(maxVal, result);
            minVal = Math.min(minVal, result);
        } else {
            for (let i = 0; i < calArr.length; i++) {
                if (calArr[i] === 0) continue;
                calArr[i]--;
                dfs(count + 1, calculator[i](result, arr[count + 1]));
                calArr[i]++;
            }
        }
    }

    dfs(0, arr[0]);

    console.log(maxVal ? maxVal : 0);
    console.log(minVal ? minVal : 0);
})