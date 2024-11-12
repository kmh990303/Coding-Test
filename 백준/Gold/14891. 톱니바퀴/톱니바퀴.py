import sys
from collections import deque

input = sys.stdin.readline

def spinWheel(direction, wheel):
    if direction == 1: # 시계 방향 회전
        return [wheel[-1]] + wheel[:-1]
    else: # 반시계 방향 회전
        return wheel[1:] + [wheel[0]]



def bfs(wheelNumber, direction, wheels):
    queue = deque([(wheelNumber, direction)])
    visited = [False] * 4
    rotations = [0] * 4
    
    visited[wheelNumber] = True
    rotations[wheelNumber] = direction

    while queue:
        currentWheel, currentDirection = queue.popleft()

        if currentWheel - 1 >= 0 and not visited[currentWheel - 1]: # 왼쪽 바퀴가 존재하며, 방문한 적 없는 경우
            if wheels[currentWheel][6] != wheels[currentWheel - 1][2]: # 톱니바퀴의 극이 다른 경우
                visited[currentWheel - 1] = True
                queue.append((currentWheel - 1, -currentDirection))
                rotations[currentWheel - 1] = -currentDirection
        if currentWheel + 1 < 4 and not visited[currentWheel + 1]:
            if wheels[currentWheel][2] != wheels[currentWheel + 1][6]:
                visited[currentWheel + 1] = True
                queue.append((currentWheel + 1, -currentDirection))
                rotations[currentWheel + 1] = -currentDirection
    for i in range(4):
        if rotations[i] != 0:
            wheels[i] = spinWheel(rotations[i], wheels[i])
            


wheels = []


for _ in range(4):
    line = input().strip() # 줄 바꿈 문자 제거
    wheel = list(map(int, line)) # 공백 없는 문자열 분리 시 split() 안 하면 됨
    wheels.append(wheel)

spinCnt = int(input())
spin = [tuple(map(int, input().split())) for _ in range(spinCnt)]

for num, direction in spin:
    bfs(num - 1, direction, wheels)

score = 0
for i in range(4):
    score += wheels[i][0] * (2 ** i)

print(score)





