# 1182번 깊이 값이 1개부터 n 개까지로 늘어나야 함 => 조합 문제

n, s = map(int, input().split())
arr = list(map(int, input().split()))

answer = 0

def back_tracking(cur_depth, target_depth, index, result_arr):
    global answer
    if cur_depth == target_depth:
        if sum(result_arr) == s:
            answer += 1
        return

    for i in range(index, n): # 리스트 append, pop을 하게
        back_tracking(cur_depth + 1, target_depth, i + 1, result_arr + [arr[i]])


for d in range(1, n + 1):
    back_tracking(0, d, 0, [])

print(answer)