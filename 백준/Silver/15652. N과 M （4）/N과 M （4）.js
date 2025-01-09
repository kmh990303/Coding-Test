const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    const result = [];
    const path = [];

    function dfs(depth, start) {
        if (depth === m) {
            result.push(path.join(' '));
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);
            dfs(depth + 1, i);
            path.pop();
        }
    }

    dfs(0, 1);
    console.log(result.join('\n'));
})