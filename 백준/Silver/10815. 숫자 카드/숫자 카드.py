import sys

input = sys.stdin.readline

n = int(input())
user_card = list(map(int, input().split()))
user_card.sort()

m = int(input())
check_card = list(map(int, input().split()))

answer = []


def binarySearch(lst, target):
    left, right = 0, len(lst) - 1

    while left <= right:
        mid = (left + right) // 2

        if lst[mid] == target:
            return True
        elif lst[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return False


for elem in check_card:
    result = binarySearch(user_card, elem)
    if result:
        answer.append(1)
    else:
        answer.append(0)

print(*answer)
