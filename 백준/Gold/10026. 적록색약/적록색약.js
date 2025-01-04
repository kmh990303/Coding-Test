const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
]
const board = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);
    for (let i = 1; i <= n; i++) {
        board.push(input[i].split(''));
    }

    function bfs(i, j, type, visited) {
        const queue = [[i, j]];
        visited[i][j] = true;
        const standard = board[i][j];

        while (queue.length > 0) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
                    if (type === 0) {
                        if (board[nx][ny] === standard) {
                            visited[nx][ny] = true;
                            queue.push([nx, ny]);
                        }
                    } else {
                        if (standard === 'B') {
                            if (board[nx][ny] === 'B') {
                                visited[nx][ny] = true;
                                queue.push([nx, ny]);
                            }
                        } else {
                            if (board[nx][ny] === 'R' || board[nx][ny] === 'G') {
                                visited[nx][ny] = true;
                                queue.push([nx, ny]);
                            }
                        }
                    }
                }
            }
        }
        return 1;
    }
    const result = [];

    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                cnt += bfs(i, j, 0, visited);
            }
        }
    }
    result.push(cnt);

    const visited2 = Array.from({ length: n }, () => Array(n).fill(false));
    let cnt2 = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited2[i][j]) {
                cnt2 += bfs(i, j, 1, visited2);
            }
        }
    }
    result.push(cnt2);

    console.log(result.join(' '));
})