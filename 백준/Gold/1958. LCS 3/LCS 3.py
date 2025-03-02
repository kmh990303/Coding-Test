def lcs(st1, st2, st3):
    n = len(st1)
    m = len(st2)
    l = len(st3)

    dp = [[[0] * (l + 1) for _ in range(m + 1)] for _ in range(n + 1)]

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            for k in range(1, l + 1):
                if st1[i - 1] == st2[j - 1] and st2[j - 1] == st3[k - 1]:
                    dp[i][j][k] = dp[i - 1][j - 1][k - 1] + 1
                else:
                    dp[i][j][k] = max(dp[i - 1][j][k], dp[i][j - 1][k], dp[i][j][k - 1])
    return dp[n][m][l]

st1 = input().strip()
st2 = input().strip()
st3 = input().strip()

print(lcs(st1, st2, st3))