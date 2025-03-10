import sys

input = sys.stdin.readline

n = int(input())

lines = []
result = 0

for _ in range(n):
    start, end = map(int, input().split())
    lines.append((start, end))

lines.sort()

standard = lines[0][1]
part_start = lines[0][0]

for idx in range(1, n):
    if standard >= lines[idx][0]:
        standard = max(standard, lines[idx][1])
    else:
        result += (standard - part_start)
        part_start = lines[idx][0]
        standard = lines[idx][1]

result += (standard - part_start)

print(result)