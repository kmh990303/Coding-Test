# 이전 상태를 저장해놓고 그거 기준으로 인접해있는 0의 개수만큼 빙산 높이 차감
import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(n)]

# 최초 빙산 위치 지정
ice_pos = [(i, j) for i in range(n) for j in range(m) if board[i][j] > 0]

# 북동남서
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]

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
    # 빙산 덩어리 개수 파악
    start_x, start_y = start
    visited[start_x][start_y] = True
    queue = deque([(start_x, start_y)])

    while queue:
        cur_i, cur_j = queue.popleft()

        for k in range(4):
            ni, nj = cur_i + dx[k], cur_j + dy[k]
            if 0 <= ni < n and 0 <= nj < m:
                if not visited[ni][nj] and board[ni][nj] > 0:
                    visited[ni][nj] = True
                    queue.append((ni, nj))


time = 0

while True:
    split_cnt = 0
    visited = [[False] * m for _ in range(n)]

    for x, y in ice_pos:
        if not visited[x][y] and board[x][y] > 0:
            bfs((x, y), visited)
            split_cnt += 1
        if split_cnt >= 2:
            break

    if split_cnt >= 2:
        print(time)
        break
    
    if not ice_pos:
        print(0)
        break

    board, ice_pos = change_ice()
    time += 1
