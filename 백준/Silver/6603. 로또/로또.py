# while True:
#     arr = list(map(int, input().split()))
#     print(arr)
#     if 0 in arr:
#         break
# 0 이 배열에 있으면 입력 종료

TARGET_DEPTH = 6
result = [0] * TARGET_DEPTH

def back_tracking(cur_depth, index, arr, arr_len): # arr은 경우로 선택할 수 있는 숫자 배열
    if cur_depth == TARGET_DEPTH:
        for elem in result:
            print(elem, end = ' ')
        print()
        return

    for i in range(index, arr_len):
        result[cur_depth] = arr[i]
        back_tracking(cur_depth + 1, i + 1, arr, arr_len)

while True:
    arr = list(map(int, input().split()))

    if 0 in arr:
        break

    arr_len = arr[0]
    real_arr = arr[1:]

    back_tracking(0, 0, real_arr, arr_len)
    print()

