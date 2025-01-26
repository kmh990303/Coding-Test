from collections import deque

di = [-1, 0, 1, 0]
dj = [0, 1, 0, -1]

def bfs(len_i, len_j, board, fires, start):
    fire_queue = deque(fires)
    person_queue = deque([(*start, 0)])
    fire_visited = [[False] * len_j for _ in range(len_i)]
    person_visited = [[False] * len_j for _ in range(len_i)]

    for fi, fj in fires:
        fire_visited[fi][fj] = True

    si, sj = start
    person_visited[si][sj] = True

    while person_queue: # 사람 위치가 담겨 있을 때
        fire_size = len(fire_queue) # 매초마다 불을 먼저 이동시키고 이후에 사람 이동 구현
        for _ in range(fire_size): # queue의 요소가 추가되더라도 처음 길이는 변하지 않음
            fi, fj = fire_queue.popleft()
            for k in range(4):
                nfi, nfj = fi + di[k], fj + dj[k]
                if 0 <= nfi < len_i and 0 <= nfj < len_j:
                    if not fire_visited[nfi][nfj] and board[nfi][nfj] == '.':
                        fire_visited[nfi][nfj] = True
                        fire_queue.append((nfi, nfj))
        person_size = len(person_queue)
        for _ in range(person_size):
            pi, pj, dist = person_queue.popleft()

            if pi == 0 or pi == len_i - 1 or pj == 0 or pj == len_j - 1:
                return dist + 1

            for k in range(4):
                npi, npj = pi + di[k], pj + dj[k]
                if 0 <= npi < len_i and 0 <= npj < len_j:
                    if not person_visited[npi][npj] and board[npi][npj] == '.':
                        if not fire_visited[npi][npj]:
                            person_visited[npi][npj] = True
                            person_queue.append((npi, npj, dist + 1))
    return "IMPOSSIBLE"


# 입력
t = int(input())

for _ in range(t):
    len_j, len_i = map(int, input().split())
    board = [list(input().strip()) for _ in range(len_i)]

    fires = []
    start = None

    for i in range(len_i):
        for j in range(len_j):
            if board[i][j] == '*':
                fires.append((i, j))
            elif board[i][j] == '@':
                start = (i, j)

    result = bfs(len_i, len_j, board, fires, start)
    print(result)