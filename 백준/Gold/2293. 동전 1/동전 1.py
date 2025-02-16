import sys

input = sys.stdin.readline

n, k = map(int, input().split())

arr = []

for _ in range(n):
    coin = int(input())
    arr.append(coin)

dp = [0] * (k + 1)
dp[0] = 1

for c in arr:
    for i in range(c, k + 1):
        dp[i] += dp[i - c]
print(dp[k])