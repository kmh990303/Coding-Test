// 문제 설명
// 계속되는 폭우로 일부 지역이 물에 잠겼습니다. 물에 잠기지 않은 지역을 통해 학교를 가려고 합니다. 집에서 학교까지 가는 길은 m x n 크기의 격자모양으로 나타낼 수 있습니다.

// 아래 그림은 m = 4, n = 3 인 경우입니다.

// image0.png

// 가장 왼쪽 위, 즉 집이 있는 곳의 좌표는 (1, 1)로 나타내고 가장 오른쪽 아래, 즉 학교가 있는 곳의 좌표는 (m, n)으로 나타냅니다.

// 격자의 크기 m, n과 물이 잠긴 지역의 좌표를 담은 2차원 배열 puddles이 매개변수로 주어집니다. 오른쪽과 아래쪽으로만 움직여 집에서 학교까지 갈 수 있는 최단경로의 개수를 1,000,000,007로 나눈 나머지를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 격자의 크기 m, n은 1 이상 100 이하인 자연수입니다.
// m과 n이 모두 1인 경우는 입력으로 주어지지 않습니다.
// 물에 잠긴 지역은 0개 이상 10개 이하입니다.
// 집과 학교가 물에 잠긴 경우는 입력으로 주어지지 않습니다.

// function solution(m, n, puddles) {
//     var answer = 0;
//     let visited = Array.from({length: n}, () => Array(m).fill(false));
//     let queue;
//     let result = [];
//     // 인덱스 개념으로 들어감

//     const directions = [[1, 0], [0, 1]] // 오른쪽과 아랫쪽으로 이동할 때, 더하는 좌표

//     puddles.forEach(([i, j]) => {
//         visited[i - 1][j - 1] = true;
//     }) //웅덩이 구역은 미리 방문 처리

//     queue = [[0, 0, 0]]; //x 인덱스, y 인덱스 , cnt 값 제공
//     visited[0][0] = true; // 시작점 관련 초기화

//     function BFS() {
//         while (queue.length > 0) {
//             let [i, j, cnt] = queue.shift();

//             if (i === m - 1 && j === n - 1) {
//                 result.push(cnt - 1); //거쳐온 영역만 개수를 셈
//                 return;
//             }

//             let newCnt = cnt + 1;

//             for (let index = 0; index < directions.length; index++) {
//                 const candidateI = i + directions[index][0];
//                 const candidateJ = j + directions[index][1]; //좌표가 범위를 벗어나는지 확인해야 함

//                 if (candidateI < m && candidateJ < n) {
//                     if (!visited[candidateI, candidateJ]) {
//                         visited[candidateI][candidateJ] = true;
//                         queue.push([candidateI, candidateJ, newCnt]);
//                     }
//                 }
//             }

//         }
//     }

//     BFS();

//     const minDist = Math.min(...result);
//     const minValN = result.filter((val) => val === minDist).length;
//     answer = minValN % 1000000007;


//     return answer;
// }


// 모든 최단 경로를 찾기 위해서는 DP로 접근해야 함
// 수의 범위가 커져 오버플로우 현상이 발생할 수 있기에 미리 나눠서 계산하면, 복잡한 계산을 줄일 수 있음

function solution(m, n, puddles) {
    const MOD = 1_000_000_007;
    let dp = Array.from({ length: n }, () => Array(m).fill(0));

    dp[0][0] = 1; // 출발점

    // 웅덩이 위치를 -1로 표시 (처음부터 0으로 표시해도 무방)
    puddles.forEach(([x, y]) => {
        dp[y - 1][x - 1] = -1;
    });

    // 동적 계획법을 통해 최단 경로 계산
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dp[i][j] === -1) {
                // dp[i][j] = 0; // 웅덩이인 경우 경로를 0으로 설정
                continue;
            }

            // 위쪽에서 오는 경로 (i > 0인 경우)
            if (i > 0 && dp[i - 1][j] !== -1) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD;
            }

            // 왼쪽에서 오는 경로 (j > 0인 경우)
            if (j > 0 && dp[i][j - 1] !== -1) {
                dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;
            }
        }
    }

    return dp[n - 1][m - 1]; // 학교에 도착하는 경로 수
}


// 복습

function solution(m, n, puddles) {
    const MOD = 1_000_000_007;

    const dp = Array.from({ length: n }, () => Array(m).fill(0));

    dp[0][0] = 1;

    puddles.forEach(([x, y]) => {
        dp[y - 1][x - 1] = -1;
    })

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dp[i][j] === -1) continue;

            if (i > 0 && dp[i - 1][j] !== -1) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD;
            }

            if (j > 0 && dp[i][j - 1] !== -1) {
                dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;
            }
        }
    }

    return dp[n - 1][m - 1];
}