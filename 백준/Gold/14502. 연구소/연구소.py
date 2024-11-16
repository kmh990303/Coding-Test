import sys

input = sys.stdin.readline

from collections import deque

def bfs(tlst):
    # 3개의 좌표를 1로 저장 -> 벽 막기
    for i,j in tlst:
        arr[i][j]=1

    # 변수 및 큐 생성, 초기화
    q = deque()
    w = [[0]*M for _ in range(N)]
    cnt = CNT-3

    for ti,tj in virus:
        q.append((ti, tj))
        w[ti][tj]=1

    # 큐에 데이터 있는 동안 한 개씩 꺼내서 처리
    while q:
        ci,cj = q.popleft()
        # 네 방향, 범위 내, 미방문, 조건
        for di,dj in ((-1,0),(1,0),(0,-1),(0,1)):
            ni,nj = ci+di, cj+dj
            if 0 <= ni < N and 0 <= nj < M and w[ni][nj]==0 and arr[ni][nj]==0:
                q.append((ni,nj))
                w[ni][nj]=1
                cnt-=1

    # 3개의 좌표를 0으로 저장 -> 벽 해체
    for i,j in tlst:
        arr[i][j]=0
    return cnt

def dfs(n, tlst):
    global ans
    if n==3: # 종료 조건
        ans = max(ans, bfs(tlst)) # bfs 상에서 tlst에 있는 좌표를 벽으로 세우고, 바이러스가 퍼져나갔을 때, 안전구역의 개수 반환
        return
    for j in range(CNT):
        if v[j] == 0:
            v[j] = 1
            dfs(n+1, tlst+[lst[j]])
            v[j] = 0

N,M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

# 빈칸 위치, 바이러스 위치 저장
lst = []
virus = []

for i in range(N):
    for j in range(M):
        if arr[i][j] == 0:
            lst.append((i,j))
        elif arr[i][j] == 2:
            virus.append((i,j))
CNT = len(lst) # 비어 있는 칸의 개수
v = [0] * CNT
ans = 0

dfs(0, [])
print(ans)