def dfs(x, y, direction, board, n, dp):
    # 목표 지점에 도달했을 때 1을 반환
    if x == n - 1 and y == n - 1:
        return 1

    # 이미 계산한 결과가 있는지 확인
    if dp[x][y][direction] != -1:
        return dp[x][y][direction]

    result = 0

    # 가로 방향 이동
    if direction == 1:
        if y + 1 < n and board[x][y + 1] == 0:
            result += dfs(x, y + 1, 1, board, n, dp)
        if x + 1 < n and y + 1 < n and board[x + 1][y] == 0 and board[x][y + 1] == 0 and board[x + 1][y + 1] == 0:
            result += dfs(x + 1, y + 1, 3, board, n, dp)

    # 세로 방향 이동
    elif direction == 2:
        if x + 1 < n and board[x + 1][y] == 0:
            result += dfs(x + 1, y, 2, board, n, dp)
        if x + 1 < n and y + 1 < n and board[x + 1][y] == 0 and board[x][y + 1] == 0 and board[x + 1][y + 1] == 0:
            result += dfs(x + 1, y + 1, 3, board, n, dp)

    # 대각 방향 이동
    elif direction == 3:
        if x + 1 < n and y + 1 < n and board[x + 1][y] == 0 and board[x][y + 1] == 0 and board[x + 1][y + 1] == 0:
            result += dfs(x + 1, y + 1, 3, board, n, dp)
        if y + 1 < n and board[x][y + 1] == 0:
            result += dfs(x, y + 1, 1, board, n, dp)
        if x + 1 < n and board[x + 1][y] == 0:
            result += dfs(x + 1, y, 2, board, n, dp)

    # 계산된 결과를 dp 배열에 저장
    dp[x][y][direction] = result
    return result

n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]

# dp 배열을 -1로 초기화 (3차원 배열: (x, y, 방향) 모두 -1로 시작)
dp = [[[-1] * 4 for _ in range(n)] for _ in range(n)]

print(dfs(0, 1, 1, board, n, dp))
