gathers = ['a', 'e', 'i', 'o', 'u']

L, C = map(int, input().split())
arr = list(input().split())
arr.sort()

def back_tracking(depth, index, cur_arr, gather_cnt, consonant_cnt):
    # 목표 깊이에 도달한 경우
    if depth == L:
        # 모음 개수와 자음 개수가 조건을 만족하면 출력
        if gather_cnt >= 1 and consonant_cnt >= 2:
            print(''.join(cur_arr))
        return
    
    # 현재 인덱스부터 남은 원소들로 백트래킹
    for i in range(index, C):
        if arr[i] in gathers:  # 모음일 경우
            back_tracking(depth + 1, i + 1, cur_arr + [arr[i]], gather_cnt + 1, consonant_cnt)
        else:  # 자음일 경우
            back_tracking(depth + 1, i + 1, cur_arr + [arr[i]], gather_cnt, consonant_cnt + 1)

# 백트래킹 시작
back_tracking(0, 0, [], 0, 0)
