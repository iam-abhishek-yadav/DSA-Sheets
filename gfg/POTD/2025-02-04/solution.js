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
	/**
	 * @param {Node} root
	 * @returns {number}
	 */
	diameter(root) {
		let maxDiameter = 0

		const calculateDepth = (root) => {
			if (root === null) return 0
			const leftDepth = calculateDepth(root.left)
			const rightDepth = calculateDepth(root.right)

			maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth)
			return 1 + Math.max(leftDepth, rightDepth)
		}
		calculateDepth(root)
		return maxDiameter
	}
}
