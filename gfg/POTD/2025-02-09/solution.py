
'''
class Node:
    def __init__(self,val):
        self.data = val
        self.left = None
        self.right = None
'''

class Solution:
    #Function to return maximum path sum from any node in a tree.
    def calculate_max_path_sum(self, node, global_max):
        if not node:
            return 0
        
        left_subtree_sum = max(self.calculate_max_path_sum(node.left, global_max), 0)
        right_subtree_sum = max(self.calculate_max_path_sum(node.right, global_max), 0)
        
        global_max[0] = max(global_max[0], left_subtree_sum + right_subtree_sum + node.data)
        
        return node.data + max(left_subtree_sum, right_subtree_sum)

    def findMaxSum(self, root):
        global_max = [float('-inf')]
        self.calculate_max_path_sum(root, global_max)
        return global_max[0]
