const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

// 카메라의 가능한 방향 조합
const cameraDirections = {
    1: [[0], [1], [2], [3]],
    2: [[0, 2], [1, 3]],
    3: [[0, 1], [1, 2], [2, 3], [3, 0]],
    4: [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]],
    5: [[0, 1, 2, 3]],
};

// 상, 우, 하, 좌 방향
const directions = [
    [-1, 0], // 상
    [0, 1],  // 우
    [1, 0],  // 하
    [0, -1], // 좌
];

// 카메라의 감시 범위를 처리
function cameraMove(x, y, dir, board) {
    const [dx, dy] = directions[dir];
    let nx = x;
    let ny = y;

    while (true) {
        nx += dx;
        ny += dy;

        if (nx < 0 || ny < 0 || nx >= board.length || ny >= board[0].length || board[nx][ny] === 6) {
            break; // 경계를 벗어나거나 벽을 만나면 종료
        }

        if (board[nx][ny] === 0) {
            board[nx][ny] = -1; // 감시 구역 표시
        }
    }
}

// 백트래킹을 통한 최소 사각지대 계산
function simulate(cameraIndex, board, cameras) {
    if (cameraIndex === cameras.length) {
        // 사각지대 크기 계산
        return board.flat().filter(cell => cell === 0).length;
    }

    let minBlindSpot = Infinity;
    const [x, y, cameraType] = cameras[cameraIndex];

    for (const dirs of cameraDirections[cameraType]) {
        const copiedBoard = board.map(row => [...row]); // 현재 상태 복사

        for (const dir of dirs) {
            cameraMove(x, y, dir, copiedBoard); // 각 방향에 대해 감시 처리
        }

        // 다음 카메라로 이동
        minBlindSpot = Math.min(minBlindSpot, simulate(cameraIndex + 1, copiedBoard, cameras));
    }

    return minBlindSpot;
}

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    const board = [];
    const cameras = [];

    // 입력 데이터를 바탕으로 보드와 카메라 정보 초기화
    for (let i = 1; i <= n; i++) {
        const row = input[i].split(' ').map(Number);
        board.push(row);

        for (let j = 0; j < m; j++) {
            if (row[j] >= 1 && row[j] <= 5) {
                cameras.push([i - 1, j, row[j]]); // 카메라 위치와 타입 저장
            }
        }
    }

    // 백트래킹 시작
    const result = simulate(0, board, cameras);
    console.log(result);
});
