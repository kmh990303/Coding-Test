from collections import deque

def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True
    
    while queue:
        elem = queue.popleft()
        
        for adj in graph[elem]:
            if not visited[adj]:
                visited[adj] = True
                queue.append(adj)

        


def solution(n, computers):
    graph = {}
    answer = 0
    
    for idx in range(1, n + 1):
        graph[idx] = []
        
    # 그래프 초기화
    for i in range(n):
        for j in range(n):
            if i != j and computers[i][j] == 1:
                if j + 1 not in graph[i + 1]:
                    graph[i + 1].append(j + 1)
                if i + 1 not in graph[j + 1]:
                    graph[j + 1].append(i + 1)
    
    visited = [False] * (n + 1)
        
    for idx in range(1, n + 1):
        if not visited[idx]:
            visited[idx] = True
            bfs(graph, idx, visited)
            answer += 1
    return answer