import sys
input = sys.stdin.readline
from collections import defaultdict

m, n = map(int, input().split())
S = defaultdict(int)

for _ in range(m):
    planet = list(map(int, input().split()))
    sorted_planet = sorted(list(set(planet)))
    ranked = {sorted_planet[i]: i for i in range(len(sorted_planet))}
    vector = tuple([ranked[i] for i in planet])
    S[vector] += 1

ans = 0

for i in S.values():
    ans += (i * (i - 1)) // 2

print(ans)