n, k = map(int, input().split())

uses = list(map(int, input().split()))

plug = []
answer = 0

for i in range(k):
    if uses[i] in plug:
        continue

    if len(plug) != n:
        plug.append(uses[i])
        continue

    priority = []

    # 플러그의 자리가 꽉 차있으면서 새로운 제품의 코드를 꽂아야 하는 경우
    for c in plug:
        if c in uses[i:]:
            priority.append(uses[i:].index(c))
        else:
            priority.append(101)

    target = priority.index(max(priority))
    plug.remove(plug[target])
    plug.append(uses[i])
    answer += 1

print(answer)
