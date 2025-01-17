import sys
from collections import deque

input = sys.stdin.readline

di = [-2, -1, 1, 2, 2, 1, -1, -2]
dj = [1, 2, 2, 1, -1, -2, -2, -1]

def bfs(start_i, start_j, n, target_i, target_j):
    if start_i == target_i and start_j == target_j:
        print(0)
        return

    queue = deque([(start_i, start_j, 0)])
    visited = [[False] * n for _ in range(n)]
    visited[start_i][start_j] = True

    while queue:
        i, j, dist = queue.popleft()

        if i == target_i and j == target_j:
            print(dist)
            return

        for k in range(8):
            ni, nj = i + di[k], j + dj[k]
            if 0 <= ni < n and 0 <= nj < n:
                if not visited[ni][nj]:
                    if ni == target_i and nj == target_j:
                        print(dist + 1)
                        return
                    visited[ni][nj] = True
                    queue.append((ni, nj, dist + 1))
    print(-1)

t = int(input().strip())

for _ in range(t):
    n = int(input().strip())
    start_i, start_j = map(int, input().split())
    target_i, target_j = map(int, input().split())
    bfs(start_i, start_j, n, target_i, target_j)