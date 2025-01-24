import sys
from collections import deque

input = sys.stdin.readline

f, s, g, u, d = map(int, input().split())

def bfs(start):
    queue = deque([(start, 0)])
    visited = [False] * (f + 1)
    visited[start] = True

    while queue:
        stair, current = queue.popleft()

        if stair == g:
            print(current)
            return

        up = stair + u
        down = stair - d

        if 1 <= up <= f and not visited[up]:
            visited[up] = True
            queue.append((up, current + 1))


        if 1 <= down <= f and not visited[down]:
            visited[down] = True
            queue.append((down, current + 1))

    print("use the stairs")
    return

bfs(s)