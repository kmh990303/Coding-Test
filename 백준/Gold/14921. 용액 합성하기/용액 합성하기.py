import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

left = 0
right = n - 1
answer = arr[left] + arr[right]

while left < right:
    sum_val = arr[left] + arr[right]
    if abs(answer) > abs(sum_val):
        answer = sum_val
    
    # 합이 0보다 크면 right을 줄임
    if sum_val > 0:
        right -= 1
    # 합이 0보다 작으면 left 증가
    else:
        left += 1

print(answer)