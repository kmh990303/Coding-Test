import sys

input = sys.stdin.readline

n, m = map(int, input().split())
a = set(list(map(int, input().split())))
b = set(list(map(int, input().split())))

result = sorted(list(a.difference(b)))
diff_len = len(result)
if diff_len == 0:
    print(0)
else:
    print(diff_len)
    print(*result)