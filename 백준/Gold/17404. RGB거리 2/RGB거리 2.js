const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const house = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        house.push(input[i].split(' ').map(Number));
    }

    const INF = 1000 * n; // 매우 큰 값 (불가능한 경우의 초기값)
    let result = INF;

    // 첫 번째 집을 R, G, B로 각각 칠했을 때의 최소 비용을 따로 계산
    for (let firstColor = 0; firstColor < 3; firstColor++) {
        // DP 배열 초기화
        const dp = Array.from({ length: n }, () => [INF, INF, INF]);

        // 첫 번째 집의 색 고정
        dp[0][firstColor] = house[0][firstColor];

        // 나머지 집들의 최소 비용 계산
        for (let i = 1; i < n; i++) {
            dp[i][0] = house[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]); // R로 칠함
            dp[i][1] = house[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]); // G로 칠함
            dp[i][2] = house[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]); // B로 칠함
        }

        // 마지막 집의 색이 첫 번째 집과 다른 경우에만 결과 갱신
        for (let lastColor = 0; lastColor < 3; lastColor++) {
            if (lastColor !== firstColor) {
                result = Math.min(result, dp[n - 1][lastColor]);
            }
        }
    }

    console.log(result);
});
