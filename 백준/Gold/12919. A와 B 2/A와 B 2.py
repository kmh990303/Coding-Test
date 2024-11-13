def can_transform(S, T):
    def dfs(current):
        if current == S:
            return True
        if len(current) < len(S):
            return False
        result = False

        if current[-1] == 'A':
            result = dfs(current[:-1])

        if not result and current[0] == 'B':
            result = dfs(current[1:][::-1])

        return result
    return dfs(T)

S = input().strip()
T = input().strip()

if can_transform(S, T):
    print(1)
else:
    print(0)