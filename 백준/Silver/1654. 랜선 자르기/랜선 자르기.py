import sys

input = sys.stdin.readline

k, n = map(int, input().split())

lines = []

for _ in range(k):
    lines.append(int(input()))

start = 1
end = max(lines)
answer = 0

while start <= end:
    mid = (start + end) // 2
    count = sum(lines[i] // mid for i in range(k))

    if count >= n:
        answer = mid
        start = mid + 1

    else:
        end = mid - 1

print(answer)
