const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
let board = [];

rl.on('line', (line) => {
    if (line == '') rl.close();
    input.push(line);
}).on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    for (let i = 1; i <= n; i++) {
        board.push(input[i].split(' ').map(Number));
    }

    let maxValue = 0;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const dx = [-1, 0, 1, 0] // 북동남서 
    const dy = [0, 1, 0, -1] // 북동남서

    function bfs(i, j, square) {
        const queue = [[i, j]];
        visited[i][j] = true;
        let area = 1;

        while (queue.length > 0) {
            const [x, y] = queue.shift();

            for (let k = 0; k < 4; k++) {
                const nx = x + dx[k];
                const ny = y + dy[k];

                if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[nx][ny] && board[nx][ny] == 1) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    area++;
                }
            }
        }
        maxValue = Math.max(maxValue, area); // 최대 면적 갱신
    }
    let totalCnt = 0; // 총 그림 개수
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && board[i][j] == 1) {
                totalCnt += 1;
                bfs(i, j);
            }
        }
    }

    console.log(totalCnt);
    console.log(maxValue);
})