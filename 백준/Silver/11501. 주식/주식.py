t = int(input()) # 백준 11501 => 뒤에서부터 탐색하되 최대 주식 가격으로부터 뺀 값을 더하면 됨

def getMaxValue(n, arr):
    maxValue = 0
    value = 0

    for i in range(n - 1, -1, -1):
        if maxValue < arr[i]:
            maxValue = arr[i]
        else:
            value += (maxValue - arr[i])
    return value

for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))
    result = getMaxValue(n, arr)
    print(result)