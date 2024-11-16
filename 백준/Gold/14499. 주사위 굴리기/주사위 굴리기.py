# 시뮬레이션

import sys

input = sys.stdin.readline

n, m, ci, cj, com = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(n)]
lst = list(map(int, input().split()))

di, dj = [0, 0, 0, -1, 1], [0, 1, -1, 0, 0]

n1, n2, n3, n4, n5,n6 = 0, 0, 0, 0, 0, 0

anst = []

for dr in lst:
    ni, nj = ci + di[dr], cj + dj[dr]
    if 0 <= ni < n and 0 <= nj < m:
        if dr == 1:
            n1, n3, n4, n6 = n4, n1, n6, n3
        elif dr == 2:
            n1, n3, n4, n6 = n3, n6, n1, n4
        elif dr == 3:
            n1, n2, n5, n6 = n5, n1, n6, n2
        else:
            n1, n2, n5, n6 = n2, n6, n1, n5

        if arr[ni][nj] == 0:
            arr[ni][nj] = n6
        else:
            n6, arr[ni][nj] = arr[ni][nj], 0

        anst.append(n1)
        ci, cj = ni, nj

print(*anst, sep='\n')