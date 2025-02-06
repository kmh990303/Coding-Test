import sys

input = sys.stdin.readline

t, w = map(int, input().split())

drops = [int(input().strip()) for _ in range(t)]

dp = [[0] * (w + 1) for _ in range(t + 1)]

for i in range(1, t + 1):
    for j in range(w + 1):
        cur_location = 1 if j % 2 == 0 else 2

        get = 1 if cur_location == drops[i - 1] else 0

        if j == 0:
            dp[i][j] = dp[i - 1][j] + get
        else:
            dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - 1]) + get

print(max(dp[t]))