import sys
import heapq

input = sys.stdin.readline
INF = float('inf')

n = int(input())
m = int(input())

graph = { i :[] for i in range(1, n + 1)}

for _ in range(m):
    v1, v2, w = map(int, input().split())
    graph[v1].append((v2, w))

def daijkstra(start, target):
    dp = [INF] * (n + 1)
    dp[start] = 0
    pq = [(0, start)]

    while pq:
        cur_dist, cur_node = heapq.heappop(pq)

        if dp[cur_node] < cur_dist:
            continue

        for adj, weight in graph[cur_node]:
            new_dist = cur_dist + weight
            if dp[adj] > new_dist:
                dp[adj] = new_dist
                heapq.heappush(pq, (new_dist, adj))
    return dp[target]

start, target = map(int, input().split())
ans = daijkstra(start, target)
print(ans)