def lcs(st1, st2):
    n = len(st1)
    m = len(st2)

    dp = [[0] * (m + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if st1[i - 1] == st2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[n][m]

st1 = input().strip()
st2 = input().strip()

print(lcs(st1, st2))