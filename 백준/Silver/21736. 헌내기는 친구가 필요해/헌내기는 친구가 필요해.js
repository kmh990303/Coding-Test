const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];
const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    let start_x = 0;
    let start_y = 0;

    const board = [];

    for (let i = 1; i <= n; i++) {
        const row = input[i].trim().split('');
        if (row.indexOf('I') !== -1) {
            start_x = i - 1;
            start_y = row.indexOf('I');
        }
        board.push(row);
    }

    function bfs(i, j, visited) {
        const queue = [[i, j]];
        visited[i][j] = true;
        let cnt = 0;

        while (queue.length > 0) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && (board[nx][ny] === 'P' || board[nx][ny] === 'O')) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    if (board[nx][ny] === 'P') cnt++;
                }
            }
        }

        return cnt;
    }
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const result = bfs(start_x, start_y, visited);
    console.log(result === 0 ? 'TT' : result);
})