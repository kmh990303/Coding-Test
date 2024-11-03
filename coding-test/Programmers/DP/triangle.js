function solution(triangle) {
    const n = triangle.length;
    const dp = Array.from({ length: n }, (_, i) => Array(triangle[i].length).fill(0));

    dp[0][0] = triangle[0][0];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            const subSum = dp[i][j];

            dp[i + 1][j] = Math.max(dp[i + 1][j], subSum + triangle[i + 1][j]);
            dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], subSum + triangle[i + 1][j + 1])
        }
    }

    return Math.max(...dp[n - 1]);
}