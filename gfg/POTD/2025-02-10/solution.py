'''
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None
'''
class Solution:
    def sumK(self,root,k):
        def countPaths(node, currentSum, prefixSumMap):    
            if node is None:
                return 0

            currentSum += node.data
            pathCount = prefixSumMap.get(currentSum - k, 0)

            # Update prefix sum map
            prefixSumMap[currentSum] = prefixSumMap.get(currentSum, 0) + 1

            # Recur for left and right subtrees
            leftPathCount = countPaths(node.left, currentSum, prefixSumMap)
            rightPathCount = countPaths(node.right, currentSum, prefixSumMap)

            # Backtrack by removing the current sum entry
            prefixSumMap[currentSum] -= 1
            if prefixSumMap[currentSum] == 0:
                del prefixSumMap[currentSum]

            return pathCount + leftPathCount + rightPathCount

        prefixSumMap = {0: 1}
        return countPaths(root, 0, prefixSumMap)