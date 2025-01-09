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
    const result = [];
    const path = [];

    function dfs(depth) {
        if (depth === m) {
            result.push(path.join(' '));
            return;
        }

        for (let i = 1; i <= n; i++) {
            path.push(i);
            dfs(depth + 1);
            path.pop(i);
        }
    }

    dfs(0);
    console.log(result.join('\n'));
})