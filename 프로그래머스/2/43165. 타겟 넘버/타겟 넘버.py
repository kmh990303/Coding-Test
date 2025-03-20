def dfs(depth, target, cur_sum, n, numbers):
    if depth == n:
        return 1 if cur_sum == target else 0
    
    return dfs(depth + 1, target, cur_sum + numbers[depth], n, numbers) + dfs(depth + 1, target, cur_sum - numbers[depth], n, numbers)

def solution(numbers, target):
    n = len(numbers)
    
    return dfs(0, target, 0, n, numbers)

