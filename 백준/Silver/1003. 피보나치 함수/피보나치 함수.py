# zero_cnt = 0  # 1003번 재귀롤 피보나치 구현 시 중복 호출이 많음
# one_cnt = 0
#
# def fibo(n):
#     global zero_cnt
#     global one_cnt
#
#     if n == 0:
#         zero_cnt += 1
#         return 0
#     if n == 1:
#         one_cnt += 1
#         return 1
#     return fibo(n - 1) + fibo(n - 2)
#
#
# def fibo_test(n):
#     global zero_cnt
#     global one_cnt
#
#     zero_cnt = 0
#     one_cnt = 0
#
#     fibo(n)
#
#     return [zero_cnt, one_cnt]
#
# t = int(input())
#
# for _ in range(t):
#     n = int(input())
#     zero, one = fibo_test(n)
#     print(zero, one)


def fibonacci_count(n):
    # DP 배열 초기화: [0 호출 횟수, 1 호출 횟수]
    dp = [[0, 0] for _ in range(n + 1)]
    dp[0] = [1, 0]
    if n >= 1:
        dp[1] = [0, 1]
    
    # DP 점화식 계산 => 특정 n의 0, 1 호출 횟수는  n-1 과 n-2의  0,1 호출 횟수를 더한 것과 같음
    for i in range(2, n + 1):
        dp[i][0] = dp[i - 1][0] + dp[i - 2][0]
        dp[i][1] = dp[i - 1][1] + dp[i - 2][1]
    
    return dp[n]

t = int(input())
for _ in range(t):
    n = int(input())
    result = fibonacci_count(n)
    print(result[0], result[1])
