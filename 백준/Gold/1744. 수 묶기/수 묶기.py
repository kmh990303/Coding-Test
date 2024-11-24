import sys

input = sys.stdin.readline

n = int(input())
lst = []
for _ in range(n):
    m = int(input())
    lst.append(m)
    
# 양수, 음수, 1로 나누기
positive = []
negative = []
ones = 0

for num in lst:
    if num > 1:
        positive.append(num)
    elif num == 1:
        ones += 1
    else:
        negative.append(num)

positive.sort(reverse = True)
negative.sort()

sum_result = 0
for i in range(0, len(positive) - 1, 2):
    sum_result += positive[i] * positive[i+1]
if len(positive) % 2 == 1:
    sum_result += positive[-1]

for i in range(0, len(negative) - 1, 2):
    sum_result += negative[i] * negative[i + 1]
if len(negative) % 2 == 1:
    sum_result += negative[-1]

sum_result += ones

print(sum_result)