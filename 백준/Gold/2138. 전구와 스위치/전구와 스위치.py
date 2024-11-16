import sys

input = sys.stdin.readline

N = int(input())

def reverse(bulbs, count):
    for i in range(1, N - 1):
        if bulbs[i - 1] != target[i - 1]:
            count += 1
            for j in range(i-1, i+2):
                bulbs[j] = not bulbs[j]
    if bulbs[N - 1] != target[N - 1]:
        count += 1
        bulbs[N - 2] = not bulbs[N - 2]
        bulbs[N - 1] = not bulbs[N - 1]
    if bulbs == target:
        return count
    else:
        return -1

off = list(map(bool, map(int, input().rstrip())))

on = off.copy()
on[0] = not on[0]
on[1] = not on[1]

target = list(map(bool, map(int, input().rstrip())))

if off == target:
    print(0)
else:
    count = reverse(off, 0)
    if count != -1:
        print(count)
    else:
        count = reverse(on, 1)
        print(count if count else -1)