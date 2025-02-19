from collections import deque

n = int(input())

graph = [[] for _ in range(n + 1)]

for i in range(n - 1):
    v1, v2 = map(int, input().split())
    graph[v1].append(v2)
    graph[v2].append(v1)

visited = [0] * (n + 1)

def bfs(start):
    queue = deque([start])

    while queue:
        vertex = queue.popleft()

        for adj in graph[vertex]:
            if visited[adj] == 0:
                visited[adj] = vertex
                queue.append(adj)

bfs(1)

for parent in visited[2:]:
    print(parent)