from bisect import bisect_left
import sys

input = sys.stdin.readline

N = int(input())
L = sorted(list(map(int, input().split())))
count = 0

for i in range(N - 2):
    start = i + 1
    end = N - 1

    while start < end:
        if L[start] + L[end] + L[i] > 0:
            end -= 1
        else:
            if L[start] + L[end] + L[i] == 0:
                if L[start] == L[end]:
                    count += end - start
                else:
                    K = bisect_left(L, L[end])
                    count += end - K + 1
            start += 1
print(count)
