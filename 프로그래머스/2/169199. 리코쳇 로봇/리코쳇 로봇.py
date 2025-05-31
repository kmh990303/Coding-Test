from collections import deque

def solution(board):
    di = [-1, 0, 1, 0]
    dj = [0, 1, 0, -1]
    
    n = len(board)
    m = len(board[0])
    
    # R, G 위치 찾아서 저장
    for i in range(n):
        for j in range(m):
            if board[i][j] == 'G':
                target = (i, j)
            if board[i][j] == 'R':
                start = (i, j)

    
    start_i, start_j = start
    queue = deque([(start_i, start_j, 0)])
    visited = [[False] * m for _ in range(n)]
    visited[start_i][start_j] = True
    
    while queue:
        cur_i, cur_j, cur_move = queue.popleft()
        
        if (cur_i, cur_j) == target:
            return cur_move
        
        for k in range(4):
            ni, nj = cur_i, cur_j
            
            while True:
                next_i, next_j = ni + di[k], nj + dj[k]
                
                if 0 <= next_i < n and 0 <= next_j < m and board[next_i][next_j] != 'D':
                    ni, nj = next_i, next_j
                else:
                    break
            
            if not visited[ni][nj]:
                visited[ni][nj] = True
                queue.append((ni, nj, cur_move + 1))
    return -1
            
    
    