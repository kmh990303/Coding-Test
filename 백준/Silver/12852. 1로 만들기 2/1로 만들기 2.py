n = int(input())

dp = [0] * 10000001

for i in range(2, n + 1):
    dp[i] = dp[i - 1] + 1

    if i % 2 == 0:
        dp[i] = min(dp[i], dp[i // 2] + 1)

    if i % 3 == 0:
        dp[i] = min(dp[i], dp[i // 3] + 1)

print(dp[n])

res = [n]
now = n
temp = dp[n] - 1

for i in range(n, 0, -1):
    if dp[i] == temp and (now == i+1 or now == i*2 or now == i*3):
        now = i
        res.append(i)
        temp -= 1
print(*res)