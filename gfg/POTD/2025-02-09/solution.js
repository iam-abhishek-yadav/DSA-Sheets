/**
 * @param {Node} root
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
	calculateMaxPathSum(node, globalMax) {
		if (!node) return 0

		let leftSubtreeSum = Math.max(
			this.calculateMaxPathSum(node.left, globalMax),
			0
		)
		let rightSubtreeSum = Math.max(
			this.calculateMaxPathSum(node.right, globalMax),
			0
		)

		globalMax[0] = Math.max(
			globalMax[0],
			leftSubtreeSum + rightSubtreeSum + node.data
		)

		return node.data + Math.max(leftSubtreeSum, rightSubtreeSum)
	}

	findMaxSum(root) {
		let globalMax = [-Infinity]
		this.calculateMaxPathSum(root, globalMax)
		return globalMax[0]
	}
}
