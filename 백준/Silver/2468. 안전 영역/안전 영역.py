import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
max_height = 0
board = []

# 영역판 초기화
for i in range(n):
    lst = list(map(int, input().split()))
    if max_height < max(lst):
        max_height = max(lst)
    board.append(lst)

# 인접 영역 탐색 벡터 (북동남서)
di = [-1, 0, 1, 0]
dj = [0, 1, 0, -1]

def bfs(start_i, start_j, visited, standard_rain):
    queue = deque([(start_i, start_j)])
    visited[start_i][start_j] = True

    while queue:
        current_i, current_j = queue.popleft()

        for k in range(4):
            ni, nj = current_i + di[k], current_j + dj[k]
            if 0 <= ni < n and 0 <= nj < n:
                if not visited[ni][nj] and board[ni][nj] > standard_rain:
                    visited[ni][nj] = True
                    queue.append((ni, nj))

max_square = 0
for standard in range(max_height):
    visited = [[False] * n for _ in range(n)]
    safe_areas = 0

    for i in range(n):
        for j in range(n):
            if not visited[i][j] and board[i][j] > standard:
                bfs(i, j, visited, standard)
                safe_areas += 1
    max_square = max(max_square, safe_areas)

print(max_square)