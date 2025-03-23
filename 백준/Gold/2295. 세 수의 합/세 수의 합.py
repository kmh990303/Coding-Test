import sys  # x + y = z + k 관점으로 생각하기

input = sys.stdin.readline

n = int(input())
A = [int(input()) for _ in range(n)]
A.sort()

sample = set()

for x in A:
    for y in A:
        sample.add(x + y)

def solve():
    for i in range(n - 1, -1, -1):
        for j in range(i + 1):
            if A[i] - A[j] in sample:
                return A[i]

print(solve())