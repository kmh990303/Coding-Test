import sys

input = sys.stdin.readline

n = int(input())
arr = sorted(list(map(int, input().split())))
answer = 0

for idx in range(n):
    target = arr[idx]

    left = 0
    right = n - 1

    while left < right:
        if left == idx:
            left += 1
            continue
        if right == idx:
            right -= 1
            continue
        
        part_sum = arr[left] + arr[right]

        if part_sum == target:
            answer += 1
            break

        elif part_sum > target:
            right -= 1

        else:
            left += 1

print(answer)