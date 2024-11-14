n = int(input())
MOD = 1000000
PISANO_PERIOD = 1500000

n = n % PISANO_PERIOD

dp = [0, 1]

for i in range(2, n+1):
    dp.append((dp[i - 1] + dp[i - 2]) % MOD)

print(dp[n])