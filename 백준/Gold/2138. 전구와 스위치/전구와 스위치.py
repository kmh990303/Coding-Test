import sys

input = sys.stdin.readline

def change(bulbs, count):
    for i in range(1, N - 1):
        if bulbs[i - 1] != target[i - 1]:
            count += 1
            for j in range(i - 1, i + 2):
                bulbs[j] = not bulbs[j]
    if bulbs[N - 1] != target[N - 1]:
        count += 1
        for j in range(N - 2, N):
            bulbs[j] = not bulbs[j]

    if bulbs == target:
        return count
    else:
        return -1

N = int(input())

off = list(map(bool, list(map(int, input().rstrip()))))
on = off.copy()
on[0] = not on[0]
on[1] = not on[1]

target = list(map(bool, list(map(int, input().rstrip()))))

if off == target:
    print(0)
else:
    count = change(off, 0)
    if count != -1:
        print(count)
    else:
        count = change(on, 1)
        print(count if count else -1)