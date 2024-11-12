import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())

start_x, start_y, currentDirection = map(int, input().split())

# 북, 동, 남, 서 순으로 방향 설정
directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]  

# 보드 입력
board = [list(map(int, input().split())) for _ in range(n)]

# 청소한 칸의 개수
cleanCnt = 0

def bfs(x, y, direction):
    global cleanCnt

    # 큐에 초기 위치 삽입
    queue = deque([(x, y, direction)])

    while queue:
        x, y, direction = queue.popleft()
        
        # 현재 위치 청소
        if board[x][y] == 0:
            board[x][y] = 2  # 청소된 칸 표시
            cleanCnt += 1

        # 청소되지 않은 빈칸을 찾기 위한 변수
        found_cleanable = False

        # 현재 위치에서 네 방향 확인
        for _ in range(4):
            # 반시계 방향으로 회전
            direction = (direction + 3) % 4
            nx, ny = x + directions[direction][0], y + directions[direction][1]

            # 청소되지 않은 빈칸이 있는 경우
            if 0 <= nx < n and 0 <= ny < m and board[nx][ny] == 0:
                # 큐에 새로운 위치 삽입
                queue.append((nx, ny, direction))
                found_cleanable = True
                break  # 청소 가능한 방향을 찾았으므로 이동

        # 네 방향 모두 청소된 경우 후진
        if not found_cleanable:
            # 후진 위치 계산
            back_direction = (direction + 2) % 4
            bx, by = x + directions[back_direction][0], y + directions[back_direction][1]

            # 후진 가능 여부 체크
            if 0 <= bx < n and 0 <= by < m and board[bx][by] != 1:
                queue.append((bx, by, direction))
            else:
                # 후진도 불가능한 경우
                print(cleanCnt)
                return

bfs(start_x, start_y, currentDirection)
