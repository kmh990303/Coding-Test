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
]

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const t = Number(input.shift());
    const result = [];

    function bfs(x, y, visited, n, m, board) {
        const queue = [[x, y]];
        visited[x][y] = true;
        
        while (queue.length > 0) {
            const [cx, cy] = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = cx+ dx;
                const ny = cy + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && board[nx][ny] === 1) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    for (let test = 0; test < t; test++) {
        const [m, n, k] = input.shift().split(' ').map(Number);
        const board = Array.from({length: n}, () => Array(m).fill(0));
        let cnt = 0;

        for (let j = 0; j < k; j++) {
            const [y, x] = input.shift().split(' ').map(Number);
            board[x][y] = 1;
        }

        const visited = Array.from({length: n}, () => Array(m).fill(false));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (!visited[i][j] && board[i][j] === 1) {
                    bfs(i, j, visited, n, m, board);
                    cnt++;
                }
            }
        }

        result.push(cnt);
    }

    console.log(result.join('\n'));
})