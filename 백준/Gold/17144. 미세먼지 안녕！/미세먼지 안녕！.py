import sys

input = sys.stdin.readline

di = [-1, 0, 1, 0] # 북동남서
dj = [0, 1, 0, -1]

# 미세먼지 확산 함수
def spread():
    global board
    tmp_board = [[0] * C for _ in range(R)]

    for i in range(R):
        for j in range(C):
            if board[i][j] > 0:
                spread_amount = board[i][j] // 5
                spread_count = 0

                for d in range(4):
                    ni, nj = i + di[d], j + dj[d]
                    if 0 <= ni < R and 0 <= nj < C and board[ni][nj] != -1:
                        tmp_board[ni][nj] += spread_amount
                        spread_count += 1

                tmp_board[i][j] += board[i][j] - (spread_amount * spread_count)
            elif board[i][j] == -1:
                tmp_board[i][j] = -1

    board = tmp_board

# 공기 청정기 작동 함수
def machine_operate():
    top, bottom = machine

    # 반시계 방향 (위쪽)
    for i in range(top - 1, 0, -1):
        board[i][0] = board[i - 1][0]
    for j in range(C - 1):
        board[0][j] = board[0][j + 1]
    for i in range(top):
        board[i][C - 1] = board[i + 1][C - 1]
    for j in range(C - 1, 1, -1):
        board[top][j] = board[top][j - 1]
    board[top][1] = 0

    # 시계 방향 (아래쪽)
    for i in range(bottom + 1, R - 1):
        board[i][0] = board[i + 1][0]
    for j in range(C - 1):
        board[R - 1][j] = board[R - 1][j + 1]
    for i in range(R - 1, bottom, -1):
        board[i][C - 1] = board[i - 1][C - 1]
    for j in range(C - 1, 1, -1):
        board[bottom][j] = board[bottom][j - 1]
    board[bottom][1] = 0

R, C, T = map(int, input().split())

board = []
machine = []
for i in range(R):
    row = list(map(int, input().split()))
    board.append(row)
    if row[0] == -1:
        machine.append(i)

for _ in range(T):  # t초 동안 반복
    spread()
    machine_operate()

answer = sum(sum(cell for cell in row if cell > 0) for row in board)

print(answer)
