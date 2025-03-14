# 1700번 멀티탭 스케줄링

n, k = map(int, input().split())
use = list(map(int, input().split()))

answer = 0
plug = []

for idx in range(k):
    if use[idx] in plug:
        continue
        
    if len(plug) != n:
        plug.append(use[idx])
        continue
    
    priority = []
    
    for p in plug:
        if p in use[idx:]:
            priority.append(use[idx:].index(p))
        else:
            priority.append(101)
    
    target = priority.index(max(priority))
    plug.remove(plug[target])
    plug.append(use[idx])
    answer += 1

print(answer)
