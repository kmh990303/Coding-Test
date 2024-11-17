def can_transform(current, target):
    if current == target:
        return True
    if len(current) < len(target):
        return False
    result = False

    if current[-1] == 'X':
        result = can_transform(current[:-1], target)
    elif current[-1] == 'Y':
        newSt = current[:-1][::-1]
        result = can_transform(newSt, target)

    return result

t = int(input())

for i in range(1, t+1):
    s=input().rstrip()
    e=input().rstrip()
    ans=can_transform(e,s)

    if ans:
        print(f'#{i} Yes')
    else:
        print(f'#{i} No')