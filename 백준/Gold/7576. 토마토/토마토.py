import sys
from collections import deque

input = sys.stdin.readline

m,n = map(int, input().split()) # m, n 입력

board = [list(map(int, input().split())) for _ in range(n)] # 토마토판 초기화

direction = [(-1, 0), (0, 1), (1, 0), (0, -1)] # 북 동 남 서 이동 좌표

queue = deque()

for i in range(n):
    for j in range(m):
        if board[i][j] == 1:
            queue.append((i, j)) # 익은 토마토 좌표 저장

def bfs():
    days = 0

    while queue:
        for _ in range(len(queue)): # 반복문의 인자 값은 고정값
            x, y = queue.popleft()
            
            for dx, dy in direction:
                nx, ny = x + dx, y + dy 
                
                if 0 <= nx < n and 0 <= ny < m and board[nx][ny] == 0:
                    board[nx][ny] = 1
                    queue.append((nx, ny))
        if queue:
            days += 1
    return days

result = bfs()

for row in board: # 특정 배열에서 특정 값의 존재 여부는 in 메서드를 사용하면 됨
    if 0 in row:
        print(-1)
        exit()

print(result)