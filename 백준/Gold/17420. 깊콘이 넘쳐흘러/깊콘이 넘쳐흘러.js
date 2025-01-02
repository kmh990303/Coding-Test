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
    const rest = input[1].split(' ').map(Number);
    const plan = input[2].split(' ').map(Number);

    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([rest[i], plan[i]]);
    }

    arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    let p = arr[0][0];
    let th = arr[0][1];
    let cnt = 0;

    for (let i = 0; i < n; i++) {
        if (th > arr[i][0]) {
            const tmp = Math.ceil((th - arr[i][0]) / 30);
            cnt += tmp;
            arr[i][0] += tmp * 30;
        }

        p = Math.max(p, arr[i][0]);

        if (i + 1 < n && arr[i][1] !== arr[i + 1][1]) {
            th = Math.max(p, arr[i + 1][1]);
        }
    }

    console.log(cnt);
})