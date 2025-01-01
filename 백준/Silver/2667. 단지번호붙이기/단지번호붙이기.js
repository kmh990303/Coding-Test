const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // 북동남서

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);
    const board = [];
    let totalCount = 0;
    const result = [];

    for (let i = 1; i <= n; i++) {
        board.push(input[i].split('').map(Number));
    }

    function bfs(x, y, visited) {
        const queue = [[x, y]];
        visited[x][y] = true;
        let count = 1;

        while (queue.length > 0) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && board[nx][ny] === 1) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    count++;
                }
            }
        }

        return count;
    }

    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && board[i][j] === 1) {
                totalCount++;
                const townCount = bfs(i, j, visited);
                result.push(townCount);
            }
        }
    }
    result.sort((a, b) => a - b);
    result.unshift(totalCount);
    console.log(result.join('\n'));
});