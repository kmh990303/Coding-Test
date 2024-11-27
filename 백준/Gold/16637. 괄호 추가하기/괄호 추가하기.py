n = int(input())
st = input().strip()

numbers = []
operators = []

max_result = -pow(2, 31)

for ch in st:
    if '0' <= ch <= '9':
        numbers.append(int(ch))
    else:
        operators.append(ch)


def calculate(a, op, b):
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b

def dfs(idx, current_result):
    global max_result

    if idx == len(operators):
        max_result = max(max_result, current_result)
        return

    # 괄호를 사용하지 않는 경우
    next_result = calculate(current_result, operators[idx], numbers[idx + 1])
    dfs(idx + 1, next_result)

    # 괄호를 사용하는 경우
    if idx + 1 < len(operators):
        tmp = calculate(numbers[idx + 1], operators[idx + 1], numbers[idx + 2])
        next_result = calculate(current_result, operators[idx], tmp)
        dfs(idx + 2, next_result)

dfs(0, numbers[0])
print(max_result)