/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
	boundaryTraversal(root) {
		if (!root) return []

		const leftBorder = []
		const rightBorder = []
		const leafNodes = []

		const traverseLeftBorder = (node) => {
			if (!node || (!node.left && !node.right)) return
			leftBorder.push(node.data)
			if (node.left) traverseLeftBorder(node.left)
			else traverseLeftBorder(node.right)
		}

		const traverseRightBorder = (node) => {
			if (!node || (!node.left && !node.right)) return
			if (node.right) traverseRightBorder(node.right)
			else traverseRightBorder(node.left)
			rightBorder.push(node.data)
		}

		const collectLeafNodes = (node) => {
			if (!node) return
			if (!node.left && !node.right) {
				leafNodes.push(node.data)
				return
			}
			collectLeafNodes(node.left)
			collectLeafNodes(node.right)
		}

		// Add root node
		const result = [root.data]

		// Traverse left border
		traverseLeftBorder(root.left)

		// Collect leaf nodes
		collectLeafNodes(root.left)
		collectLeafNodes(root.right)

		// Traverse right border
		traverseRightBorder(root.right)

		// Combine results
		result.push(...leftBorder, ...leafNodes, ...rightBorder)

		return result
	}
}
