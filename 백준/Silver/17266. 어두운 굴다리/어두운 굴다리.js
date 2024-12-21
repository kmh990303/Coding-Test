const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]); // 길의 길이
    const m = Number(input[1]); // 가로등의 개수
    const locations = input[2].split(' ').map(Number);

    let left = 1; // 최소 높이
    let right = n; // 최대 높이
    let answer = n;

    const canCover = (height) => {
        let currentEnd = 0; // 현재 밝힌 범위의 끝

        for (const location of locations) {
            if (location - height > currentEnd) {
                // 현재 밝히지 못한 구간이 있다면 높이가 부족
                return false;
            }
            currentEnd = location + height; // 현재 가로등으로 커버되는 범위
        }

        return currentEnd >= n; // 끝까지 밝히는지 확인
    };

    // 이진 탐색
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canCover(mid)) {
            answer = mid; // 커버 가능하면 높이를 줄여본다
            right = mid - 1;
        } else {
            left = mid + 1; // 커버 불가능하면 높이를 늘린다
        }
    }

    console.log(answer);
});
