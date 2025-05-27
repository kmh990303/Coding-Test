import sys
from collections import Counter

input = sys.stdin.readline

t = int(input())

n = int(input())
a = list(map(int, input().split()))

m = int(input())
b = list(map(int, input().split()))

# 부분합 생성 함수
def get_sub_sums(arr):
    sub_sums = []

    for i in range(len(arr)):
        total = 0
        for j in range(i, len(arr)):
            total += arr[j]
            sub_sums.append(total)
    return sub_sums

a_sums = get_sub_sums(a)
b_sums = get_sub_sums(b)

b_counter = Counter(b_sums)

result = 0
for a_sum in a_sums:
    result += b_counter[t - a_sum]

print(result)
