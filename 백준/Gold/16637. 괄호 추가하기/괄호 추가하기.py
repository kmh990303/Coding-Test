n = int(input())
st = input().strip()

numbers = []
operators = []

for ch in st:
    if '0' <= ch <= '9':
        numbers.append(int(ch))
    else:
        operators.append(ch)

max_result = -pow(2, 31)

def calculate(a, op, b):
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b

# 조합 탐색은 dfs나 bfs 활용할 것
def dfs(idx, current_result):
    global max_result

    # 마지막 숫자까지 탐색한 경우
    if idx == len(operators):
        max_result = max(max_result, current_result)
        return

    # 괄호를 적용하지 않은 경우
    next_result = calculate(current_result, operators[idx], numbers[idx + 1])
    dfs(idx + 1, next_result)

    # 괄호를 적용한 경우
    if idx + 1 < len(operators):
        temp = calculate(numbers[idx + 1], operators[idx + 1], numbers[idx + 2])
        next_result = calculate(current_result, operators[idx], temp)
        dfs(idx + 2, next_result)

dfs(0, numbers[0])
print(max_result)