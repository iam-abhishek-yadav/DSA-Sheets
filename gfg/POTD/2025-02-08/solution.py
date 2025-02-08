
'''
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None
'''
class Solution:
    def boundaryTraversal(self, root):
        if not root:
            return []

        left_border = []
        right_border = []
        leaf_nodes = []

        def traverse_left_border(node):
            if not node or (not node.left and not node.right):
                return
            left_border.append(node.data)
            if node.left:
                traverse_left_border(node.left)
            else:
                traverse_left_border(node.right)

        def traverse_right_border(node):
            if not node or (not node.left and not node.right):
                return
            if node.right:
                traverse_right_border(node.right)
            else:
                traverse_right_border(node.left)
            right_border.append(node.data)

        def collect_leaf_nodes(node):
            if not node:
                return
            if not node.left and not node.right:
                leaf_nodes.append(node.data)
                return
            collect_leaf_nodes(node.left)
            collect_leaf_nodes(node.right)

        # Add root node
        result = [root.data]

        # Traverse left border
        traverse_left_border(root.left)

        # Collect leaf nodes
        collect_leaf_nodes(root.left)
        collect_leaf_nodes(root.right)

        # Traverse right border
        traverse_right_border(root.right)

        # Combine results
        result.extend(left_border)
        result.extend(leaf_nodes)
        result.extend(right_border)

        return result
