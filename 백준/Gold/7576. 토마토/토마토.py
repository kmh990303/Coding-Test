import sys
from collections import deque

input = sys.stdin.readline

m,n = map(int, input().split()) # m, n 입력

board = [list(map(int, input().split())) for _ in range(n)] # 토마토판 초기화

direction = [(-1, 0), (0, 1), (1, 0), (0, -1)] # 북 동 남 서 이동 좌표

visited = [[False] * m for _ in range(n)] # 방문 배열 초기화
queue = deque([])

for i in range(n):
    for j in range(m):
        if board[i][j] == 1:
            visited[i][j] = True # 익은 토마토 좌표 방문 처리
            queue.append((i, j)) # 익은 토마토 좌표 저장

def bfs(board, visited, queue):
    cnt = 0 # 최소 토마토가 모두 다 익는 일수 계산

    while True:
        subqueue = []
        while queue:
            current_i, current_j = queue.popleft()
            for di, dj in direction:
                ni, nj = current_i + di, current_j + dj
                if 0 <= ni < n and 0 <= nj < m and not visited[ni][nj] and board[ni][nj] == 0:
                    board[ni][nj] = 1
                    visited[ni][nj] = True
                    subqueue.append((ni, nj))

        if not subqueue:
            return cnt # 더 이상 갱신할 좌표가 없으면 함수 종료

        cnt += 1  # 일수 + 1 시킴

        for i,j in subqueue: # 익지 않은 토마토 좌표를 큐에 삽입
            queue.append((i, j))

def check_allchange(board, n, m):
    for i in range(n):
        for j in range(m):
            if board[i][j] == 0:
                return False
    return True

result = bfs(board, visited, queue)

if check_allchange(board, n, m):
    print(result)
else:
    print(-1)