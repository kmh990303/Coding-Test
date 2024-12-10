const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const board = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let maxCount = 0;

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const [R, C] = input[0].split(' ').map(Number);

    for (let i = 1; i <= R; i++) {
        board.push(input[i].split(''))
    }

    function dfs(x, y, visited, count) {
        maxCount = Math.max(maxCount, count);

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
                const charCode = board[nx][ny].charCodeAt(0) - 'A'.charCodeAt(0);
                if (!visited[charCode]) {
                    visited[charCode] = true;
                    dfs(nx, ny, visited, count + 1);
                    visited[charCode] = false;
                }
            }
        }
    }

    const visited = Array(26).fill(false);
    const startChar = board[0][0].charCodeAt(0) - 'A'.charCodeAt(0);
    visited[startChar] = true;

    dfs(0, 0, visited, 1);

    console.log(maxCount);
})