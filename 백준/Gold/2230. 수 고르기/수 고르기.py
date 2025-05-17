n, m = map(int, input().split())

arr = [int(input()) for _ in range(n)]
arr.sort()

left = 0
right = 0
result = 2_000_000_000

while right < n:
    if arr[right] - arr[left] >= m:
        result = min(result, arr[right] - arr[left])
        left+= 1
    else:
        right += 1
    
    if left > right:
        right = left

print(result)