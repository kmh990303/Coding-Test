import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

left, right = 0, n - 1
answer = arr[left] + arr[right]

while left < right:
    sum_val = arr[left] + arr[right]
    if abs(answer) > abs(sum_val):
        answer = sum_val

    if sum_val > 0:
        right -= 1
    else:
        left += 1

print(answer)
