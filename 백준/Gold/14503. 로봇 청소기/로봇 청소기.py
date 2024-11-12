import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())

start_x, start_y, currentDirection = map(int, input().split())

directions = [(-1, 0), (0, 1), (1, 0), (0, -1)] # 북동남서 순

board = [list(map(int, input().split())) for _ in range(n)]

cleanCnt = 0


def bfs(x, y, direction):
    global cleanCnt

    queue = deque([(x, y, direction)])

    while queue:
        x, y, direction = queue.popleft()
        if board[x][y] == 0:
            board[x][y] = 2 #청소 처리
            cleanCnt += 1 # 청소한 칸의 개수 세기

        # 현재 칸의 주변 4칸 중 청소 되지 않은 빈칸 찾기
        found_cleanable = False

        for _ in range(4):
            direction = (direction - 1) % 4
            nx, ny = x + directions[direction][0], y + directions[direction][1]
            
            if 0 <= nx < n and 0 <= ny < m and board[nx][ny] == 0:
                queue.append((nx, ny, direction))
                found_cleanable = True
                break

        if not found_cleanable:
            backDirection = (direction + 2) % 4
            bx, by = x + directions[backDirection][0], y + directions[backDirection][1]
            
            if 0 <= bx < n and 0 <= by < m and board[bx][by] != 1:
                queue.append((bx, by, direction))
            else:
                print(cleanCnt)
                return
                

bfs(start_x, start_y, currentDirection)
