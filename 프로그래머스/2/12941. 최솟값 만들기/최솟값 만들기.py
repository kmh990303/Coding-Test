def solution(A, B):
    answer = 0
    
    A.sort()
    B.sort(reverse=True)
    
    leng = len(A)
    
    for i in range(leng):
        answer += A[i] * B[i]
    
    return answer 