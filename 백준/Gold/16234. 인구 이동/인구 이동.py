import sys
from collections import deque
import math

input = sys.stdin.readline

n,l,r = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(n)]

directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]   # 북동남서

def bfs(i,j,visited):
    q = deque([(i, j)])
    visited[i][j]=True
    countries = [(i, j)] # 인구 이동을 할 나라들

    while q:
        current_i, current_j = q.popleft()
        for di, dj in directions:
            ni = current_i + di
            nj = current_j + dj

            if 0 <= ni < n and 0 <= nj < n and not visited[ni][nj]:
                if l <= abs(board[current_i][current_j] - board[ni][nj]) <= r:
                    q.append((ni, nj))
                    visited[ni][nj] = True
                    countries.append((ni, nj))

    if len(countries) == 1: # 인구 이동이 없음
        return False

    total_population = sum(board[i][j] for i,j in countries)
    avg_population = total_population // len(countries) # 버림은 걍 몫 구하는 걸로 대체 가능

    for i,j in countries:
        board[i][j] = avg_population

    return True

cnt = 0
while True:
    moved = False
    visited = [[False] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if not visited[i][j]:
                if bfs(i, j, visited):
                    moved = True
    if not moved:
        print(cnt)
        break
    cnt += 1

