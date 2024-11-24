import sys
from collections import  deque
input = sys.stdin.readline

def can_reach(start, stores, end):
    points = [start] + stores + [end]
    n = len(points)
    graph = [[] for _ in range(n)]

    # 인접 정점 연결
    for i in range(n):
        for j in range(n):
            if i != j:
                x1, y1 = points[i]
                x2, y2 = points[j]
                if abs(x1-x2) + abs(y1-y2) <= 1000:
                    graph[i].append(j)
    # BFS 탐색
    visited = [False] * n
    queue = deque([0])
    visited[0] = True

    while queue:
        current = queue.popleft()

        if current == n - 1:
            return 'happy'

        for neighbor in graph[current]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)
    return 'sad'

t = int(input())

for _ in range(t):
    n = int(input())
    start = tuple(map(int, input().split()))
    stores = [tuple(map(int, input().split())) for _ in range(n)]
    end = tuple(map(int, input().split()))
    
    print(can_reach(start, stores, end))