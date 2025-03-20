def solution(triangle):
    n = len(triangle)
    dp = [[0] * (idx + 1) for idx in range(n)]
    
    dp[0][0] = triangle[0][0]
    
    for i in range(1, n): # 각 라인 별 순회
        line_len = len(triangle[i])
        for j in range(line_len):
            if j == 0:
                dp[i][j] = dp[i - 1][j] + triangle[i][j]
            elif j == line_len - 1:
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
            else:
                dp[i][j] = max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
    
    answer = max(dp[n - 1])
    return answer
        