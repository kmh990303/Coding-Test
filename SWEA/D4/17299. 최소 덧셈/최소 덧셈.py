def findMin(st):
    stLen = len(st)
    standard = 999999999

    for i in range(1, stLen):
        part1 = int(st[:i])
        part2 = int(st[i:])
        standard = min(standard, part1 + part2)
    return standard

n = int(input())

for i in range(1, n + 1):
    st = input().strip()
    result = findMin(st)
    print(f'#{i} {result}')