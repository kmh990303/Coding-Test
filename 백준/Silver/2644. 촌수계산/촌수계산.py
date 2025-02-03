def dfs(start, target, dist): # start가 시작점, target이 목표 지점
    global relation
    global visited

    if start == target:
        return dist

    visited[start] = True
    result = -1

    for i in range(1, n + 1):
        if relation[start][i] == 1 and not visited[i]:
            temp = dfs(i, target, dist + 1)
            if temp != -1:
                result = temp
                break

    return result



n = int(input())

t1, t2 = map(int, input().split())

relation = [[0] * (n + 1) for _ in range(n + 1)] # 부모 자식의 관계를 저장하는 배열

t = int(input())
visited = [False] * (n + 1)

for _ in range(t):
    parent, child = map(int, input().split())
    relation[parent][child] = 1
    relation[child][parent] = 1

realResult = dfs(t1, t2, 0)

print(realResult)