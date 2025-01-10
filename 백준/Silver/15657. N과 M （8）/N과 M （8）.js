const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
    const result = [];
    const path = [];

    function dfs(depth, start) {
        if (depth === m) {
            result.push(path.join(' '));
            return;
        }

        for (let i = start; i < n; i++) {
            path.push(arr[i]);
            dfs(depth + 1, i);
            path.pop();
        }
    }

    dfs(0, 0);
    console.log(result.join('\n'));
})