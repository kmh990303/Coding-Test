def solution(n):
    target = bin(n).count("1")
    standard = n + 1
    
    while bin(standard).count("1") != target:
        standard += 1
    
    return standard