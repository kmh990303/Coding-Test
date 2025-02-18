gathers = ['a', 'e', 'i', 'o', 'u'] # 자음과 모음 따로 백트래킹하면 같이 출력할 수 없음

L, C = map(int, input().split())

arr = list(input().split())
arr.sort()

def back_tracking(depth, index, cur_arr, gather_cnt, consonant_cnt):
    if depth == L:
        if gather_cnt >= 1 and consonant_cnt >= 2:
            print(''.join(cur_arr))
        return

    for i in range(index, C):
        if arr[i] in gathers:
            back_tracking(depth + 1, i + 1, cur_arr + [arr[i]], gather_cnt + 1, consonant_cnt)
        else:
            back_tracking(depth + 1, i + 1, cur_arr + [arr[i]], gather_cnt, consonant_cnt + 1)

back_tracking(0, 0, [], 0 ,0)