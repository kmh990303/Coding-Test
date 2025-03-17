# 15903번 카드 합체 놀이

import sys
input = sys.stdin.readline

n, m = map(int, input().split())
card = list(map(int, input().split()))

for _ in range(m):
    card.sort()
    total = card[0] + card[1]
    card[0] = total
    card[1] = total

print(sum(card))