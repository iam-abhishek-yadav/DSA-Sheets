
'''
# Node Class:
class Node:
    def init(self,val):
        self.data = val
        self.left = None
        self.right = None
'''

class Solution:
    def inOrder(self, root):
        result = []
        self.traverse(root, result)
        return result

    def traverse(self, node, result):
        if not node:
            return
        self.traverse(node.left, result)
        result.append(node.data)
        self.traverse(node.right, result)
