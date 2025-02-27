import sys

input = sys.stdin.readline

def getWayNum(target):
    dp = [1] * (target + 1) # 1로만 만드는 경우의 수를 초기값으로 설정 // 모든 값 모두 1로만 만들 수 있음

    for i in range(2, target + 1):
        dp[i] += dp[i - 2]

    for i in range(3, target + 1):
        dp[i] += dp[i - 3]

    return dp[target]

t = int(input())

for _ in range(t):
    target = int(input())
    print(getWayNum(target))