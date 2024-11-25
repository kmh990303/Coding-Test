import sys
input = sys.stdin.readline

n = int(input())
building = [int(input()) for _ in range(n)]

stack = []
result = 0

for i in range(n):
    while stack and stack[-1] <= building[i]:
        stack.pop()

    result += len(stack)

    stack.append(building[i])

print(result)