import sys

input = sys.stdin.readline

def check_transform(T, S):
    while len(T) > len(S):
        if T[-1] == 'A':  # 맨 끝이 'A'인 경우 A를 제거
            T = T[:-1]
        elif T[-1] == 'B':  # 맨 끝이 'B'인 경우 B를 제거 후 뒤집기
            T = T[:-1][::-1]

    # 변환 완료 후 결과 비교
    return 1 if T == S else 0

S = input().strip()
T = input().strip()

print(check_transform(T, S))
