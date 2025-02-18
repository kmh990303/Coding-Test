import sys

input = sys.stdin.readline

n = int(input())

tree = {}

for i in range(n):
    parent, left_child, right_child = input().split()
    tree[parent] = [left_child, right_child]

def pre_order(cur_node): # 전위순회가 Root => Left => right
    if cur_node == '.':
        return
    print(cur_node, end='')
    pre_order(tree[cur_node][0])
    pre_order(tree[cur_node][1])

def in_order(cur_node): # 중위순회
    if cur_node == '.':
        return
    in_order(tree[cur_node][0])
    print(cur_node, end='')
    in_order(tree[cur_node][1])

def post_order(cur_node): # 후위순회
    if cur_node == '.':
        return
    post_order(tree[cur_node][0])
    post_order(tree[cur_node][1])
    print(cur_node, end='')

pre_order('A')
print()
in_order('A')
print()
post_order('A')