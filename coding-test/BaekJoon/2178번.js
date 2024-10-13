const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

rl.on("line", (line) => {
    input.push(line);
})

rl.on('close', () => {
    const [N, M] = input[0].split(' ').map(Number);
    const maze = input.slice(1).map((line) => line.split('').map(Number));

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const bfs = (x, y) => {
        const queue = [[x, y]];
        visited = Array.from({ length: N }, () => Array(M).fill(false));
        visited[x, y] = true;


        while (queue.length > 0) {
            const [cx, cy] = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nx = cx + dx[i];
                const ny = cy + dy[i];

                if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny] && maze[nx][ny] === 1) {
                    visited[nx][ny] = true;
                    maze[nx][ny] = maze[cx][cy] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    bfs(0, 0);

    console.log(maze[N - 1][M - 1]);
})