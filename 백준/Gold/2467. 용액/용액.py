import sys

input = sys.stdin.readline 

n = int(input())
arr = list(map(int,input().split()))

left = 0
right = n - 1

st = abs(arr[left] + arr[right])
value1, value2 = arr[left], arr[right]

while left < right:
    mix = arr[left] + arr[right]
    
    if abs(mix) < st:
        st = abs(mix)
        value1, value2 = arr[left], arr[right]
    
    if mix < 0: 
        left += 1
    else:
        right -= 1

print(value1, value2)