const readline = require('readline'); //1564번 백준
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    const visited = Array(n + 1).fill(false);
    const path = [];

    function backTrack(depth) {
        if (depth === m) {
            console.log(path.join(' '));
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (!visited[i]) {
                visited[i] = true;
                path.push(i);
                backTrack(depth + 1);
                path.pop();
                visited[i] = false;
            }
        }
    }

    backTrack(0);
})