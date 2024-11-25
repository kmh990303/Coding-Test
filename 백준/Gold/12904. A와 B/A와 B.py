import sys

input = sys.stdin.readline

def check_transform(s, t):
    while (len(t) > len(s)):
        if t[-1] == 'A':
            t = t[:-1]
        elif t[-1] == 'B':
            t = t[:-1][::-1]
    if t == s:
        print(1)
    else:
        print(0)

S = input().strip()
T = input().strip()

check_transform(S, T)
