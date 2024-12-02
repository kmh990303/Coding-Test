from collections import deque

r, c = map(int, input().split())

board = [list(input().strip()) for _ in range(r)]

fire_queue = deque()
jihun_queue = deque()

fire_time = [[-1] * c for _ in range(r)]
jihun_time = [[-1] * c for _ in range(r)]

# 초기 상태 설정
for i in range(r):
    for j in range(c):
        if board[i][j] == 'J':
            jihun_queue.append((i, j))
            jihun_time[i][j] = 0
        elif board[i][j] == 'F':
            fire_queue.append((i, j))
            fire_time[i][j] = 0

direction = [(-1, 0), (0, 1), (1, 0), (0, -1)] # 북 동 남 서

while fire_queue:
    x, y = fire_queue.popleft()
    for dx, dy in direction:
        nx, ny = x + dx, y + dy
        if 0 <= nx < r and 0 <= ny < c and fire_time[nx][ny] == -1 and board[nx][ny] != '#':
            fire_time[nx][ny] = fire_time[x][y] + 1
            fire_queue.append((nx, ny))

while jihun_queue:
    x, y = jihun_queue.popleft()
    for dx, dy in direction:
        nx, ny = x + dx, y + dy
        if 0 <= nx < r and 0 <= ny < c:
            if jihun_time[nx][ny] == -1 and board[nx][ny] != '#':
                if fire_time[nx][ny] == -1 or jihun_time[x][y] + 1 < fire_time[nx][ny]:
                    jihun_time[nx][ny] = jihun_time[x][y] + 1
                    jihun_queue.append((nx, ny))
        else:
            print(jihun_time[x][y] + 1)
            exit()
print('IMPOSSIBLE')