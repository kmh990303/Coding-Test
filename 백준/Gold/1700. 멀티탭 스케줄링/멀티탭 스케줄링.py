n, k = map(int, input().split())
uses = list(map(int, input().split()))

plug = []
answer = 0

for idx in range(k):
    if uses[idx] in plug:
        continue

    if len(plug) != n:
        plug.append(uses[idx])
        continue

    priority = []

    for elem in plug:
        if elem in uses[idx:]:
            priority.append(uses[idx:].index(elem))
        else:
            priority.append(101)

    target = priority.index(max(priority))
    plug.remove(plug[target])
    plug.append(uses[idx])
    answer += 1

print(answer)