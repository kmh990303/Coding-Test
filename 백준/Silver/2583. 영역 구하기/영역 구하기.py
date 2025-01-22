from collections import deque

m, n, k = map(int, input().split())
board = [[0] * n for _ in range(m)]

def bfs(i, j):
    q = deque()
    q.append((i, j))
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    cnt = 1

    while q:
        y, x = q.popleft()
        for k in range(4):
            ny, nx = y + dy[k], x + dx[k]
            if 0 <= ny < m and 0 <= nx < n and board[ny][nx] == 0:
                board[ny][nx] = 1
                q.append((ny, nx))
                cnt += 1
    return cnt

for _ in range(k):
    x1, y1, x2, y2 = map(int, input().split())
    for i in range(y1, y2):
        for j in range(x1, x2):
            board[i][j] += 1
result = []

for i in range(m):
    for j in range(n):
        if board[i][j] == 0:
            board[i][j] += 1
            result.append(bfs(i, j))
print(len(result))
print(*sorted(result))