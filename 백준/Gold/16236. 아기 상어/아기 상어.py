import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]

# 아기 상어 초기 위치와 설정
shark_i, shark_j = 0, 0
shark_size = 2
eat_count = 0

# 상어 위치 찾기
for i in range(n):
    for j in range(n):
        if board[i][j] == 9:
            shark_i, shark_j = i, j
            board[i][j] = 0  # 상어 위치를 빈 칸으로 설정

# 방향 정의 (상하좌우)
directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

# BFS 함수 정의
def bfs(shark_i, shark_j, shark_size):
    queue = deque([(shark_i, shark_j, 0)])  # (상어 위치, 거리)
    visited = [[False] * n for _ in range(n)]
    visited[shark_i][shark_j] = True
    fish_list = []

    while queue:
        x, y, dist = queue.popleft()

        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny]:
                visited[nx][ny] = True
                # 빈 칸이거나 상어 크기와 같은 물고기일 때
                if board[nx][ny] == 0 or board[nx][ny] == shark_size:
                    queue.append((nx, ny, dist + 1))
                # 먹을 수 있는 물고기일 때
                elif 0 < board[nx][ny] < shark_size:
                    fish_list.append((dist + 1, nx, ny))
                    queue.append((nx, ny, dist + 1))

    fish_list.sort()
    return fish_list[0] if fish_list else None

# 시뮬레이션 시작
time = 0

while True:
    result = bfs(shark_i, shark_j, shark_size)
    if result is None:  # 더 이상 먹을 물고기가 없으면 종료
        break
    # 거리와 물고기 위치 정보
    dist, fish_i, fish_j = result
    time += dist

    # 상어 위치 이동 및 물고기 먹기
    shark_i, shark_j = fish_i, fish_j
    board[shark_i][shark_j] = 0

    # 먹은 횟수 증가 및 크기 증가 체크
    eat_count += 1
    if eat_count == shark_size:
        shark_size += 1
        eat_count = 0

print(time)
