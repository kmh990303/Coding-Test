const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, l] = input[0].split(' ').map(Number);
    const board = [];
    let result = 0;

    for (let i = 1; i <= n; i++) {
        board.push(input[i].split(' ').map(Number));
    }

    function canBuild(line) {
        const used = Array(n).fill(false);

        for (let i = 0; i < n - 1; i++) {
            if (line[i] === line[i + 1]) continue; // 높이가 같으면 넘어감

            const diff = line[i + 1] - line[i];
            if (Math.abs(diff) > 1) return false; // 높이 차이가 2 이상이면 불가능

            // 오르막길 경사로 설치
            if (diff === 1) {
                for (let j = i; j > i - l; j--) {
                    if (j < 0 || line[j] !== line[i] || used[j]) return false;
                    used[j] = true;
                }
            }

            // 내리막길 경사로 설치
            if (diff === -1) {
                for (let j = i + 1; j <= i + l; j++) {
                    if (j >= n || line[j] !== line[i + 1] || used[j]) return false;
                    used[j] = true;
                }
            }
        }

        return true;
    }

    // 가로 방향 검사
    for (let i = 0; i < n; i++) {
        if (canBuild(board[i])) result++;
    }

    // 세로 방향 검사
    for (let i = 0; i < n; i++) {
        const column = board.map((row) => row[i]);
        if (canBuild(column)) result++;
    }

    console.log(result);
});
