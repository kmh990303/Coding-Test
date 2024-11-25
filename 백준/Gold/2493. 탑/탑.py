import sys

input = sys.stdin.readline

n = int(input())
tower = list(map(int, input().split()))

stack = []
result = [0] * n

for i in range(n):
    while stack and stack[-1][1] < tower[i]:
        stack.pop()

    if stack:
        result[i] = stack[-1][0] + 1

    stack.append((i, tower[i]))

print(' '.join(map(str, result)))