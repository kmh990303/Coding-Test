import heapq, sys

input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
arr.sort()

heap = []

heapq.heappush(heap, arr[0][1])

for i in range(1, n):
    start, end = arr[i]
    if heap[0] > start:
        heapq.heappush(heap, end)
    else:
        heapq.heappop(heap)
        heapq.heappush(heap, end)

print(len(heap))