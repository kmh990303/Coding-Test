n, m = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()
result = [0] * m

def back_tracking(depth, index):
    if depth == m:
        for elem in result:
            print(elem, end=" ")
        print()
        return

    temp = 0
    for i in range(index, n):
        if temp != arr[i]:
            result[depth] = arr[i]
            temp = arr[i]
            back_tracking(depth + 1, i)

back_tracking(0, 0)