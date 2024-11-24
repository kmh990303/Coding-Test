from collections import deque

def can_reach(start, stores, end):
    points = [start] + stores + [end]
    n = len(points)
    graph = [[] for _ in range(n)]

    # 그래프 생성 : 두 좌표 사이 거리가 1000 이하인 경우 간선 연결
    for i in range(n):
        for j in range(n):
            if i != j:
                x1, y1 = points[i]
                x2, y2 = points[j]
                if abs(x1 - x2) + abs(y1 - y2) <= 1000:
                    graph[i].append(j) # 연결 가능한 정점의 인덱스 저장
    visited = [False] * n
    q = deque([0])
    visited[0] = True

    while q:
        current = q.popleft()
        if current == n - 1:
            return 'happy'

        for neighbor in graph[current]:
            if not visited[neighbor]:
                visited[neighbor] = True
                q.append(neighbor)
    return "sad"

t = int(input())
for _ in range(t):
    n = int(input())
    start = tuple(map(int, input().split()))
    stores = [tuple(map(int, input().split())) for _ in range(n)]
    end = tuple(map(int, input().split()))

    print(can_reach(start, stores, end))