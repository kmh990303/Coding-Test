import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]

dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]

# 최초 빙산 위치 저장
ice_pos = [(i, j) for i in range(n) for j in range(m) if board[i][j] > 0]

def change_ice():
    new_board = [row[:] for row in board]
    new_ice_pos = []
    for i, j in ice_pos:
        cnt = 0
        for k in range(4):
            ni, nj = i + dx[k], j + dy[k]
            if 0 <= ni < n and 0 <= nj < m and board[ni][nj] == 0:
                cnt += 1
        new_board[i][j] = max(0, board[i][j] - cnt)
        if new_board[i][j] > 0:
            new_ice_pos.append((i, j))
    return new_board, new_ice_pos

def bfs(start, visited):
    q = deque([start])
    visited[start[0]][start[1]] = True
    while q:
        x, y = q.popleft()
        for k in range(4):
            ni, nj = x + dx[k], y + dy[k]
            if 0 <= ni < n and 0 <= nj < m:
                if not visited[ni][nj] and board[ni][nj] > 0:
                    visited[ni][nj] = True
                    q.append((ni, nj))

time = 0

while True:
    visited = [[False] * m for _ in range(n)]
    split = 0

    for x, y in ice_pos:
        if not visited[x][y] and board[x][y] > 0:
            bfs((x, y), visited)
            split += 1
        if split >= 2:
            break

    if split >= 2:
        print(time)
        break
    if not ice_pos:  # 빙산이 다 녹았을 경우
        print(0)
        break

    board, ice_pos = change_ice()
    time += 1
