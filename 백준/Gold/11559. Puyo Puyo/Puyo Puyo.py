from collections import deque

ROW = 12
COLUMN = 6
answer = 0  # 연쇄 횟수

# 북동남서 방향 (상우하좌)
di = [-1, 0, 1, 0]
dj = [0, 1, 0, -1]

# 뿌요판 입력 받기
board = [list(input().strip()) for _ in range(ROW)]

# BFS 함수: 연결된 같은 색 뿌요 찾기
def bfs(start_i, start_j, color):
    queue = deque([(start_i, start_j)])
    visited = [[False] * COLUMN for _ in range(ROW)]
    visited[start_i][start_j] = True
    connected = [(start_i, start_j)]

    while queue:
        cur_i, cur_j = queue.popleft()

        for k in range(4):
            ni, nj = cur_i + di[k], cur_j + dj[k]

            if 0 <= ni < ROW and 0 <= nj < COLUMN:
                if not visited[ni][nj] and board[ni][nj] == color:
                    visited[ni][nj] = True
                    queue.append((ni, nj))
                    connected.append((ni, nj))

    # 연결된 뿌요가 4개 이상이면 터뜨리기
    if len(connected) >= 4:
        for i, j in connected:
            board[i][j] = '.'
        return True
    return False

# 뿌요 정렬 함수: 뿌요들이 아래로 떨어지도록 중력 적용
def align_puyo():
    for col in range(COLUMN):
        new_col = []

        # 해당 열에서 남은 뿌요만 모으기
        for row in range(ROW):
            if board[row][col] != '.':
                new_col.append(board[row][col])

        # 아래서부터 채우기
        for row in range(ROW-1, -1, -1):
            if new_col:
                board[row][col] = new_col.pop()
            else:
                board[row][col] = '.'

# 게임 진행: 연쇄가 발생하지 않을 때까지 반복
while True:
    is_chain = False

    # 모든 칸에 대해 BFS 수행
    for i in range(ROW):
        for j in range(COLUMN):
            if board[i][j] != '.':
                if bfs(i, j, board[i][j]):
                    is_chain = True

    # 연쇄가 발생하면 뿌요 정렬
    if is_chain:
        align_puyo()
        answer += 1  # 연쇄 횟수 증가
    else:
        break  # 더 이상 연쇄가 없으면 종료

# 연쇄 횟수 출력
print(answer)
