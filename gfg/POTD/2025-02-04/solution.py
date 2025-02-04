'''
# Tree Node
class Node:

    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None
'''
class Solution:
    def __init__(self):
        self.maxDiameter = 0

    def diameter(self, root):
        self.calculateDepth(root)
        return self.maxDiameter

    def calculateDepth(self, root):
        if not root:
            return 0

        leftDepth = self.calculateDepth(root.left)
        rightDepth = self.calculateDepth(root.right)

        self.maxDiameter = max(self.maxDiameter, leftDepth + rightDepth)

        return 1 + max(leftDepth, rightDepth)