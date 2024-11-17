

t=int(input())

for i in range(1, t+1):
    st = input().strip()
    dic = {}
    ans=[]
    for ch in st:
        if ch not in dic:
            dic[ch] = 1
        else:
            dic[ch] += 1
    for key in dic.keys():
        if dic[key] % 2 != 0:
            ans.append(key)
    if len(ans) == 0:
        print(f'#{i} Good')
    else:
        ans.sort()
        print(f'#{i} {"".join(ans)}')