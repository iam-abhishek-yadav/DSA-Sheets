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
 * @param {number} K
 * @return {number}
 */

class Solution {
	sumK(root, K) {
		function countPaths(node, currentSum, prefixSumMap) {
			if (!node) return 0

			currentSum += node.data
			let pathCount = prefixSumMap.get(currentSum - K) || 0

			// Update prefix sum map
			prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1)

			// Recur for left and right subtrees
			let leftPathCount = countPaths(node.left, currentSum, prefixSumMap)
			let rightPathCount = countPaths(node.right, currentSum, prefixSumMap)

			// Backtrack by removing the current sum entry
			prefixSumMap.set(currentSum, prefixSumMap.get(currentSum) - 1)
			if (prefixSumMap.get(currentSum) === 0) {
				prefixSumMap.delete(currentSum)
			}

			return pathCount + leftPathCount + rightPathCount
		}

		let prefixSumMap = new Map()
		prefixSumMap.set(0, 1)
		return countPaths(root, 0, prefixSumMap)
	}
}
