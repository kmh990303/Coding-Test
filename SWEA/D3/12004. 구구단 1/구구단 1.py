def IsMakeTwoMul(N):
    for i in range(1, N+1):
        if N%i==0:
            result = N / i
            if 1 <= i <= 9 and 1 <= result <= 9:
                return True
    return False

n = int(input())

for i in range(1, n+1):
    tc = int(input())
    result = IsMakeTwoMul(tc)

    if result:
        print(f'#{i} Yes')
    else:
        print(f'#{i} No')
