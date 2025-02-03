def dfs(start, target, dist):
    global visited, relation
    if start == target:
        return dist
    
    result = -1
    visited[start] = True

    for i in range(1, n + 1):
        if relation[start][i] == 1 and not visited[i]:
            temp = dfs(i, target, dist + 1)
            if temp != -1:
                result = temp
                break

    return result 


n = int(input())

t1, t2 = map(int, input().split())

t = int(input())

relation = [[0] * (n + 1) for _ in range(n + 1)]
visited = [False] * (n + 1)

for _ in range(t):
    parent, child = map(int, input().split())
    relation[parent][child] = 1
    relation[child][parent] = 1
    
answer = dfs(t1, t2, 0)
print(answer)