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
    const board = [];

    for (let i = 1; i <= n; i++) {
        board.push(input[i].split(' ').map(Number));
    }

    let minDiff = Infinity;
    const visited = Array(n).fill(false);

    function calculate() {
        let startTeam = 0;
        let linkTeam = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (visited[i] && visited[j]) {
                    startTeam += board[i][j];
                } else if (!visited[i] && !visited[j]) {
                    linkTeam += board[i][j];
                }
            }
        }

        return Math.abs(startTeam - linkTeam);
    }

    function dfs(depth, start) {
        if (depth === n / 2) {
            const diff = calculate();
            minDiff = Math.min(minDiff, diff);
            return;
        }

        for (let i = start; i < n; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(depth + 1, i + 1);
                visited[i] = false;
            }
        }
    }

    dfs(0, 0);
    console.log(minDiff);
})