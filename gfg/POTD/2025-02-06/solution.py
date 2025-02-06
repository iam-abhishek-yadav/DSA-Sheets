
'''
# Node class
class Node:
    def __init__(self,val):
        self.data = val
        self.right = None
        self.left = None

'''
# Note: Build tree and return root node
class Solution:
    def buildTreeHelper(self, inorder, preorder, preIndex, s, e):
        if s > e:
            return None

        root = Node(preorder[preIndex[0]])
        preIndex[0] += 1

        index = inorder.index(root.data, s, e + 1)

        root.left = self.buildTreeHelper(inorder, preorder, preIndex, s, index - 1)
        root.right = self.buildTreeHelper(inorder, preorder, preIndex, index + 1, e)

        return root

    def buildTree(self, inorder, preorder):
        preIndex = [0]
        return self.buildTreeHelper(inorder, preorder, preIndex, 0, len(inorder) - 1)