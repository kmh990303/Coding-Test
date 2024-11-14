from collections import deque

n = int(input())

board = [list(map(int, input().split())) for _ in range(n)]

shark_i, shark_j = 0, 0
shark_size = 2
eat_count = 0

for i in range(n):
    for j in range(n):
        if board[i][j] == 9:
            shark_i, shark_j = i, j
            board[i][j] = 0  # 상어 위치를 빈 칸으로 설정


directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

def bfs(shark_i, shark_j, shark_size):
    queue = deque([(shark_i, shark_j, 0)])
    visited = [[False] * n for _ in range(n)]
    visited[shark_i][shark_j] = True

    fish_list = []

    while queue:
        shark_i, shark_j, dist = queue.popleft()

        for dx, dy in directions:
            nx, ny = shark_i + dx, shark_j + dy
            if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny]:
                visited[nx][ny] = True
                if board[nx][ny] == 0 or board[nx][ny] == shark_size:
                    queue.append((nx, ny, dist + 1))
                elif 0 < board[nx][ny] < shark_size:
                    queue.append((nx, ny, dist + 1))
                    fish_list.append((dist + 1, nx, ny))

    fish_list.sort()
    return fish_list[0] if fish_list else None

time = 0
while True:
    result = bfs(shark_i, shark_j, shark_size)
    if result is None:
        break

    dist, fish_i, fish_j = result
    time += dist

    shark_i, shark_j = fish_i, fish_j
    board[shark_i][shark_j] = 0

    eat_count += 1
    if eat_count == shark_size:
        shark_size += 1
        eat_count = 0
print(time)