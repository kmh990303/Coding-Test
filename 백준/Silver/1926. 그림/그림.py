from collections import deque

n, m = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(n)]

di = [0, 1, 0, -1]  # 남동서북
dj = [1, 0, -1, 0]

cnt = 0
result = 0

def bfs(start, visited, width):
    global board, result
    i, j = start
    queue = deque([(i, j)])
    visited[i][j] = True

    while queue:
        cur_i, cur_j = queue.popleft()
        width += 1

        for k in range(4):
            ni, nj = cur_i+di[k], cur_j+dj[k]
            if 0 <= ni < n and 0 <= nj < m:
                if board[ni][nj] == 1 and not visited[ni][nj]:
                    visited[ni][nj] = True
                    queue.append((ni, nj))
    if result < width:
        result = width

visited = [[False] * m for _ in range(n)]

for i in range(n):
    for j in range(m):
        if not visited[i][j] and board[i][j] == 1:
            cnt += 1
            bfs((i, j), visited, 0)


print(cnt)
print(result)