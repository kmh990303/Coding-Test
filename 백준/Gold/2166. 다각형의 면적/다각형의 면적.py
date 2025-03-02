def shoelace(arr, n):
    area = 0

    for i in range(n):
        x1, y1 = arr[i]
        x2, y2 = arr[(i + 1) % n]

        area += (x1 * y2) - (x2 * y1)

    return abs(area) / 2

n = int(input())
arr = []

for _ in range(n):
    x, y = map(int, input().split())
    arr.append((x, y))

print(round(shoelace(arr, n), 2))