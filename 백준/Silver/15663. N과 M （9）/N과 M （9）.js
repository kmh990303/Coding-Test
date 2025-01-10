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
    const maxN = Math.max(...arr);
    const visited = Array(n).fill(false);

    function dfs(depth) {
        if (depth === m) {
            result.push(path.join(' '));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (visited[i] || (i > 0 && arr[i] === arr[i - 1] && !visited[i - 1])) {
                continue;
            }

            visited[i] = true;
            path.push(arr[i]);
            dfs(depth + 1);
            path.pop();
            visited[i] = false;
        }
    }

    dfs(0);
    console.log(result.join('\n'));
})