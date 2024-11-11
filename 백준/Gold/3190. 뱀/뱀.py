from collections import deque

n = int(input())
appleN = int(input())

# 보드 초기화
board = [[0] * n for _ in range(n)]

# 사과 위치 -1로 표시
for _ in range(appleN):
    x, y = map(int, input().split())
    board[x - 1][y - 1] = -1

# 방향 전환 정보 저장
changeCnt = int(input())
change = []
for _ in range(changeCnt):
    t, c = input().split()
    change.append((int(t), c))

# 초기 변수 설정
time = 0
changeIdx = 0
directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # 동, 남, 서, 북
current_direction = 0
snake = deque([(0, 0)])  # 뱀의 위치를 큐로 관리 (머리와 꼬리)
board[0][0] = 1  # 뱀의 시작 위치 표시

# 게임 루프
while True:
    time += 1
    # 현재 방향으로 이동
    head_x, head_y = snake[-1]  # 뱀의 머리 위치
    dx, dy = directions[current_direction]
    nx, ny = head_x + dx, head_y + dy

    # 게임 종료 조건: 벽 또는 자기 자신과 충돌
    if nx < 0 or nx >= n or ny < 0 or ny >= n or board[nx][ny] == 1:
        print(time)
        break

    # 뱀 이동: 머리를 새 위치에 추가
    if board[nx][ny] == -1:  # 사과가 있는 경우
        board[nx][ny] = 1
        snake.append((nx, ny))  # 머리 위치만 갱신, 꼬리는 그대로
    else:  # 사과가 없는 경우
        board[nx][ny] = 1
        snake.append((nx, ny))  # 머리 추가
        tail_x, tail_y = snake.popleft()  # 꼬리 제거
        board[tail_x][tail_y] = 0  # 꼬리 자리에 있는 값을 0으로 변경

    # 방향 전환 시점 체크
    if changeIdx < changeCnt and time == change[changeIdx][0]:
        if change[changeIdx][1] == 'D':  # 오른쪽 회전
            current_direction = (current_direction + 1) % 4
        else:  # 왼쪽 회전
            current_direction = (current_direction - 1) % 4
        changeIdx += 1
