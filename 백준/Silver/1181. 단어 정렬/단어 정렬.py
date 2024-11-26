n = int(input())

word_set = set()
max_len = 0

for _ in range(n):
    word = input().strip()
    word_set.add(word)
    max_len = max(max_len, len(word))

result_lst = sorted(list(word_set))

obj = {}
for word in result_lst:
    word_len = len(word)
    if not obj.get(word_len):
        obj[word_len] = [word]
    else:
        obj[word_len].append(word)

for i in range(1, max_len + 1):
    if obj.get(i):
        for item in obj[i]:
            print(item)
