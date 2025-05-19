import sys
from collections import deque

input = sys.stdin.readline

# 북동남서 위아래
dx = [0, 1, 0, -1, 0, 0]
dy = [-1, 0, 1, 0, 0, 0]
dz = [0, 0, 0, 0, -1, 1]

def bfs(start, end, visited):
    start_i, start_j, start_k = start
    end_i, end_j, end_k = end
    queue = deque([(start_i, start_j, start_k, 0)])
    visited[start_i][start_j][start_k] = True

    while queue:
        cur_i, cur_j, cur_k, time = queue.popleft()
        if cur_i == end_i and cur_j == end_j and cur_k == end_k:
            return time

        for idx in range(6):
            ni, nj, nk = cur_i + dx[idx], cur_j + dy[idx], cur_k + dz[idx]
            if 0 <= ni < L and 0 <= nj < R and 0 <= nk < C:
                if not visited[ni][nj][nk] and board[ni][nj][nk] != '#':
                    visited[ni][nj][nk] = True
                    queue.append((ni, nj, nk, time + 1))
    return -1


while True:
    L,R,C = map(int, input().split())
    if L == 0 and R == 0 and C == 0:
        break

    board = []
    for i in range(L):
        part_board = []
        for j in range(R):
            row = list(input().strip())
            part_board.append(row)
            if 'S' in row:
                S = (i, j, row.index('S'))
            if 'E' in row:
                E = (i, j, row.index('E'))
        
        board.append(part_board)
        input() # 빈줄 처리

    visited = [[[False for _ in range(C)] for _ in range(R)] for _ in range(L)]
    result = bfs(S, E, visited)

    if result != -1:
        print(f"Escaped in {result} minute(s).")
    else:
        print("Trapped!")
