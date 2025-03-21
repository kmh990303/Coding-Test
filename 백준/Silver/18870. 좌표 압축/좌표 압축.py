def binarySearch(lst, target):
    left = 0
    right = len(lst)

    while left < right:
        mid = (left + right) // 2
        if lst[mid] < target:
            left = mid + 1
        else:
            right = mid

    return left


# 정렬한 다음 이분탐색으로 들어갈 수 있는 가장 왼쪽 위치의 인덱스

n = int(input())
arr = list(map(int, input().split()))

tmp_arr = sorted(set(arr))

compressed = [binarySearch(tmp_arr, num) for num in arr]

print(*compressed)