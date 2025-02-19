S = input().strip() # 문자열 입력

# 0의 쌍 개수와 1의 쌍 개수를 세서 더 작은 쌍 개수가 곧 행동의 최소 경우 수

zero_pair = 0
one_pair = 0

standard = S[0] # 기준이 되는 문자열 세팅

for i in range(len(S)):
    if standard != S[i]:
        if standard == '0':
            zero_pair += 1
            standard = '1'
        else:
            one_pair += 1
            standard = '0'

# 마지막 요소에 대한 처리
if S[-1] == '1':
    one_pair += 1
else:
    zero_pair += 1

print(min(one_pair, zero_pair))